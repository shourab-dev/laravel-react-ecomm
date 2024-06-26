import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";

const CartCounter = ({ product, defaulValue = 1, className }) => {
    const increment = () => {
        setData("qty", data.qty + 1);
    };

    const updateValue = (e) => {
        if (e.target.value > 0) {
            setData("qty", Number(e.target.value));
        } else {
            setData("qty", 1);
        }
    };
    const decrement = (e) => {
        if (data.qty > 1) {
            setData("qty", data.qty - 1);
        }
        return false;
    };

    const { data, setData, get } = useForm({
        qty: defaulValue,
    });

    const addToCart = (e) => {
        e.preventDefault();
        get(route("cart.add", product), {
            onSuccess: () => {
                setData("qty", 1);
                
            },
        });
    };

    return (
        <form onSubmit={addToCart}>
            <div className={`flex gap-4 ${className}`}>
                <div className="flex">
                    <button
                        type="button"
                        onClick={increment}
                        className="size-[40px] bg-gray-200"
                    >
                        +
                    </button>
                    <input
                        onChange={(e) => updateValue(e)}
                        value={data.qty}
                        type="number"
                        className="w-[100px] h-[40px] text-center border-gray-200 "
                    />
                    <button
                        type="button"
                        onClick={decrement}
                        className={`size-[40px] bg-gray-200  ${
                            data.qty <= 1 ? "cursor-not-allowed" : ""
                        } `}
                    >
                        -
                    </button>
                </div>
                <button className="bg-primary px-5 text-white">
                    Add to Cart
                </button>
            </div>
        </form>
    );
};

export default CartCounter;
