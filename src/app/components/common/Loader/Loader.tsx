import React from "react";
import { Backdrop, BackdropProps, CircularProgress } from "@mui/material";


const Loader: React.FC<BackdropProps> = (props) => {
    return (
        <Backdrop {...props}>
            <CircularProgress color="secondary" />
        </Backdrop>
    );
};

export default Loader;