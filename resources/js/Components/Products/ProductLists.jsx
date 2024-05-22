import React from "react";
import ProductCard from "./ProductCard";
const ProductLists = ({ products, className }) => {
    return (
        <div
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}
        >
            {products?.map((product,index) => (
                <ProductCard key={product.id+''+index} product={product} />
            ))}
        </div>
    );
};

export default ProductLists;
