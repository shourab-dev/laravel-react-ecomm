import React, { useEffect } from "react";
import CartProduct from "./CartProduct";
import { Link } from "@inertiajs/react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCarts } from "@/store/slices/CartSlice";
const CartList = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!items) {
            axios
                .get(route(`auth.cart.items`))
                .then(({ data }) => {
                    dispatch(setCarts(data));
                })
                .catch((err) => console.log(err));
        }
        console.log(items);

    }, []);
    return (
        <div
            className="flex flex-col justify-between items-between"
            style={{ height: `calc(100vh - 58px)` }}
        >
            <div className=" overflow-auto">
                {items?.map((product) => (
                    <CartProduct product={product} />
                ))}
            </div>
            <div className="pb-5">
                <Link
                    href="#"
                    className="ring-2 ring-primary w-[100%] py-3 
                    hover:ring-transparent hover:bg-primary hover:text-white transition duration-500
                    text-primary my-2 flex justify-center place-items-center"
                >
                    My Cart <IoBagHandleOutline className="ms-2 text-xl" />
                </Link>
                <Link
                    href="#"
                    className="bg-primary w-[100%] block text-center py-3 text-white"
                >
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default CartList;
