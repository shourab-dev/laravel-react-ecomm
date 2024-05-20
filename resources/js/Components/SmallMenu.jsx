import React from "react";
import { Link } from "@inertiajs/react";
const SmallMenu = ({ links = [], categories = [] }) => {
    return (
        <>
            {links.map((link) => (
                <Link
                    key={link?.id}
                    href={route(link?.url)}
                    className="hover:ms-2 transition-all duration-500 py-2 border-b flex  "
                >
                    {link?.title}
                </Link>
            ))}
            {categories?.map((category) => (
                <Link
                    key={category?.id}
                    href={category.slug}
                    className="hover:ms-2 transition-all duration-500 py-2 border-b flex  "
                >
                    {category?.title}
                </Link>
            ))}
        </>
    );
};

export default SmallMenu;
