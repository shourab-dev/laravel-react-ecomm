import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
const Frontend = ({ children, pageTitle = 'Ecommerce' }) => {
    return (
        <>
            <Head title={pageTitle} />

            <Navbar />
            {children}
        </>
    );
};

export default Frontend;
