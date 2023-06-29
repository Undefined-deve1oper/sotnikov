import { useState } from "react";
import StyledNavLink from "../StyledNavLink";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative block sm:hidden">
            <input
                type="checkbox"
                className="menu-toggle hidden"
                id="menu-toggle"
                checked={isOpen}
                onChange={toggleMenu}
            />
            <label
                htmlFor="menu-toggle"
                className="burger cursor-pointer w-5 h-5 flex flex-col justify-between"
            >
                <span className="burger-line block h-1 w-full rounded-full bg-black"></span>
                <span className="burger-line block h-1 w-2/3 rounded-full bg-black"></span>
                <span className="burger-line block h-1 w-1/2 rounded-full bg-black"></span>
            </label>
            {isOpen && (
                <div className="menu bg-white h-screen fixed top-16 left-0 z-50 px-4 w-3/5 md:w-64 lg:w-80 flex flex-col animate-fade">
                    <StyledNavLink onClick={toggleMenu} className="px-0" to="/" end>
                        Posts
                    </StyledNavLink>
                    <StyledNavLink onClick={toggleMenu} className="px-0" to="/photos">
                        Photos
                    </StyledNavLink>
                    <StyledNavLink onClick={toggleMenu} className="px-0" to="/tasks">
                        Tasks
                    </StyledNavLink>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
