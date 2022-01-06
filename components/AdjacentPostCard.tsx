import React from "react";
import moment from "moment";
import Link from "next/link";
import { IPost } from "../services/types";

const AdjacentPostCard = ({
  post,
  position,
}: {
  post: IPost;
  position: string;
}) => (
  <>
    <div
      className="absolute rounded-md lg:rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 opacity-40"
      title={post.title}
      aria-label={post.title}
      style={{ backgroundImage: `url('${post.featuredImage.url}')` }}
    />
    <div className="absolute rounded-md lg:rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-700 via-gray-800 to-black w-full h-72" />
    <div className="flex flex-col rounded-md lg:rounded-lg p-2 items-center justify-center absolute w-full h-full">
      <p className="text-white text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white font-semibold text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
        {post.title}
      </p>
    </div>
    <Link href={`/post/${post.slug}`}>
      <span className="z-10 cursor-pointer absolute w-full h-full" />
    </Link>
    {position === "LEFT" && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 left-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white w-full mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
    )}
    {position === "RIGHT" && (
      <div className="absolute arrow-btn bottom-5 text-center py-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500 right-4 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white w-full mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>
    )}
  </>
);

export default AdjacentPostCard;
