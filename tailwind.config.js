import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                popins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#00B207",
            },
            backgroundImage: (theme) => ({
                "banner-pattern": "url('/frontend/images/bannerBg.png')",
            }),
        },
    },

    plugins: [forms],
};
