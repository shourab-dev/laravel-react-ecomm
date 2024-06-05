import React, { useState } from "react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { IoIosClose } from "react-icons/io";
import TextArea from "@/Components/TextArea";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import InputError from "../InputError";

const AddProduct = ({modal}) => {
    const [manageStock, setManageStock] = useState(false);

    const { data, setData, processing, errors, post, reset } = useForm({
        title: "",
        shortDetail: null,
        detail: null,
        price: "",
        sellPrice: null,
        initialStock: null,
        sku: null,
        featuredImage: null,
        galleries: [],
        stock: true,
        featured: false,
        status: true,
    });

    //* handle product store
    const handleStoreProduct = (e) => {
        e.preventDefault();

        post(route("admin.products.store"), {
            onSuccess: () => {
                reset();
                modal(false);
            },
        });
    };

    return (
        <form
            onSubmit={handleStoreProduct}
            className=" h-[500px] overflow-y-auto"
        >
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
                {data.featuredImage && (
                    <div className="relative w-fit">
                        <span
                            onClick={(e) => setData("featuredImage", "")}
                            className="absolute size-[20px]  rounded-full text-center bg-gray-500 text-white cursor-pointer leading-[18px] hover:bg-gray-800 font-bold right-0"
                        >
                            <IoIosClose />
                        </span>
                        <img
                            src={
                                data.featuredImage &&
                                URL.createObjectURL(data.featuredImage)
                            }
                            alt=""
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
                {data.galleries.length != 0 && (
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
            <PrimaryButton type="submit" className="py-4 w-full justify-center">
                Add Product
            </PrimaryButton>
        </form>
    );
};

export default AddProduct;
