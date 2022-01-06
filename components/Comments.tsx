import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 mb-8 shadow-lg rounded-md lg:rounded-lg">
          <div className="bg-gray-700 shadow-lg rounded-md lg:rounded-lg p-3 sm:p-6 lg:p-8">
            <h3 className="text-2xl font-semibold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
              &nbsp;{comments.length} &nbsp; Comments
            </h3>
            {comments.map((comment, index) => (
              <div key={index} className="border-t border-cyan-500 mb-2 pt-4">
                <p className="mb-4">
                  <span className="font-semibold text-gray-100">
                    {comment.name}
                  </span>
                  <span className="text-gray-300">
                    &nbsp; on &nbsp;{" "}
                    {moment(comment.createdAt).format("MMM DD, YYYY")}
                  </span>
                </p>
                <p className="whitespace-pre-line text-gray-100 w-full">
                  {parse(comment.comment)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
