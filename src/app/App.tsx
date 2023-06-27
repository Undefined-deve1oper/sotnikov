import React from "react";
import { ToastContainer } from "react-toastify";
import { withRouter } from "./components/ui/HOC";
import AppRouter from "./router/AppRouter";
import "../index.css";

const App: React.FC = () => {

    return (
        <div className="">
            <AppRouter />
            <ToastContainer />
        </div>
    );
};

const AppRoutes = withRouter(App);
export default AppRoutes;