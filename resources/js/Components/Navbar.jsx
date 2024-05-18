import React from "react";
import TopHeader from "./TopHeader";
import { Link } from "@inertiajs/react";

const Navbar = () => {
    return (
        <>
            <TopHeader />
            <nav className="shadow py-4">
                <div className="container">
                    <div className="grid">
                        <Link href="">
                            <img src={`/frontend/images/logo.png`} alt="" />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
