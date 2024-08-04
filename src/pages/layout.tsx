import React from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer";

export const Layout = ({children}:any) => {
   return (
        <div>
        <Header />
            { children }
        <Footer />
        </div>
   );
}

export default Layout;