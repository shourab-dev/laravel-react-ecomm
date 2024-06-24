import ProductThumbSlider from "@/Components/Products/ProductThumbSlider";
import Frontend from "@/Layouts/Frontend";
import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Detail from "@/Components/Products/Detail";
import Accordion from "@/Components/Accordion";

const SingleProduct = ({ auth, product }) => {
    const data = [
        {
            id: 1,
            title: "Detail",
            element: <Detail />,
        },
        {
            id: 2,
            title: "Brand",
        },
    ];
    

    

    return (
        <Frontend pageTitle={product.title}>
            <div className="my-[20px] lg:my-[80px] container">
                {console.log(product)}
                <div className="grid lg:grid-cols-8 gap-8">
                    <div className="overflow-hidden lg:col-span-4">
                        <ProductThumbSlider product={product} />
                    </div>
                    <div className="lg:col-span-4">
                        <h1 className="text-4xl font-bold capitalize">
                            {product.title}
                        </h1>
                        <p>
                            <b className="text-xl">
                                {product.sell_price ?? product.price} tk
                            </b>{" "}
                            {product.sell_price && (
                                <span className="line-through text-gray-500 font-semibold">
                                    {product.price}tk
                                </span>
                            )}
                        </p>
                        <p>{product.short_detail}</p>
                        <Link className="btn my-3 py-4 px-6" href="#">
                            <span className="me-2 text-xl">
                                <MdOutlineShoppingCart />
                            </span>
                            Add to Cart
                        </Link>
                    </div>
                </div>
            </div>

            {/* ACCORDION */}
          <Accordion data={data}/>
            {/* ACCORDION END */}
        </Frontend>
    );
};

export default SingleProduct;
