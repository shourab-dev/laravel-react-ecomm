import { Link } from "@inertiajs/react";
import React from "react";

const Pagination = ({ links, className }) => {
    return (
        <div className={`text-center  ${className}`}>
            {links.map((link) => (
                <Link
                    preserveScroll
                    className={`mx-2 border py-2 px-4 hover:bg-primary hover:text-white ${link.active ? 'bg-primary text-white':''} ${!link.url ? 'cursor-not-allowed hover:bg-white hover:!text-gray-800 opacity-50' : '' }`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    key={link.label}
                    href={link.url}
                ></Link>
            ))}
        </div>
    );
};

export default Pagination;
