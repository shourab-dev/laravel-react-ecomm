import React from "react";
import { Link } from "@inertiajs/react";
const Title = ({ title, url = 'home', label, action = null }) => {
    const handleClick = (e) => {
        if (action) {
            e.preventDefault();
            action();
        }
    };

    return (
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Link onClick={handleClick} className="btn" href={route(url)}>
                {label}
            </Link>
        </div>
    );
};

export default Title;
