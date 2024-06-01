import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Title from "@/Components/Title";
import Modal from "@/Components/Modal";
const Products = ({ auth }) => {
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
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Title
                                title="Manage Products"
                                label="Add Product"
                                action={e=> setModal(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Modal title={`Add Product`} show={modal} onClose={(e) => setModal(false)}>
                
            </Modal>
        </AuthenticatedLayout>
    );
};

export default Products;
