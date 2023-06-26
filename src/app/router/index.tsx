import React from "react";
import { Navigate } from "react-router-dom";

const Posts = React.lazy(() => import("../layouts/posts"));
const Photos = React.lazy(() => import("../layouts/photos"));
const Tasks = React.lazy(() => import("../layouts/tasks"));

const routes = [
    { path: "/", element: <Posts /> },
    {
        path: "photos",
        element: <Photos />,
    },
    { path: "tasks", breadcrumb: "Контакты", element: <Tasks /> },
    { path: "*", element: <Navigate to="/" /> }
];

export default routes;