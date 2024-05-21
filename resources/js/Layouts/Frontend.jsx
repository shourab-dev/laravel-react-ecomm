import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Frontend = ({ children, pageTitle = "Ecommerce" }) => {
    const [categories, setCategories] = useState(null);
    useEffect(() => {
        axios.get(route("categories.data.all")).then(({ data }) => {
            setCategories(data);
        });
    }, []);

    return (
        <>
            <Head title={pageTitle} />

            <Navbar categories={categories} />
            {children}
        </>
    );
};

export default Frontend;
