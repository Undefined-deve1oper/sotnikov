import React from "react";
import { ToastContainer } from "react-toastify";
import { withRouter } from "./components/ui/HOC";
import AppRouter from "./router/AppRouter";
import "../index.css";
import AppLoader from "./components/ui/HOC/appLoader/appLoader";

const App: React.FC = () => {

    return (
        <AppLoader>
            <AppRouter />
            <ToastContainer />
        </AppLoader>
    );
};

const AppRoutes = withRouter(App);
export default AppRoutes;