import React, { useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = ({
    title = "What Our Customer Says",
    className,
    reviews = [{}, {}, {}],
}) => {
    const [swiper, setSwiper] = useState();
    return (
        <section className={`py-[70px] bg-[#F2F5F3] ${className}`}>
            <div className="container">
                <div
                    className={`grid sm:grid-cols-6 items-center mb-[20px] sm:mb-[40px] `}
                >
                    <div className="title col-span-5">
                        <p className="text-primary font-semibold text-sm sm:text-xl">
                            Testimonial
                        </p>
                        <h2 className="text-xl sm:text-3xl  font-semibold font-popins ">
                            {title}
                        </h2>
                    </div>
                    <div className="testimonialArrows col-span-6 sm:col-span-1 text-end flex  justify-end gap-2 mt-3 sm:mt-0">
                        <span
                            className="arrows static"
                            onClick={() => swiper.slidePrev()}
                        >
                            <BsArrowLeft />
                        </span>
                        <span className="arrows static">
                            <BsArrowRight onClick={() => swiper.slideNext()} />
                        </span>
                    </div>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => setSwiper(swiper)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        800: {
                            slidesPerView: 2,
                        },
                        1100: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <TestimonialCard />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TestimonialSection;
