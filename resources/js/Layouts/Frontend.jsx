import Navbar from "@/Components/Navbar";
import React from "react";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { storeCategories } from "@/store/slices/CategorySlice";

const Frontend = ({ children, pageTitle = "Ecommerce" }) => {
    const [categories, setCategories] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(route("categories.data.all")).then(({ data }) => {
            dispatch(storeCategories(data));
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
