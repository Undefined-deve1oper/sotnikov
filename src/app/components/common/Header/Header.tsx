import React from "react";
import StyledNavLink from "../StyledNavLink";
import HeaderLinkList from "./HeaderLinkList";
import HeaderLogo from "./HeaderLogo";
import HeaderWrapper from "./HeaderWrapper";
import BurgerMenu from "../BurgerMenu";

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderLogo
                link="/"
                src={process.env.PUBLIC_URL + "/img/logo.png"}
                label="Sotnikov"
            />
            <HeaderLinkList>
                <StyledNavLink to="/" end>
                    Posts
                </StyledNavLink>
                <StyledNavLink to="/photos">Photos</StyledNavLink>
                <StyledNavLink to="/tasks">Tasks</StyledNavLink>
            </HeaderLinkList>
            <BurgerMenu />
        </HeaderWrapper>
    );
};

export default Header;