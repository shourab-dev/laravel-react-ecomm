import React from "react";
import { RiStarSFill } from "react-icons/ri";
import { Rating } from "react-simple-star-rating";
import AddReview from "./AddReview";
import { Link } from "@inertiajs/react";
const Review = ({ auth, reviews, totalReview }) => {
    return (
        <div className="grid lg:grid-cols-2 gap-4">
            <div className="reviews">
                <h4 className="font-bold flex items-center mb-5">
                    Total Reviews ({totalReview}
                    <RiStarSFill className="ms-1 text-yellow-500" />)
                </h4>

                {reviews.map((review, index) => (
                    <div
                        className="reviewCard border  border-gray-200 my-2"
                        key={review.id}
                    >
                        <div className="grid grid-cols-6 p-4 gap-4">
                            <div className="col-span-1 ">
                                <img
                                    className="rounded-full w-full mx-auto "
                                    src={
                                        review.customer?.profile_img
                                            ? `/storage/${review.customer?.profile_img}`
                                            : import.meta.env.VITE_AVATAR_URL +
                                              review.customer?.name
                                    }
                                    alt={review.customer?.name}
                                />
                            </div>
                            <div className="col-span-5">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-bold capitalize">
                                        {review.customer?.name}
                                    </h4>
                                    <Rating
                                        readonly={true}
                                        initialValue={review.stars}
                                        size={16}
                                    />
                                </div>
                                <p className="text-justify">{review.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="addReviews">{auth ? <AddReview /> : <Link href="" className="btn">Login</Link>}</div>
        </div>
    );
};

export default Review;
