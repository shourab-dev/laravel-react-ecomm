import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "@inertiajs/react";

const FeaturedTitle = ({title = 'Title Here',url = '#', className}) => {
    return (
        <div className={`grid grid-cols-6 items-center mb-[20px] sm:mb-[40px] ${className}`}>
            <h2 className="text-xl sm:text-3xl col-span-5 font-semibold font-popins ">
                {title}
            </h2>
            <Link
                href={url}
                className="text-xs sm:text-base col-span-1 text-end text-primary font-bold"
            >
                View All <BsArrowRight />
            </Link>
        </div>
    );
};

export default FeaturedTitle;
