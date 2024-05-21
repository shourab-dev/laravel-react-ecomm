import React, { useState } from "react";
import { menus } from "@/utils/NavBarLinks";
import MenuDropDown from "./MenuDropDown";
import { Link } from "@inertiajs/react";
import { MdOutlinePhoneInTalk } from "react-icons/md";

const BottomHeader = ({categories}) => {
    return (
        <div className="bg-white border-t border-b shadow hidden md:block">
            <div className="container grid grid-cols-12 items-center">
                <div className="col-span-2 relative">
                    <MenuDropDown links={categories} />
                </div>
                <div className="col-span-8 px-10 text-center">
                    {menus.map((menu, index) => (
                        <Link
                        key={menu.id}
                            className={`hover:text-primary text-gray-500 font-bold me-[32px] ${
                                route().current(menu.url) ? "text-primary" : ""
                            }`}
                            href={route(menu.url)}
                        >
                            {menu.title}
                        </Link>
                    ))}
                </div>
                <div className="col-span-2">
                    <a href="tel:(219) 555-0114" className="flex items-center justify-end text-md ">
                        <MdOutlinePhoneInTalk className="me-2 text-2xl" />
                        (219) 555-0114
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;
