import React from "react";
import Frontend from "@/Layouts/Frontend";
import { Head } from "@inertiajs/react";
const Shop = ({ query = null, products = [] }) => {
    return (
        <div>
            <h1>Shop</h1>
        </div>
    );
};
Shop.layout = (page) => <Frontend children={page} pageTitle="Shop" />;

export default Shop;
