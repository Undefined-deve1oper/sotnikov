import React from "react";

const PostListItemSkeleton: React.FC = () => {
    return (
        <article className="relative group rounded-md opacity-75 animate-pulse">
            <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></div>
            {/* circle */}
            <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-slate-200  md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
            >
                <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white "
                    strokeWidth="2"
                ></circle>
            </svg>
            <div className="relative">
                {/* date */}
                <div className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)] bg-slate-300  w-24 h-6 rounded-md" />
                {/* title */}
                <div className=" pt-8 lg:pt-0  ">
                    <div className="h-6 max-w-[35ch] w-full bg-slate-300 rounded-md"></div>
                </div>
                {/* content */}
                <div className="mt-2 mb-4 w-full max-w-[65ch] h-20 bg-slate-300 rounded-md" />
            </div>
            {/* read more */}
            <div className=" h-5 w-24 bg-slate-300 rounded-md"></div>
        </article>
    );
};

export { PostListItemSkeleton };