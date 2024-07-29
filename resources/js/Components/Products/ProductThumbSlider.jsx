import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./thumbSlider.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";



const ProductThumbSlider = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [images, setImages] = useState(product.galleries);
    useEffect(() => {
        const newItem = {
            id: product.id,
            title: product.featured_img,
        };

        images.unshift(newItem);
        setImages([...images]);
    }, []);

    return (
        <>
            
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map((gall) => (
                    <SwiperSlide key={gall.id}>
                        <img
                            src={
                                gall.title
                                    ? `/${gall.title}`
                                    : "/frontend/images/placeholder.webp"
                            }
                            className="w-full block"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {product.galleries.length > 0 && (
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={15}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-2"
                >
                    {images.map((thumb, index) => (
                        <SwiperSlide key={thumb.id}>
                            <img
                                src={
                                    thumb.title
                                        ? `/${thumb.title}`
                                        : "/frontend/images/placeholder.webp"
                                }
                                className="h-full w-full rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </>
    );
};

export default ProductThumbSlider;
