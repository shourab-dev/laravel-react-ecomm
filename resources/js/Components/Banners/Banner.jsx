import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Link } from "@inertiajs/react";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { useEffect, useState } from "react";

export default ({ length = 5 }) => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        axios
            .get(route("getFeaturedProducts"), {
                params: {
                    length,
                },
            })
            .then(({ data }) => {
                setBanners(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            autoplay={{
                delay: 3500,
                disableOnInteraction: true,
            }}
            navigation={{
                enabled: true,
                nextEl: ".nextArrow",
                prevEl: ".prevArrow",
            }}
            pagination={{ clickable: true, el: ".pagination" }}
            spaceBetween={0}
            slidesPerView={1}
            className="h-[640px]"
        >
            {banners?.map((banner, index) => (
                <SwiperSlide
                    key={index}
                    className={`bg-banner-pattern bg-cover bg-center py-10 md:py-0`}
                >
                    {({ isActive }) => (
                        <>
                            <div className="overlayImageGrp hidden md:block">
                                <img
                                    src="/frontend/images/leafBanner1.png"
                                    alt=""
                                    className={`absolute ${
                                        isActive
                                            ? "left-28 top-[0px]"
                                            : "left-40 top-[-30px]"
                                    }  transition-all duration-500`}
                                />
                                <img
                                    src="/frontend/images/leafBanner2.png"
                                    alt=""
                                    className={`absolute  ${
                                        isActive
                                            ? "left-64 bottom-[40px] opacity-100"
                                            : "left-28 bottom-[0px] opacity-0"
                                    }  transition-all duration-500`}
                                />
                                <img
                                    src="/frontend/images/leafBanner3.png"
                                    alt=""
                                    className={`absolute  ${
                                        isActive
                                            ? "right-12 top-[40px]"
                                            : "right-[-20px] top-[40px]"
                                    }  transition-all duration-500`}
                                />
                                <img
                                    src="/frontend/images/leafBanner4.png"
                                    alt=""
                                    className={`absolute blur-[2px]  ${
                                        isActive
                                            ? "right-20 bottom-[-20px]"
                                            : "right-20 bottom-[-40px]"
                                    }  transition-all duration-500`}
                                />
                            </div>

                            <div className="container grid md:grid-cols-2 h-full items-center md:gap-14">
                                <div className="bannerImage">
                                    <img
                                        src={
                                            banner.featured_img
                                                ? banner.featured_img
                                                : "/frontend/images/placeholder.webp"
                                        }
                                        alt=""
                                        className="w-full block"
                                    />
                                </div>
                                <div className="bannerCnt">
                                    <p className="text-primary text-sm font-bold mb-3">
                                        Welcome to shopery
                                    </p>
                                    <h2 className="text-4xl md:text-6xl font-semibold font-popins capitalize">
                                        {banner.title}
                                    </h2>
                                    {banner.price && banner.sell_price && (
                                        <p className="text-2xl font-bold  mt-5">
                                            Sale up to{" "}
                                            <span className="text-orange-500">
                                                {Math.round(
                                                    (100 / banner.price) *
                                                        banner.sell_price
                                                )}
                                                % OFF
                                            </span>
                                        </p>
                                    )}
                                    <p className="text-sm mt-3">
                                        Free shipping on all your order. we
                                        deliver, you enjoy
                                    </p>
                                    <Link
                                        className="btn rounded-md md:rounded-full mt-[20px]"
                                        href={route(
                                            "product.view",
                                            banner.slug
                                        )}
                                    >
                                        <div className="flex items-center">
                                            Shop Now{" "}
                                            <LuArrowRight className="ms-2" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </SwiperSlide>
            ))}

            <button className="nextArrow top-1/3 md:top-1/2 right-[5%] translate-y-[-50%] arrows  z-40">
                <LuArrowRight />
            </button>
            <button className="prevArrow top-1/3 md:top-1/2 left-[5%] translate-y-[-50%] arrows  z-40">
                <LuArrowLeft />
            </button>
            <div className="pagination"></div>
        </Swiper>
    );
};
