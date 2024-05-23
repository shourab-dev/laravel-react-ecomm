import React from "react";
import Brand from "./Brand";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";


const BrandSlider = ({ brands = [{}, {}, {}, {}, {}, {}, {}, {}] }) => {
    return (
        <section className="py-[82px]">
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
                    }}
                    spaceBetween={30}
                    slidesPerView={6}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 3,
                        },
                        1100: {
                            slidesPerView: 5,
                        },
                        1200: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide
                            key={index}
                            className="border-r text-center "
                        >
                            <Brand brand={brand} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BrandSlider;
