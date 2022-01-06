import React from "react";
import Link from "next/link";
import PostMeta from "./PostMeta";

const PostCard = ({ post }) => (
  <div className="bg-gray-700 shadow-lg rounded-md lg:rounded-lg p-0">
    <div className="relative overflow-hidden pb-80 mb-6">
      <img
        src={post.featuredImage.url}
        alt={post.excerpt}
        className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
      />
      <div className="mb-2 font-bold text-white absolute bottom-2 right-2">
        {post.categories.map((cat) => {
          return (
            <span
              className="bg-gradient-to-r from-red-500 to-yellow-500 text-gray-900 font-bold rounded-md p-1 mr-1"
              key={cat.slug}
            >
              {cat.name}
            </span>
          );
        })}
      </div>
    </div>
    <h2 className="text-center mb-4 px-2 lg:px-4 cursor-pointer text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h2>
    <PostMeta post={post} />
    <p className="text-center text-md text-white font-normal px-4 lg:px-10 mb-6">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block text-xl font-semibold rounded-full text-gray-700 px-8 py-3 cursor-pointer mb-6 bg-gradient-to-r from-red-500 to-yellow-500">
          Continue Reading
        </span>
      </Link>
    </div>
  </div>
);

export default PostCard;
