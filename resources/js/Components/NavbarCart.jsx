import { setCart } from "@/store/slices/CartSlice";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

const NavbarCart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    
    useEffect(() => {

        axios.get(route(`cart.get`)).then(({data})=> {
            
            dispatch(setCart(data));
            
            
        })

    }, [cart]);

    return (
        <button
            onClick={(e) => setShowCart(true)}
            className="flex items-center md:ms-4 mx-4"
        >
            <div className="relative">
                <IoBagHandleOutline className="text-3xl" />
                <span className="bg-primary text-white rounded-xl block text-center text-[12px] w-[18px] leading-[18px] h-[18px] absolute top-0 right-[-5px] ring-white ring-2">
                    {cart.length}
                </span>
            </div>
            <div className="ms-3 hidden md:block">
                <p className="text-xs">Shopping Cart:</p>
                <h4 className=" font-bold text-sm">57.00 tk</h4>
            </div>
        </button>
    );
};

export default NavbarCart;
