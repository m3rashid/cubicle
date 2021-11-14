import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-6 px-3 sm:px-6 lg:px-8 relative rounded-md bg-gray-700 bg-opacity-50">
    <div className="absolute left-0 right-0 -top-14">
      <Image unoptimized loader={grpahCMSImageLoader} alt={author.name} height="100px" width="100px" className="align-middle rounded-full" src={author.photo.url} />
    </div>
    <h3 className="mt-8 mb-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default Author;
