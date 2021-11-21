import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-1 mb-8 shadow-lg rounded-md lg:rounded-lg">
      <div className="bg-gray-700 shadow-lg rounded-md lg:rounded-lg p-3 sm:p-6 lg:p-8">
        <h3 className="text-2xl mb-4 font-semibold border-b border-red-500 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">{slug ? 'Related Posts' : 'Recent Posts'}</h3>
        {relatedPosts.map((post, index) => (
          <div key={index} className="flex items-center w-full mb-2">
            <div className="w-16 flex-none">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.title} height="60px" width="60px" unoptimized className="align-middle rounded-full" src={post.featuredImage.url}/>
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-200 font-xs">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
              <Link href={`/post/${post.slug}`} className="text-md" key={index}><span className="text-white cursor-pointer">{post.title}</span></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
