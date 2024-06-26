import Frontend from "@/Layouts/Frontend";
import ProfileSidebar from "@/Layouts/ProfileSidebar";
import React from "react";

const ProfileLayout = ({ children }) => {
    return (
        <Frontend pageTitle="Profile">
            <div className="container my-[100px] grid md:grid-cols-6 gap-6">
                <ProfileSidebar className="md:col-span-2 2xl:col-span-1" />
                <div className="md:col-span-4 2xl:col-span-5">{children}</div>
            </div>
        </Frontend>
    );
};

export default ProfileLayout;
