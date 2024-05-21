import { Link } from "@inertiajs/react";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { PiHandbagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded group">
            <div className="productImage relative">
                <Link>
                    <img
                        src="/frontend/images/dummyProduct.png"
                        loading="lazy"
                        alt=""
                        className="w-full block absolute group-hover:scale-110 group-hover:opacity-0 transition-all duration-[400ms] "
                    />
                    <img
                        src="/frontend/images/dummyProduct2.png"
                        loading="lazy"
                        alt=""
                        className="w-full block "
                    />
                </Link>

                <div className="label bg-green-500 text-white inline-block absolute top-0 left-0 sm:top-4 sm:left-3 text-xs rounded-0 scale-75 sm:scale-100 px-[8px] py-2 md:rounded">
                    Sale 50%
                </div>

                <div className="overlay  flex-col absolute top-4 right-5 hidden md:flex">
                    <Link
                        href={route("shop")}
                        className="arrows static w-[40px] mb-3 text-xl h-[40px] translate-x-[-30px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-100 transition-all duration-500"
                    >
                        <CiHeart />
                    </Link>
                    <Link
                        href={route("shop")}
                        className="arrows static w-[40px] mb-3 text-xl h-[40px] translate-x-[-30px] opacity-0 group-hover:translate-x-[0] group-hover:opacity-100 transition-all duration-500 delay-150"
                    >
                        <MdOutlineRemoveRedEye />
                    </Link>
                </div>
            </div>
            <div className="productDetail px-4 py-4 grid grid-cols-6 items-center">
                <div className="col-span-6 sm:col-span-5">
                    <h4 className="font-semibold">
                        <Link>Green Apple</Link>
                    </h4>
                    <p className="font-bold">
                        $14.99{" "}
                        <span className="line-through text-gray-400 font-normal text-xs">
                            $20.99
                        </span>
                    </p>
                    <Rating initialValue={5} readonly={true} size={18} />
                </div>
                <div className="col-span-1 hidden sm:block">
                    <div className="bg-gray-200 rounded-full cursor-pointer text-lg w-[40px] h-[40px] text-center leading-[40px] group-hover:bg-primary/90 group-hover:text-white">
                        <PiHandbagLight />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
