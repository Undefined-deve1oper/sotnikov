import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../../store";

const withRedux =
    (Component: any) =>
        ({ ...props }) => {
            return (
                <Provider store={store}>
                    <Component {...props} />
                </Provider>
            );
        };

export default withRedux;
