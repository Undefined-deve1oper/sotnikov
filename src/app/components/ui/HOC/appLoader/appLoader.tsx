import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsersLoadingStatus, loadUsersList, useAppDispatch } from "../../../../store";
import { loadPostsList } from "../../../../store/slices/posts";
import { childrenProps } from "../../../../types/interfaces";
import Loader from "../../../common/Loader";
import Wrapper from "../../../common/Wrapper";

const AppLoader: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    const usersStatusLoading = useSelector(getUsersLoadingStatus());
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadPostsList());
        dispatch(loadUsersList());
    }, []);

    if (usersStatusLoading) return <Loader />;

    return <Wrapper>{children}</Wrapper>;
};

export default AppLoader;
