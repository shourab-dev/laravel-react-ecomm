import React from "react";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "@inertiajs/react";
const MenuDropDown = ({ links = [] }) => {
    const [dropDown, setDropDown] = useState(true);

    return (
        <>
            <button
                onClick={(e) => setDropDown(!dropDown)}
                className="flex bg-primary text-white justify-between items-center p-3 w-[100%]"
            >
                <RiMenu3Line />
                <span className="mx-3">All Categories</span>
                <MdKeyboardArrowDown />
            </button>

            {links?.length > 0 && (
                <div
                    className={`absolute top-full bg-white shadow-md w-full py-2 px-3 transition-all ${
                        !dropDown
                        ? "opacity-0 invisible mt-[20px]"
                        : "opacity-100 visible mt-[0px]"
                    }`}
                >
                    {links?.map((link) => (
                        <Link
                            key={link?.id}
                            href={link?.url}
                            className="hover:ms-2 transition-all duration-500 py-2 border-b flex  "
                        >
                            {link.img && (
                                <img
                                    src={link?.img}
                                    alt={link?.title}
                                    className="w-5 me-2"
                                />
                            )}
                            {link?.title}
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default MenuDropDown;
