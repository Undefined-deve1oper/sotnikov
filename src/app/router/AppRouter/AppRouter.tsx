import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loader from "../../components/common/Loader";
import routes from "../index";

const AppRouter: React.FC = () => {
    const elements = useRoutes(routes);

    return <Suspense fallback={<Loader />}>{elements}</Suspense>;
};

export default AppRouter;
