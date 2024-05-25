import Navbar from "@/Components/Navbar";
import React from "react";
import { Head, Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeCategories } from "@/store/slices/CategorySlice";
import IconBox from "@/Components/IconBox";
import Newsletter from "@/Components/Newsletter";
import SocialMediaLists from "@/Components/SocialMediaLists";
import VerticalMenu from "@/Components/VerticalMenu";
import { myAccounts } from "@/utils/NavBarLinks";
import { setUsers } from "@/store/slices/UserSlice";

const Frontend = ({ children, pageTitle = "Ecommerce" }) => {
    const dispatch = useDispatch();
    const authCustomer = useSelector((state) => state.authCustomer);
    const categories = useSelector((state) => state.categories);

    useEffect(() => {
        if (!categories) {
            axios.get(route("categories.data.all")).then(({ data }) => {
                dispatch(storeCategories(data));
            });
        }
        if (!authCustomer) {
            axios.get(route("auth.customer.get")).then(({ data }) => {
                dispatch(setUsers(data));
            });
        }
    }, []);

    return (
        <>
            <Head title={pageTitle} />

            <Navbar />
            {children}

            {/* PREFOOTER  */}
            <section id="preFooter" className="mb-[80px] ">
                <div className="container grid grid-cols-12 gap-5">
                    <IconBox
                        position={"left"}
                        className="col-span-12 sm:col-span-6 lg:col-span-4 text-start  !border border-b-0  border-green-600/20 rounded-lg px-[20px] py-[20px]"
                        data={{
                            icon: "location",
                            title: "Our Location",
                            detail: "1901 Thornridge Cir. Shiloh, Washington DC 20020, United States",
                        }}
                    />
                    <IconBox
                        position={"left"}
                        className="col-span-12 sm:col-span-6 lg:col-span-3 text-start  !border border-b-0  border-green-600/20 rounded-lg px-[20px] py-[20px]"
                        data={{
                            icon: "phone",
                            title: "Call Us 24/7",
                            detail: "(303) 555-0105",
                        }}
                    />
                    <IconBox
                        position={"left"}
                        className="col-span-12 sm:col-span-12 lg:col-span-5 text-start  !border border-b-0  border-green-600/20 rounded-lg px-[20px] py-[20px]"
                        data={{
                            icon: "message",
                            title: "Subscribe Newsletter",
                        }}
                    >
                        <Newsletter className="mt-2    " />
                    </IconBox>
                </div>
            </section>
            <footer className="bg-footer-pattern bg-black bg-cover bg-center">
                <div className="footerTop py-[80px]">
                    <div className="container grid sm:grid-cols-12 gap-8">
                        <div className="intro lg:col-span-3 col-span-9">
                            <Link href={route("home")}>
                                <img
                                    src="/frontend/images/logoWhite.png"
                                    alt=""
                                />
                            </Link>
                            <p className="text-gray-400 py-4">
                                Morbi cursus porttitor enim lobortis molestie.
                                Duis gravida turpis dui, eget bibendum magn.
                            </p>
                            <div className="flex gap-4">
                                <SocialMediaLists />
                            </div>
                        </div>

                        <div className="lg:col-span-2 col-span-6 text-white">
                            <VerticalMenu
                                title="My Account"
                                links={myAccounts}
                            />
                        </div>
                        <div className="lg:col-span-2 col-span-9 text-white">
                            <VerticalMenu title="Helps" links={myAccounts} />
                        </div>
                        <div className="lg:col-span-2 col-span-9 text-white">
                            <VerticalMenu title="Proxy" links={myAccounts} />
                        </div>
                        <div className="lg:col-span-3 sm:col-span-11 col-span-9 text-white">
                            <VerticalMenu title="Download Mobile App">
                                <div className="sm:flex gap-3 mt-5">
                                    <a href="">
                                        <img
                                            className="w-1/2 my-1 sm:w-full block"
                                            src="/frontend/images/appStore.png"
                                            alt=""
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            className="w-1/2 my-1 sm:w-full block"
                                            src="/frontend/images/playStore.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </VerticalMenu>
                        </div>
                    </div>
                </div>
                <hr />

                <div className="footerBottom">
                    <div className="container grid md:grid-cols-2 justify-between text-gray-500 items-center py-5 gap-4">
                        <p className="text-sm">
                            Ecobazar eCommerce © {new Date().getFullYear()}. All
                            Rights Reserved
                        </p>
                        <img
                            src="/frontend/images/payment.png"
                            className="mx-auto md:mx-0 md:ms-auto"
                            alt=""
                        />
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Frontend;
