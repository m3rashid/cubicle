import React, { useState, useEffect, useRef } from "react";
import { submitComment } from "../services";

const CommentsForm = ({ slug }: { slug: string }) => {
  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const commentEl = useRef<HTMLTextAreaElement | any>(null);
  const nameEl = useRef<HTMLInputElement | any>(null);
  const emailEl = useRef<HTMLInputElement | any>(null);
  const storeDataEl = useRef<HTMLInputElement | any>(null);

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name");
      window.localStorage.removeItem("email");
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 6000);
    });
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-1 mb-8 shadow-lg rounded-md lg:rounded-lg">
      <div className="bg-gray-700 shadow-lg rounded-md lg:rounded-lg p-3 sm:p-6 lg:p-8">
        <h3 className="text-2xl mb-8 font-semibold border-b border-cyan-500 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
          Leave a Reply
        </h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            ref={commentEl}
            className="p-4 outline-none w-full rounded-md lg:rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-900"
            placeholder="Comment"
            name="comment"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            ref={nameEl}
            className="py-2 px-4 outline-none w-full rounded-md lg:rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-900"
            placeholder="Name"
            name="name"
          />
          <input
            type="text"
            ref={emailEl}
            className="py-2 px-4 outline-none w-full rounded-md lg:rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-900"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <input
              type="checkbox"
              ref={storeDataEl}
              id="storeData"
              name="storeData"
              value="true"
            />
            <label
              className="text-gray-100 cursor-pointer ml-2"
              htmlFor="storeData"
            >
              {" "}
              Save my Email and Name for next time I comment.
            </label>
          </div>
        </div>
        {error && (
          <p className="text-s text-cyan-500">All fields are required</p>
        )}
        <div className="mt-8">
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="text-lg font-semibold rounded-xl text-gray-700 px-4 py-2 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Post Comment
          </button>
          {showSuccessMessage && (
            <span className="text-xl float-right font-semibold mt-3 text-green-500">
              Comment submitted for review
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
