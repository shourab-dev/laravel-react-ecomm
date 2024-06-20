import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { IoIosClose } from "react-icons/io";
import TextArea from "@/Components/TextArea";
import PrimaryButton from "@/Components/PrimaryButton";

import InputError from "../InputError";
import Select from "react-select";
import axios from "axios";

const AddProduct = ({
    manageStock,
    setManageStock,
    productStoreOrUpdate,
    handleStoreProduct,
    categories = [],
    product = {},
}) => {
    const [editedGallery, setEditedGallery] = useState(
        product?.galleries ?? []
    );
    const { data, setData, errors } = productStoreOrUpdate;
    const removeGalleryImage = (id, index) => {
        if (product && product.galleries) {
            editedGallery.splice(index, 1);
            setEditedGallery([...editedGallery]);
        }
        try {
            axios.get(route(`removeGalleryImage`, id));
        } catch (error) {
            console.log(error);
        }
    };
    const [crossProducts, setCrossProducts] = useState([]);

    const getCrossProducts = (value) => {
        axios
            .get(route("admin.products.crossProducts", value))
            .then(({ data }) => {
                setCrossProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <form onSubmit={handleStoreProduct}>
            <div>
                <TextInput
                    className="w-full"
                    placeholder="Product name"
                    onChange={(e) => setData("title", e.target.value)}
                    defaultValue={data.title}
                />
                <InputError message={errors.title} />
            </div>
            <div className="grid grid-cols-2 gap-3 my-3">
                <div>
                    <TextInput
                        type="number"
                        className="w-full"
                        placeholder="Product Price"
                        onChange={(e) => setData("price", e.target.value)}
                        defaultValue={data.price}
                    />
                    <InputError message={errors.price} />
                </div>
                <div>
                    <TextInput
                        type="number"
                        className="w-full"
                        placeholder="Product Selling Price"
                        onChange={(e) => setData("sellPrice", e.target.value)}
                        defaultValue={data.sellPrice}
                    />
                    <InputError message={errors.sellPrice} />
                </div>
            </div>

            <div className="border-b border-t">
                <div className="grid grid-cols-3 gap-3 my-3 ">
                    <InputLabel>
                        <TextInput
                            type="checkbox"
                            onChange={(e) => setManageStock(!manageStock)}
                            checked={manageStock}
                        />
                        <span className="ms-2 select-none">Manage Stocks</span>
                    </InputLabel>
                </div>
                <div
                    className={`grid grid-cols-2 gap-3 my-3 ${
                        manageStock ? "block" : "hidden"
                    }`}
                >
                    <TextInput
                        className="w-full"
                        placeholder="Product Initial Stock"
                        onChange={(e) =>
                            setData("initialStock", e.target.value)
                        }
                        defaultValue={data.initialStock}
                    />
                    <TextInput
                        className="w-full"
                        onChange={(e) => setData("sku", e.target.value)}
                        defaultValue={data.sku}
                        placeholder="Product SKU"
                    />
                </div>
            </div>

            <div className="my-3">
                {(data.featuredImage || product?.featured_img) && (
                    <div className="relative w-fit">
                        <span
                            onClick={(e) => {
                                setData("featuredImage", "");
                                if (product && product.featured_img) {
                                    product.featured_img = null;
                                }
                            }}
                            className="absolute size-[20px]  rounded-full text-center bg-gray-500 text-white cursor-pointer leading-[18px] hover:bg-gray-800 font-bold right-0"
                        >
                            <IoIosClose />
                        </span>

                        <img
                            src={
                                product?.featured_img && !data.featuredImage
                                    ? `/${product.featured_img}`
                                    : data.featuredImage &&
                                      URL.createObjectURL(data.featuredImage)
                            }
                            className="w-[80px] block"
                        />
                    </div>
                )}

                <InputLabel>
                    <span className="block my-1">Featured Image</span>
                    <TextInput
                        accept=".jpg,.png,.webp,.jpeg"
                        onChange={(e) =>
                            setData("featuredImage", e.target.files[0])
                        }
                        type="file"
                        className="w-full focus:outline-none focus:border-0 focus:ring-2 ring-purple-600 "
                    />
                    <InputError message={errors.featuredImage} />
                </InputLabel>
            </div>
            <div className="my-3">
                {(data.galleries.length != 0 ||
                    product?.galleries.length != 0) && (
                    <div className="grid grid-cols-6 gap-3">
                        {data.galleries.map((gallery, index) => (
                            <div className="relative w-fit" key={index}>
                                <span
                                    onClick={(e) => {
                                        data.galleries.splice(index, 1);
                                        setData("galleries", data.galleries);
                                    }}
                                    className="absolute size-[20px]  rounded-full text-center bg-gray-500 text-white cursor-pointer leading-[18px] hover:bg-gray-800 font-bold right-0"
                                >
                                    <IoIosClose />
                                </span>
                                <img
                                    src={URL.createObjectURL(gallery)}
                                    alt=""
                                    className="w-[80px] block"
                                />
                            </div>
                        ))}

                        {product && editedGallery?.length != 0 && (
                            <>
                                {editedGallery.map((gallery, index) => (
                                    <div className="relative w-fit" key={index}>
                                        <span
                                            onClick={(e) =>
                                                removeGalleryImage(
                                                    gallery.id,
                                                    index
                                                )
                                            }
                                            className="absolute size-[20px]  rounded-full text-center bg-gray-500 text-white cursor-pointer leading-[18px] hover:bg-gray-800 font-bold right-0"
                                        >
                                            <IoIosClose />
                                        </span>
                                        <img
                                            src={`/${gallery.title}`}
                                            alt=""
                                            className="w-[80px] block"
                                        />
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                )}

                <InputLabel>
                    <span className="block my-1">Galleries</span>

                    <TextInput
                        accept=".jpg,.png,.webp,.jpeg"
                        initialvalue={data.galleries}
                        multiple
                        onChange={(e) =>
                            setData("galleries", Array.from(e.target.files))
                        }
                        type="file"
                        className="w-full focus:outline-none focus:border-0 focus:ring-2 ring-purple-600 "
                    />
                    <InputError message={errors.galleries} />
                </InputLabel>
            </div>

            <TextArea
                onChange={(e) => setData("shortDetail", e.target.value)}
                defaultValue={data.shortDetail}
                placeholder="Short Detail"
                className="my-2"
            />
            <TextArea
                onChange={(e) => setData("detail", e.target.value)}
                defaultValue={data.detail}
                placeholder="Long Detail"
                className="my-2"
            />

            <div className="grid grid-cols-3 gap-3 mb-5 px-3">
                <InputLabel className=" select-none">
                    <TextInput
                        type="checkbox"
                        checked={data.status}
                        onChange={(e) => setData("status", !data.status)}
                    />
                    <span className="ms-2">Product Status</span>
                </InputLabel>
                <InputLabel className=" select-none">
                    <TextInput
                        type="checkbox"
                        checked={data.featured}
                        onChange={(e) => setData("featured", !data.featured)}
                    />
                    <span className="ms-2">Featured</span>
                </InputLabel>
                <InputLabel className=" select-none">
                    <TextInput
                        type="checkbox"
                        checked={data.stock}
                        onChange={(e) => setData("stock", !data.stock)}
                    />
                    <span className="ms-2">Available Stock</span>
                </InputLabel>
            </div>

            <hr />

            <div className="my-3">
                <InputLabel htmlFor="">Select Categories</InputLabel>
                <Select
                    placeholder={`Select Categories `}
                    options={categories}
                    isMulti={true}
                    isSearchable={true}
                    defaultValue={data.categories}
                    onChange={(value) => setData("categories", value)}
                ></Select>
            </div>
            <hr />

            <div className="my-3">
                <InputLabel htmlFor="">Select Cross Sell Products</InputLabel>
                <Select
                    placeholder={`Select Products `}
                    options={crossProducts}
                    isMulti={true}
                    isSearchable={true}
                    defaultValue={data.crossProducts}
                    onChange={(value) => setData("crossProducts", value)}
                    onInputChange={(e) => getCrossProducts(e)}
                ></Select>
            </div>

            <PrimaryButton type="submit" className="py-4 w-full justify-center">
                Add Product
            </PrimaryButton>
        </form>
    );
};

export default AddProduct;
