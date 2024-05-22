import React from "react";
import { BsArrowRight } from "react-icons/bs";
import HorizentalIconBox from "@/Components/HorizentalIconBox";
import { Link } from "@inertiajs/react";

const TrustSection = () => {
    return (
        <section
            id="trust"
            className={`bg-trust-pattern py-[60px]  bg-cover bg-center`}
        >
            <div className="container grid xl:grid-cols-2 items-center gap-10">
                <div className="image">
                    <img
                        src="/frontend/images/TrustImage2.png"
                        alt="Trust Image"
                        className="w-full block h-full"
                    />
                </div>
                <div className="trustCnt">
                    <h2 className="text-[#1A1A1A] text-3xl md:text-5xl font-semibold font-popins mb-[26px]">
                        100% Trusted <br /> Organic Food Store
                    </h2>
                    <HorizentalIconBox />
                    <HorizentalIconBox />

                    <Link
                        href={route("shop")}
                        className="btn w-full md:w-fit text-center md:rounded-full mt-[20px]"
                    >
                        Shop Now <BsArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
