import AddProduct from "@/Components/Products/AddProduct";
import React, { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Title from "@/Components/Title";
import { useForm } from "@inertiajs/react";
const AddProducts = ({ auth, categories, product }) => {
    const [manageStock, setManageStock] = useState(false);

    const productStoreOrUpdate = useForm({
        title: product?.title ?? "",
        shortDetail: product?.short_detail ?? "",
        detail: product?.long_detail ?? "",
        price: product?.price ?? "",
        sellPrice: product?.sell_price ?? "",
        initialStock: product.inventory?.stock || null,
        sku: product.sku || null,
        cost: product.inventory?.cost || null,
        featuredImage: null,
        galleries: [],
        stock: product?.stock ?? true,
        featured: product?.featured ?? false,
        status: product?.status ?? true,
        categories: product?.categories ?? [],
        crossProducts:
            product?.cross_sell &&
            (product?.cross_sell.length > 0
                ? JSON.parse(product?.cross_sell)
                : []),
    });
    const { post, reset } = productStoreOrUpdate;

    //* handle product store
    const handleStoreProduct = (e) => {
        e.preventDefault();

        post(route("admin.products.store", route().params.id ?? null), {
            onSuccess: () => {
                productStoreOrUpdate.reset();
            },
        });
    };

    useEffect(()=>{
        if(product.inventory){
            setManageStock(true);
        }
    },[])


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Add Product" />
            <div className="py-12">
                {console.log(product.inventory)}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Title
                                className="mb-3"
                                title={`${
                                    route().params.id ? "Edit" : "Add"
                                } Product`}
                                label={`${
                                    route().params.id ? "Add " : "Save"
                                } Product`}
                                url={`admin.products.add`}
                                
                            />
                            <AddProduct
                                product={product}
                                categories={categories}
                                manageStock={manageStock}
                                setManageStock={setManageStock}
                                productStoreOrUpdate={productStoreOrUpdate}
                                handleStoreProduct={handleStoreProduct}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default AddProducts;
