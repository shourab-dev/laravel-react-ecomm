import React from "react";
import Frontend from "@/Layouts/Frontend";
import { Head } from "@inertiajs/react";

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
};
Blog.layout = (page) => <Frontend children={page} pageTitle="Blog" />;

export default Blog;
