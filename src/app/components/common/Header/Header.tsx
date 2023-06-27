import React from "react";
import { NavLink } from "react-router-dom";

const listHeader = [
    { id: 0, name: "Posts", path: "/" },
    { id: 1, name: "Photos", path: "/photos" },
    { id: 2, name: "Tasks", path: "/tasks" },
];

const Header: React.FC = () => {
    return (
        <div className="bg-yellow-600 py-4">
            <div className="container mx-auto">
                <div className="flex flex-row">
                    {listHeader.map((item) => {
                        return (
                            <NavLink to={item.path} key={item.id}>
                                <div className="px-4">
                                    <p className="text-white capitalize">{item.name}</p>
                                </div>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Header;