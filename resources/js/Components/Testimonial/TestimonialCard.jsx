import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Rating } from "react-simple-star-rating";
const TestimonialCard = ({review}) => {
    return (
        <div className="bg-white shadow-lg p-[24px] rounded-lg">
            <FaQuoteRight className="text-green-500 text-4xl opacity-35" />
            <p className="my-4 text-lg ">
                Pellentesque eu nibh eget mauris congue mattis mattis nec
                tellus. Phasellus imperdiet elit eu magna dictum, bibendum
                cursus velit sodales. Donec sed neque eget
            </p>

            <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 flex gap-4">
                    <img
                        src="/frontend/images/review.png"
                        alt=""
                        className="object-cover  object-center size-[54px]"
                    />
                    <div className="userDetail">
                        <h4 className="font-bold">Robert Foxx</h4>
                        <p>Customer</p>
                    </div>
                </div>
                <div className="col-span-1 text-end">
                    <Rating readonly={true} initialValue={5} size={22} />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
