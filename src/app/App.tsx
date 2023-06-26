import React, { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { withRouter } from "./components/ui/HOC";
import { darkTheme, lightTheme } from "./theme";

const App: React.FC = () => {
    const [isDarkMode] = useState(true);

    const theme = isDarkMode ? darkTheme : lightTheme;

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
            </ThemeProvider>
            <ToastContainer />
        </div>
    );
};

const AppRoutes = withRouter(App);
export default AppRoutes;