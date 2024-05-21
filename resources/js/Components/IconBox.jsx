import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsTruck, BsBoxSeam } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const IconBox = ({ data, className }) => {
    const icons = {
        bag: <IoBagHandleOutline />,
        truck: <BsTruck />,
        support: <TfiHeadphoneAlt />,
        order: <BsBoxSeam />,
    };
    return (
        <div
            className={`text-center group py-[40px] border-b-4 border-transparent hover:border-primary transition-all cursor-pointer bg-white ${className}`}
        >
            <div className="relative">
                <img
                    src="/frontend/images/IconBoxBg.png"
                    alt=""
                    className="mx-auto opacity-20 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-primary group-hover:text-white transition-all text-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                    {icons[data?.icon]}
                </span>
            </div>
            <h4 className="text-lg font-bold mt-4">{data?.title}</h4>
            <p className="text-sm text-gray-600">{data?.detail}</p>
        </div>
    );
};

export default IconBox;
