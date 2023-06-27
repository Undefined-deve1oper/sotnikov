import React, { ReactNode } from "react";
import { childrenProps } from "../../../types/interfaces";

const HeaderLinkList: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    return (
        <div className='relative items-center ml-auto'>
            <nav className='text-sm leading-6 font-semibold text-slate-700'>
                <ul className='flex  items-center space-x-4'>{children}</ul>
            </nav>
        </div>
    );
};

export default HeaderLinkList;
