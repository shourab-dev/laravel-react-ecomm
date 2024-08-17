import ProductThumbSlider from "@/Components/Products/ProductThumbSlider";
import Frontend from "@/Layouts/Frontend";
import React, { useEffect, useState } from "react";

import Detail from "@/Components/Products/Detail";
import Accordion from "@/Components/Accordion";
import Review from "@/Components/Products/Review";
import ProductLists from "@/Components/Products/ProductLists";

import FeaturedTitle from "@/Components/FeaturedTitle";
import axios from "axios";
import CartCounter from "@/Components/Products/CartCounter";

const SingleProduct = ({ auth, product }) => {
    const data = [
        {
            id: 1,
            title: "Detail",
            element: <Detail data={product.long_detail} />,
        },
        {
            id: 2,
            title: "Brand",
        },
        {
            id: 3,
            title: "Reviews",
            element: (
                <Review
                    auth={auth.customer}
                    id={product.id}
                    reviews={product.reviews}
                    totalReview={product.totalReviews}
                />
            ),
        },
    ];

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        axios.get(route("products.related", product.cross_sell)).then((res) => {
            setRelatedProducts(res.data);
        });
    }, []);

    return (
        <Frontend pageTitle={product.title}>
            <div className="my-[20px] lg:my-[80px] container">
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
                        {auth.customer &&
                        (product.stock || product.inventory?.stock > 0) ? (
                            <CartCounter
                                available={product?.stock}
                                stock={product.inventory?.stock}
                                product={product}
                                className="my-2"
                            />
                        ) : (
                            <p className="text-xl   my-3 text-red-500 border inline-block p-3 border-red-500">
                                Out of Stock!
                            </p>
                        )}
                        {product.inventory?.stock > 0 && (
                            <p className="text-xl">
                                <span className="text-orange-500 font-bold">
                                    {product.inventory?.stock}
                                </span>{" "}
                                items left!
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* ACCORDION */}
            <Accordion data={data} />
            {/* ACCORDION END */}

            {/* * RELATED PRODUCTS */}
            {relatedProducts.length > 0 && (
                <div className="container mb-10">
                    <FeaturedTitle title="Related Products" />
                    <ProductLists products={relatedProducts} />
                </div>
            )}
            {/* * RELATED PRODUCTS  END*/}
        </Frontend>
    );
};

export default SingleProduct;
