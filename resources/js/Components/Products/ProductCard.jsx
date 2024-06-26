import { Link } from "@inertiajs/react";
import React from "react";
import { Rating } from "react-simple-star-rating";
import { PiHandbagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const ProductCard = ({ product }) => {
    return (
        <div className="border rounded group">
            
            <div className="productImage relative lg:h-[350px]  overflow-hidden">
                <Link href={route("product.view", product.slug ?? "un-known")}>
                    <img
                        src={
                            product.featured_img
                                ? `/${product.featured_img}`
                                : "/frontend/images/placeholder.webp"
                        }
                        loading="lazy"
                        alt=""
                        className={`w-full block ${
                            product.gallery?.title &&
                            `absolute group-hover:scale-110 group-hover:opacity-0`
                        } transition-all duration-[400ms] h-full object-cover object-center`}
                    />
                    {product.gallery?.title && (
                        <img
                            src={product.gallery?.title}
                            loading="lazy"
                            alt=""
                            className="w-full block "
                        />
                    )}
                </Link>
                {product.sell_price && (
                    <div className="label bg-green-500 text-white inline-block absolute top-0 left-0 sm:top-4 sm:left-3 text-xs rounded-0 scale-75 sm:scale-100 px-[8px] py-2 md:rounded">
                        Sale{" "}
                        {Math.round(
                            (100 / product.price) *
                                (product.price - product.sell_price)
                        )}
                        %
                    </div>
                )}

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
                    <h4 className="font-semibold capitalize">
                        <Link
                            href={route(
                                "product.view",
                                product.slug ?? "un-known"
                            )}
                        >
                            {product.title}
                        </Link>
                    </h4>
                    <p className="font-bold">
                        {product.sell_price
                            ? product.sell_price + " tk"
                            : product.price
                            ? product.price + " tk"
                            : "Out of stock"}
                        {product.price && product.sell_price && (
                            <span className="line-through text-gray-400 font-normal text-xs ms-1">
                                {product.price} tk
                            </span>
                        )}
                    </p>
                    <div className="flex items-center">
                        <Rating
                            initialValue={product.avgRating}
                            readonly={true}
                            size={18}
                        />
                        <span className="text-gray-400 text-xs ms-1 mt-1">
                            ({product.totalReviews})
                        </span>
                    </div>
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
