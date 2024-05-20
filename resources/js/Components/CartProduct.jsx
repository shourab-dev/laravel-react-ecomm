import { Link } from "@inertiajs/react";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
const CartProduct = ({ product }) => {
    return (
        <div className="shadow p-3 rounded-md my-2 grid grid-cols-4 items-center">
            <img
                src="https://static.vecteezy.com/system/resources/previews/011/794/199/non_2x/fabric-armchair-soft-cushion-with-metal-leg-3d-rendering-modern-interior-design-for-living-room-free-png.png"
                alt=""
                className="w-[60px] col-span-1"
            />
            <div className="flex justify-between col-span-3">
                <div>
                    <h5 className="font-medium text-lg">
                        <Link href="#">{product.title}</Link>
                    </h5>
                    <p className="text-xs">(10 * 100 tk)</p>
                </div>
                <button className="text-red-600 text-xl">
                    <IoIosCloseCircleOutline />
                </button>
            </div>
        </div>
    );
};

export default CartProduct;
