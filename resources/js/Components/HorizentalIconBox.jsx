import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const HorizentalIconBox = ({ data }) => {
    return (
        <div className="flex gap-4 my-4">
            <div className="icon text-green-500 text-2xl">
                <IoIosCheckmarkCircle />
            </div>
            <div className="text">
                <h4 className=" font-popins font-semibold text-base md:text-2xl mb-[10px]">
                    Healthy & natural food for lovers of healthy food.
                </h4>
                <p className="font-popins text-gray-500 text-sm md:text-lg text-justify">
                    Ut quis tempus erat. Phasellus euismod bibendum magna non
                    tristique. Pellentesque semper vestibulum elit sed
                    condimentum. Nunc pretium fermentum interdum.
                </p>
            </div>
        </div>
    );
};

export default HorizentalIconBox;
