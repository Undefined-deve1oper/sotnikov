import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { withRouter } from "./components/ui/HOC";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

const App: React.FC = () => {
    const [isDarkMode] = useState(false);

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