import React from "react";
import Frontend from "@/Layouts/Frontend";
import { Head } from "@inertiajs/react";

const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    );
};
About.layout = (page) => <Frontend children={page} pageTitle="About" />;

export default About;
