import React from "react";
import { ToastContainer } from "react-toastify";
import { withRedux, withRouter, AppLoader } from "./components/ui/HOC";
import AppRouter from "./router/AppRouter";
import "../index.css";

const App: React.FC = () => {
    return (
        <AppLoader>
            <AppRouter />
            <ToastContainer />
        </AppLoader>
    );
};

const AppWithStoreAndRoutes = withRedux(withRouter(App));
export default AppWithStoreAndRoutes;