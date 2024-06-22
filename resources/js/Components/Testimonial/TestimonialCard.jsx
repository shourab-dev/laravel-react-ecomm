import React from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { Rating } from "react-simple-star-rating";
const TestimonialCard = ({review}) => {
    return (
        <div className="bg-white shadow-lg p-[24px] rounded-lg">
            <FaQuoteRight className="text-green-500 text-4xl opacity-35" />
            <p className="my-4 text-lg ">{review.review}</p>

            <div className="grid grid-cols-3 items-center">
                <div className="col-span-2 flex gap-4">
                    <img
                        src={
                            review.customer.profile_img
                                ? `/${review.customer.profile_img}`
                                : import.meta.env.VITE_AVATAR_URL + review.customer.name
                        }
                        alt=""
                        className="object-cover  object-center size-[54px] rounded-full"
                    />
                    <div className="userDetail">
                        <h4 className="font-bold capitalize">
                            {review.customer.name}
                        </h4>
                        <p>Customer</p>
                    </div>
                </div>
                <div className="col-span-1 text-end">
                    <Rating
                        readonly={true}
                        initialValue={review.stars}
                        size={22}
                    />
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
