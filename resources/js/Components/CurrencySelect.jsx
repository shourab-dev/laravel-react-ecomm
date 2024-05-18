import React from "react";

const CurrencySelect = ({ options, name = null, id = null }) => {
    return (
        <select
            name={name}
            id={id}
            className="bg-transparent border-0 focus:ring-0 focus:border-gray-500 border-e-2"
        >
            {options.map((option, index) => (
                <option value={option} key={index} className="text-gray-800">
                    {option}
                </option>
            ))}
        </select>
    );
};

export default CurrencySelect;
