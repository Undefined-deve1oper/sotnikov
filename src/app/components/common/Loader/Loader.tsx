import React from "react";
import { twMerge } from "tailwind-merge";

interface LoaderProps {
    size?: string;
    color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size, color }) => {
    const spinnerStyle = twMerge(
        "animate-spin",
        `rounded-full border-t-2 border-b-2 ${color}`
    );

    const containerStyle = twMerge(
        "fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75 z-50"
    );

    return (
        <div className={containerStyle}>
            <div className={spinnerStyle} style={{ height: size, width: size }}></div>
        </div>
    );
};

Loader.defaultProps = {
    size: "16px",
    color: "border-gray-900",
};

export default Loader;