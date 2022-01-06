import React from "react";
import Image from "next/image";
import { grpahCMSImageLoader } from "../util";
import { IAuthor } from "../services/types";

const Author = ({ author }: { author: IAuthor }) => (
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 mb-8 shadow-lg rounded-md lg:rounded-lg mt-20">
    <div className="text-center p-6 px-3 sm:px-6 lg:px-8 relative rounded-md lg:rounded-lg bg-gray-700">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full border-2"
          src={author.photo.url}
        />
      </div>
      <h3 className="mt-8 mb-3 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
        {author.name}
      </h3>
      <p className="text-white text-ls">{author.bio}</p>
    </div>
  </div>
);

export default Author;
