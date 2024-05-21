import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import { Link } from "@inertiajs/react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import SearchBar from "./SearchBar";
import OffCanvas from "./OffCanvas";
import CartList from "./CartList";
import BottomHeader from "./BottomHeader";
import SmallMenu from "./SmallMenu";
import { menus } from "@/utils/NavBarLinks";
import axios from "axios";
const Navbar = ({categories}) => {
    const [showCart, setShowCart] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    
    const [products, setProducts] = useState(null);

   

    return (
        <>
            <TopHeader />
            <nav className="shadow py-4">
                <div className="container">
                    <div className="grid md:grid-cols-12 items-center">
                        <Link href={route("home")} className=" col-span-3">
                            <img
                                src={`/frontend/images/logo.png`}
                                alt=""
                                className="w-[150px] sm:w-[auto]"
                            />
                        </Link>
                        <div className="col-span-6 order-3 md:order-2 mt-5 md:mt-0">
                            <SearchBar />
                        </div>

                        <div className="col-span-3  order-2 md:order-3 flex justify-end items-center">
                            <Link href="">
                                <CiHeart className="text-3xl hover:fill-primary " />
                            </Link>
                            <button
                                onClick={(e) => setShowCart(true)}
                                className="flex items-center md:ms-4 mx-4"
                            >
                                <div className="relative">
                                    <IoBagHandleOutline className="text-3xl" />
                                    <span className="bg-primary text-white rounded-xl block text-center text-[12px] w-[18px] leading-[18px] h-[18px] absolute top-0 right-[-5px] ring-white ring-2">
                                        2
                                    </span>
                                </div>
                                <div className="ms-3 hidden md:block">
                                    <p className="text-xs">Shopping Cart:</p>
                                    <h4 className=" font-bold text-sm">
                                        57.00 tk
                                    </h4>
                                </div>
                            </button>
                            <button
                                className="text-2xl md:hidden"
                                onClick={(e) => setSidebar(!sidebar)}
                            >
                                <RiMenu3Line className="text-primary" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <BottomHeader categories={categories} />
            <OffCanvas
                
                title="My Cart"
                position="end"
                show={showCart}
                onClose={(e) => setShowCart(!showCart)}
            >
                <CartList products={products} />
            </OffCanvas>
            <OffCanvas
                width={400}
                title="Menus"
                position="end"
                show={sidebar}
                onClose={(e) => setSidebar(!sidebar)}
            >
                <SmallMenu links={menus} categories={categories} />
            </OffCanvas>
        </>
    );
};

export default Navbar;
