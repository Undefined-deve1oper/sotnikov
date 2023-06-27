import { useRef, useState } from "react";
import { Transition } from "react-transition-group";
import StyledNavLink from "../StyledNavLink";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
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
            <Transition in={isOpen} timeout={300} unmountOnExit nodeRef={menuRef}>
                {(state) => (
                    <div
                        ref={menuRef}
                        className={`menu bg-white h-screen fixed top-0 left-0 z-50 p-8 transition-opacity ${state === "entered" ? "opacity-100" : "opacity-0"} md:w-64 lg:w-80 flex flex-col`}
                    >
                        <StyledNavLink to="/" end>
                            Posts
                        </StyledNavLink>
                        <StyledNavLink to="/photos">Photos</StyledNavLink>
                        <StyledNavLink to="/tasks">Tasks</StyledNavLink>
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default BurgerMenu;
