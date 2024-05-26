import React from "react";

const Table = ({ children, className }) => {
    return <table className={`w-full  ${className}`}>{children}</table>;
};

export default Table;
