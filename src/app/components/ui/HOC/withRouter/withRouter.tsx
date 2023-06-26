import { ComponentType } from "react";
import { BrowserRouter } from "react-router-dom";

const withRouter =
    (Component: ComponentType<any>) =>
        ({ ...props }) => {
            return (
                <BrowserRouter>
                    <Component {...props} />
                </BrowserRouter>
            );
        };

export default withRouter;
