import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
// Import Swiper styles
import "swiper/css";
import CategoryCard from "./CategoryCard";
import { useSelector } from "react-redux";

const CategorySlider = () => {
    const categories = useSelector((state) => state.categories);
    
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    600: {
                        slidesPerView: 3,
                    },
                    950: {
                        slidesPerView: 4,
                    },

                    1200: {
                        slidesPerView: 6,
                    },
                }}
                navigation={{
                    enabled: true,
                    nextEl: ".nextArrow",
                    prevEl: ".prevArrow",
                }}
                spaceBetween={16}
                slidesPerView={categories?.length >= 6 ? 6 : 4}
            >
                {categories?.map((category, index) => (
                    <SwiperSlide
                        key={index}
                        className={`bg-white border rounded-md`}
                    >
                        {({ isActive }) => (
                            <>
                                <CategoryCard category={category} />
                            </>
                        )}
                    </SwiperSlide>
                ))}
                <button className="nextArrow top-1/3 md:top-1/2 right-[0%] bg-primary/80 hidden sm:block hover:bg-primary text-white translate-y-[-50%] arrows  z-40">
                    <LuArrowRight />
                </button>
                <button className="prevArrow top-1/3 md:top-1/2 left-[0%] bg-primary/80 hidden sm:block hover:bg-primary text-white translate-y-[-50%] arrows  z-40">
                    <LuArrowLeft />
                </button>
            </Swiper>
        </>
    );
};

export default CategorySlider;
