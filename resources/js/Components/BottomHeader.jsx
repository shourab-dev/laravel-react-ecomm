import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "@inertiajs/react";

const BottomHeader = () => {

    const [dropDown, setDropDown] = useState(false)


    return (
        <div className="bg-gray-100 hidden md:block">
            <div className="container grid grid-cols-12">
                <div className="col-span-3 relative">
                    <button className="flex bg-primary text-white justify-between items-center p-3 w-[100%]">
                        <RiMenu3Line />
                        <span className="mx-3">All Categories</span>
                        <MdKeyboardArrowDown />
                    </button>
                    <div className="absolute top-full bg-white shadow-md w-full py-2 px-3">
                        <Link href="#" className="py-2 border-b flex  ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3205/3205424.png"
                                alt=""
                                className="w-5 me-2"
                            />
                            Fashion
                        </Link>
                        <Link href="#" className="py-2 border-b flex  ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3205/3205424.png"
                                alt=""
                                className="w-5 me-2"
                            />
                            Fashion
                        </Link>
                        <Link href="#" className="py-2 border-b flex  ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3205/3205424.png"
                                alt=""
                                className="w-5 me-2"
                            />
                            Fashion
                        </Link>
                        <Link href="#" className="py-2 border-b flex  ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3205/3205424.png"
                                alt=""
                                className="w-5 me-2"
                            />
                            Fashion
                        </Link>
                        <Link href="#" className="py-2 border-b flex  ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3205/3205424.png"
                                alt=""
                                className="w-5 me-2"
                            />
                            Fashion
                        </Link>
                        <Link href="#" className="py-2 border-b flex  ">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3205/3205424.png"
                                alt=""
                                className="w-5 me-2"
                            />
                            Fashion
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomHeader;
