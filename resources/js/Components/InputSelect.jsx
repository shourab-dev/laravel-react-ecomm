import React from "react";

const InputSelect = ({ children, placeHolder, className = '', ...props }) => {
    return (
        <select className={`block w-full rounded ${className}`} {...props}>
            {placeHolder && <option>{placeHolder}</option>}
            {children}
        </select>
    );
};

export default InputSelect;
