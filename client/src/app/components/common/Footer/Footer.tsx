import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="py-4 px-4 bg-slate-300">
            <p className="text-center">
                &copy;{new Date().getFullYear()} SDAEM.BY | All rights reserved
                | This website was created by{" "}
                <b>Kononov Kirill</b>
            </p>
        </footer>
    );
};

export default Footer;