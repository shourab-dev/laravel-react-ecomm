import Banner from "@/Components/Banners/Banner";
import CategorySlider from "@/Components/CategorySlider";

import FeaturedTitle from "@/Components/FeaturedTitle";
import IconBox from "@/Components/IconBox";
import ProductCard from "@/Components/Products/ProductCard";
import Frontend from "@/Layouts/Frontend";
import { Head, Link } from "@inertiajs/react";
import React from "react";

const Home = ({categories}) => {
    return (
        <>
            <section id="banner">
                <Banner />
            </section>
            <section id="features">
                <div className="container grid sm:grid-cols-2 md:grid-cols-4 border-b">
                    <IconBox
                        data={{
                            title: "Free Shipping",
                            detail: "Free shipping with discount",
                            icon: "truck",
                        }}
                    />
                    <IconBox
                        data={{
                            title: "Great Support 24/7",
                            detail: "Instant access to Contact",
                            icon: "support",
                        }}
                    />
                    <IconBox
                        data={{
                            title: "100% Sucure Payment",
                            detail: "We ensure your money is save",
                            icon: "bag",
                        }}
                    />
                    <IconBox
                        data={{
                            title: "Money-Back Guarantee",
                            detail: "30 days money-back",
                            icon: "order",
                        }}
                    />
                </div>
            </section>

            <section id="featuredProducts" className="my-[40px] md:my-[80px]">
                <div className="container">
                    <FeaturedTitle
                        title="Featured Products"
                        url={route("shop", { featured: true })}
                    />

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>

            <section
                id="featuredCategories"
                className=" bg-gradient-to-b from-gray-400/10 to-blue-200/20"
            >
                <div className="container relative h-full py-[40px]  md:py-[80px]">
                    <img
                        src="/frontend/images/leafBanner4.png"
                        alt=""
                        className="rotate-[-100deg] absolute top-[-50px]"
                    />

                    <FeaturedTitle title="Shop by Top Categories" url="#" />

                    <CategorySlider />
                    {categories}
                </div>
            </section>
        </>
    );
};
Home.layout = (page) => <Frontend children={page} pageTitle="Home" />;
export default Home;
