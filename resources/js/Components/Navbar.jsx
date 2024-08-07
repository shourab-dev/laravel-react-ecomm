import React, { useEffect, useState } from "react";
import TopHeader from "./TopHeader";
import { Link } from "@inertiajs/react";
import { CiSearch, CiHeart } from "react-icons/ci";

import { RiMenu3Line } from "react-icons/ri";
import SearchBar from "./SearchBar";
import OffCanvas from "./OffCanvas";
import CartList from "./CartList";
import BottomHeader from "./BottomHeader";
import SmallMenu from "./SmallMenu";
import { menus } from "@/utils/NavBarLinks";
import { useSelector } from "react-redux";
import NavbarCart from "./NavbarCart";

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const [sidebar, setSidebar] = useState(false);

    const [products, setProducts] = useState(null);
    const categories = useSelector((state) => state.categories);

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
                            <NavbarCart />
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
