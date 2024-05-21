import { Link } from "@inertiajs/react";
import React from "react";

const CategoryCard = ({ category }) => {
    return (
        <Link className="text-center bg-white py-[32px] rounded-md border">
            <img
                src="/frontend/images/category.png"
                alt=""
                className="mx-auto max-w-[80px] w-full"
            />
            <h4 className="text-xl mt-3 font-bold text-primary">Vegetables</h4>
            <p className="text-sm text-gray-500 font-semibold">
                (165 Products)
            </p>
        </Link>
    );
};

export default CategoryCard;
