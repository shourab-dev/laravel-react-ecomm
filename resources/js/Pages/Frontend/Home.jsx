import Frontend from "@/Layouts/Frontend";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <Frontend>
            <Head title="Head" />
            <div><h1>Home</h1></div>
        </Frontend>
    );
};

export default Home;
