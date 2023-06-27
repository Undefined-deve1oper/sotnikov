import React, { ReactNode } from "react";
import Header from "../Header";
import { childrenProps } from "../../../types/interfaces";
import Footer from "../Footer";

const Wrapper: React.FC<childrenProps<ReactNode>> = ({ children }) => {
    return (
        <>
            <Header />
            <main className="page">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Wrapper;