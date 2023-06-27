import React, { ReactNode } from "react";
import { childrenProps } from "../../../../types/interfaces";
import Wrapper from "../../../common/Wrapper";

const AppLoader: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default AppLoader;
