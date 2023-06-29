import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getUserById } from "../../../store";
import { IPost } from "../../../types/interfaces";
import DateDisplay from "../../common/DateDisplay";
import PostActions from "./PostActions";
import { randomDate } from "../../../utils/dateHelpers";

interface ItemProps {
    item: IPost;
}

const PostsListItem: React.FC<ItemProps> = ({ item }) => {
    const { userId, id: postId, title, body: content } = item;
    const publishDate = randomDate(new Date(2022, 0, 1), new Date());
    const author = useSelector(getUserById(userId));

    return (
        <article className="relative group">
            <svg
                viewBox="0 0 9 9"
                className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
            >
                <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth="2"
                ></circle>
            </svg>
            <div className="relative">
                <p className="text-base font-light pt-8 pb-2 lg:pt-0">posted by <b>{author?.username}</b></p>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-200 pt-0">
                    {title}
                </h3>
                <div className="mt-2 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
                    <p>{content}</p>
                </div>
                <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    <dd className="whitespace-nowrap text-sm leading-6 dark:text-slate-400">
                        <DateDisplay value={publishDate} />
                    </dd>
                </dl>
            </div>
            <div className="flex items-center justify-between gap-4">
                <NavLink
                    to={String(postId)}
                    className="flex items-center text-sm text-sky-500 font-medium"
                >
                    {/* <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span> */}
                    <span className="relative">Read more</span>
                    <svg
                        className="relative mt-px overflow-visible ml-2.5 text-sky-300 dark:text-sky-700"
                        width="3"
                        height="6"
                        viewBox="0 0 3 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M0 0L3 3L0 6"></path>
                    </svg>
                </NavLink>
                <PostActions
                    onComment={console.log}
                    onDelete={console.log}
                    onEdit={console.log}
                    onSave={console.log}
                />
            </div>
        </article>
    );
};

const PostListItemSkeleton = () => {
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

export default PostsListItem;