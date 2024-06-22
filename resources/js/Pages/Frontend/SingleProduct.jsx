import ProductThumbSlider from "@/Components/Products/ProductThumbSlider";
import Frontend from "@/Layouts/Frontend";
import React from "react";

const SingleProduct = ({auth, product}) => {
    return (
        <Frontend pageTitle="Hellow">
            <div className="my-[80px] container">
                {console.log(product)}
                <div className="grid lg:grid-cols-5 gap-4">
                        <div className="col-span-2">
                            <ProductThumbSlider product={product} />
                        </div>
                        <div className="col-span-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quae hic unde eum quia itaque quod consequatur sapiente dolorum reiciendis reprehenderit ut mollitia. Possimus eius autem harum! Veritatis, aut eos!
                        </div>
                </div>
            </div>
        </Frontend>
    );
};

export default SingleProduct;
