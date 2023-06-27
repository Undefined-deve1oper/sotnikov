import React from "react";
import { Outlet } from "react-router-dom";

const Posts: React.FC = () => {
    return (
        <div className="container mx-auto">
            <Outlet />
        </div>
    );
};

export default Posts;