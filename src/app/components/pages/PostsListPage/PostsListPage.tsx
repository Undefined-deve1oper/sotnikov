import React from "react";
import { useSelector } from "react-redux";
import { getPostsList } from "../../../store/slices/posts";
import { PostCard } from "../../ui/Posts";

const PostsListPage: React.FC = () => {
    const posts = useSelector(getPostsList());

    return (
        <div className="px-4 py-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Посты</h2>
                <div className="flex items-center">
                    <label htmlFor="postPerPage" className="mr-2">Количество постов:</label>
                    <select id="postPerPage" className="border border-gray-300 rounded-md px-2 py-1">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="all">Все</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {posts.map((post) => (
                    <PostCard body={post.body} title={post.title} key={post.id} />
                ))}
            </div>
        </div>
    );
};

export default PostsListPage;