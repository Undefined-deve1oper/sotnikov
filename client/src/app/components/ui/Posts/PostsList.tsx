import React, { ReactNode } from "react";
import { IPost, childrenProps } from "../../../types/interfaces";
import PostsListItem from "./PostsListItem";

interface PostsProps {
    posts: IPost[]
}

const PostsListWrapper: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    return (
        <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block" />
            <div className="space-y-16">{children}</div>
        </div>
    );
};

const PostsList: React.FC<PostsProps> = ({ posts }) => {
    return (
        <PostsListWrapper>
            {posts.map((post) => (
                <PostsListItem item={post} key={post.id} />
            ))}
        </PostsListWrapper>
    );
};

export default PostsList;