import Frontend from "@/Layouts/Frontend";
import { Head } from "@inertiajs/react";
import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};
Home.layout = (page) => <Frontend children={page} pageTitle="Home" />;
export default Home;
