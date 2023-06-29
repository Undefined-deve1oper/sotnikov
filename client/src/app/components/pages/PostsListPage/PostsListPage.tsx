import React from "react";
import { useSelector } from "react-redux";
import { getFilteredPosts } from "../../../store/slices/posts";
import { PostsFilter, PostsHeader, PostsList } from "../../ui/Posts";

const PostsListPage: React.FC = () => {
    const posts = useSelector(getFilteredPosts());

    return (
        <div className="flex flex-col gap-10">
            <PostsHeader />
            <PostsFilter />
            <PostsList posts={posts} />
        </div>
    );
};

export default PostsListPage;