import { useForm } from "@inertiajs/react";
import React from "react";
import { Rating } from "react-simple-star-rating";
import TextArea from "../TextArea";

const AddReview = ({ id }) => {
    const { data, setData, post, processing } = useForm({
        rating: 1,
        review: "",
    });

    const addReviews = (e) => {
        e.preventDefault();
        post(route("product.review.add", id));
    };

    return (
        <form onSubmit={(e) => addReviews(e)}>
            <h4 className="font-bold mb-3 text-xl">Add Review</h4>
            <Rating
                onClick={(value) => setData("rating", value)}
                initialValue={1}
                size={25}
            />
            <TextArea
                className={`my-3`}
                placeholder="Your Review"
                onChange={(e) => setData("review", e.target.value)}
            />
            <button className="btn">Submit</button>
        </form>
    );
};

export default AddReview;
