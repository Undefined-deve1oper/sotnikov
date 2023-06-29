import React, { ReactNode } from "react";
import { childrenProps } from "../../../types/interfaces";

const ScreenWidthWrapper: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    return (
        <div className="relative max-w-7xl px-4 sm:px-6 md:px-8 w-full mx-auto">
            {children}
        </div>
    );
};

export default ScreenWidthWrapper;
