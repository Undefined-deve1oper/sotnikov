import React, { ReactNode, useEffect } from "react";
import { childrenProps } from "../../../../types/interfaces";
import Wrapper from "../../../common/Wrapper";
import { useAppDispatch } from "../../../../store";
import { loadPostsList } from "../../../../store/slices/posts";

const AppLoader: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPostsList());
    }, []);

    return <Wrapper>{children}</Wrapper>;
};

export default AppLoader;
