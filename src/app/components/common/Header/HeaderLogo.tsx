import React from "react";
import { NavLink } from "react-router-dom";

interface ILogo {
    link: string;
    src: string;
    label: string;
}

const HeaderLogo: React.FC<ILogo> = ({ link, src, label }) => {
    return (
        <NavLink
            to={link}
            className='flex mr-3 flex-none overflow-hidden md:w-auto text-slate-200 items-center mr-auto'
        >
            <img
                src={src}
                className='h-8 inline-block items-center'
                alt='logo'
            />
            <span className='text-slate-800 mx-4 font-bold'>{label}</span>
        </NavLink>
    );
};

export default HeaderLogo;
