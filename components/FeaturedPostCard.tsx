import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { IPost } from "../services/types";

const FeaturedPostCard = ({ post }: { post: IPost }) => (
  <div className="relative h-72">
    <div
      className="absolute rounded-md lg:rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 opacity-40"
      title={post.title}
      aria-label={post.title}
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-md lg:rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-700 via-gray-800 to-black w-full h-72" />
    <div className="flex flex-col rounded-md lg:rounded-lg p-2 items-center justify-center absolute w-full h-full">
      <p className="text-white mb-3 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="mb-3 font-semibold text-xl text-center text-white">
        {post.title}
      </p>
      <div className="flex items-center justify-center mb-3 w-full">
        <Image
          unoptimized
          alt={post.author.name}
          height="30px"
          width="30px"
          src={post.author.photo.url}
          className="align-middle drop-shadow-lg rounded-full"
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium text-sm">
          {post.author.name}
        </p>
      </div>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
