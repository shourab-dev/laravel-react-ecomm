import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import Title from "@/Components/Title";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { IoIosClose } from "react-icons/io";
import TextArea from "@/Components/TextArea";
import PrimaryButton from "@/Components/PrimaryButton";
import AddProduct from "@/Components/Products/AddProduct";
import AllProducts from "@/Components/Products/AllProducts";

const Products = ({ auth, products }) => {
    const [modal, setModal] = useState(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Manage products" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Title
                                title="Manage Products"
                                label="Add Product"
                                url="admin.products.add"
                            />
                            <AllProducts products={products} className='mt-5' />
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title={`Add Product`}
                show={modal}
                onClose={(e) => setModal(false)}
            >
                <AddProduct modal={setModal} />
            </Modal>
        </AuthenticatedLayout>
    );
};

export default Products;
