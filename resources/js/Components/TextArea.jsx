import React from "react";

const TextArea = ({ className, ...props }) => {
    return <textarea className={`w-full border-gray-300 rounded-md focus:ring-purple-500 h-[150px] ${className}`} {...props}></textarea>;
};

export default TextArea;
