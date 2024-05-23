import { useForm } from "@inertiajs/react";
import React from "react";

const Newsletter = ({className}) => {
    const { data, setData, errors, processing, post } = useForm({
        email: null,
    });

    const subscribeUser = (e) => {
        e.preventDefault();
        //* send a post req
        console.log("subscribe");
    };

    return (
        <form
            onSubmit={subscribeUser}
            method="POST"
            className={`w-full block relative ${className}`}
        >
            <input
                initialvalue={data.email}
                onChange={(e) => setData("email", e.target.value)}
                type="text"
                className="w-full rounded-full border-gray-300 focus:ring-primary focus:outline-none focus:border-transparent ps-4"
                placeholder="Your email address"
            />
            <button
                type="submit"
                className="btn rounded-full absolute right-0 t-0 py-[9px]"
            >
                Subscribe
            </button>
        </form>
    );
};

export default Newsletter;
