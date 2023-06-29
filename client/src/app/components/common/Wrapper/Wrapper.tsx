import React, { ReactNode } from "react";
import { childrenProps } from "../../../types/interfaces";
import Footer from "../Footer";
import Header from "../Header";

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