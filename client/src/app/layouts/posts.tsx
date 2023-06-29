import React from "react";
import { Outlet } from "react-router-dom";

const Posts: React.FC = () => {
    return (
        <div className="w-full">
            <div className="max-w-7xl py-5 px-4 sm:px-6 md:px-8 w-full mx-auto">
                <Outlet />
            </div>
        </div>
    );
};

export default Posts;