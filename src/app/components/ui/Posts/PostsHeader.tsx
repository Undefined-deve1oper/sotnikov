import React from "react";

const PostsHeader: React.FC = () => {
    return (
        <header className='sm:text-center'>
            <h1 className='mb-4 text-3xl sm:text-4xl tracking-tight text-slate-900 font-extrabold'>
                Our Posts
            </h1>
            <p className='text-lg text-slate-700'>
                All the latest React Router news, straight from the team.
            </p>
        </header>
    );
};

export default PostsHeader;