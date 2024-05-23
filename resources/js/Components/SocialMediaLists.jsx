import { Link } from "@inertiajs/react";
import React from "react";
import {
    FaFacebookF,
    FaPinterestP,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

const SocialMediaLists = ({
    socialMedias = [
        {
            id: 1,
            icon: "facebook",
            url: "www.facebook.com",
        },
        {
            id: 2,
            icon: "twitter",
            url: "www.twitter.com",
        },
        {
            id: 3,
            icon: "pinterest",
            url: "www.pinterest.com",
        },
        {
            id: 4,
            icon: "instagram",
            url: "www.instagram.com",
        },
    ],
    className
}) => {
    const icons = {
        facebook: <FaFacebookF />,
        twitter: <FaXTwitter />,
        instagram: <FaInstagram />,
        pinterest: <FaPinterestP />,
        pinterest: <FaPinterestP />,
        linkedin: <FaLinkedinIn />,
        linkedin: <FaLinkedinIn />,
        youtube: <FaYoutube />,
    };
    return (
        <>
            {socialMedias?.map((social, index) => (
                <Link
                    key={social?.id + index}
                    href={social?.url}
                    className={`size-[40px] text-center leading-[40px] rounded-full text-lg bg-transparent hover:bg-primary text-gray-400 hover:text-white ${className}`}
                >
                    {icons[social?.icon]}
                </Link>
            ))}
        </>
    );
};

export default SocialMediaLists;
