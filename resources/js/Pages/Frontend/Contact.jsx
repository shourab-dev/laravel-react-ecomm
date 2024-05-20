import React from "react";
import Frontend from "@/Layouts/Frontend";
import { Head } from "@inertiajs/react";

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
};
Contact.layout = (page) => <Frontend children={page} pageTitle="Contact" />;

export default Contact;
