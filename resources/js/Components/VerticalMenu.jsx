import { Link } from "@inertiajs/react";
import React from "react";

const VerticalMenu = ({ links = [], title, children }) => {
    return (
        <>
            <div>
                <h3 className="text-xl mb-3">{title}</h3>
                <span className="w-[28px] rounded-md bg-primary h-[2px] block"></span>
            </div>
            {links?.length > 0 ? (
                <ul className="mt-5">
                    {links?.map((url, index) => (
                        <li key={url.id} className="my-3">
                            <Link
                                className="hover:ms-3 transition-all duration-300"
                                href={route(url?.url)}
                            >
                                {url?.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : null}
            {children}
        </>
    );
};

export default VerticalMenu;
