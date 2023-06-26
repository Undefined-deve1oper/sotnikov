import React from "react";
import { withRouter } from "./components/ui/HOC";

const App: React.FC = () => {
    return (
        <div>App</div>
    );
};

const AppRoutes = withRouter(App);
export default AppRoutes;