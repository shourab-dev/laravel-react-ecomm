import React from "react";
import { profileSidebar } from "@/utils/NavBarLinks";
import { Link } from "@inertiajs/react";
import { BsGrid1X2Fill } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { IoBagHandleOutline, IoSettingsOutline } from "react-icons/io5";

const ProfileSidebar = ({ className }) => {
    const icons = [
        <BsGrid1X2Fill />,
        <AiOutlineHistory />,
        <CiHeart />,
        <IoBagHandleOutline />,
        <IoSettingsOutline />,
        <IoIosLogOut />,
    ];
    return (
        <div className={`border border-gray-300 ${className}`}>
            <ul>
                {profileSidebar.map((link, index) => (
                    <li>
                        <Link
                            className={`py-3 block px-4 hover:bg-primary/5 text-gray-400 hover:text-gray-800 hover:font-semibold border-l-2 border-transparent transition-all duration-500 hover:border-primary ${
                                route().current(link.url)
                                    ? "border-primary font-semibold text-gray-800 bg-primary/5"
                                    : ""
                            }`}
                            href={link.url}
                        >
                            <span className="me-2 text-xl">{icons[index]}</span>{" "}
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileSidebar;
