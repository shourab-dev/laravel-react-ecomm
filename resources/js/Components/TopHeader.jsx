import React from "react";
import { CiLocationOn } from "react-icons/ci";
import CurrencySelect from "./CurrencySelect";
import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";
const TopHeader = () => {
    const authCustomer = useSelector((state) => state.authCustomer);
    return (
        <div className="bg-gray-700 text-white   hidden sm:block">
            <div className="container grid md:grid-cols-2">
                <div className="flex items-center justify-center md:justify-start mb-3 md:mb-0 text-sm">
                    <span className="me-2 text-xl ">
                        <CiLocationOn />
                    </span>
                    Store Location: Lincoln- 344, Illinois, Chicago, USA
                </div>
                <div className="md:text-end text-center text-sm">
                    <form action="">
                        <CurrencySelect options={["Eng", "Bng"]} />
                        <CurrencySelect options={["USD", "TAKA"]} />
                        {authCustomer ? (
                            <Link href={route("profile.show")} className="ms-3">
                                {authCustomer.name}
                            </Link>
                        ) : (
                            <Link href={route("signin.show")} className="ms-3">
                                Sign In / Sign Up
                            </Link>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
