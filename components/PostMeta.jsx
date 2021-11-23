import React from 'react'
import moment from 'moment';

const PostMeta = ({ post }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center mb-4 w-full">
                <div className="flex items-center justify-center lg:mb-0 lg:w-auto mr-8 items-center ml-4 pb-1 pt-1">
                    <img alt={post.author.name} height="30px" width="30px" className="align-middle rounded-full"
                        src={post.author.photo.url} />
                    <p className="inline align-middle text-white ml-2 font-medium text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-white pb-1 pt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                </div>
            </div>
        </div>
    )
}

export default PostMeta
