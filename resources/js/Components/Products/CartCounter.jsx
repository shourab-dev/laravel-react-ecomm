import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

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

        axios
            .get(route("cart.add", product), {
                params: {
                    qty: data.qty,
                },
            })
            .then((res) => setData('qty', 1))
            .catch((err) => console.log(err));

        // get(route("cart.add", product), {

        //     onSuccess: () => {
        //         setData("qty", 1);
        //     },
        // });
        toast("This product has been added!");
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
