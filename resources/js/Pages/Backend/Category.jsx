import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import Title from "@/Components/Title";
import Table from "@/Components/Table";
import TableHeading from "@/Components/TableHeading";
import TableCell from "@/Components/TableCell";
import { statusCheck } from "@/utils/statusChecker";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Pagination from "@/Components/Pagination";

const Category = ({ auth, categories }) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Title
                                title="Category"
                                url="#"
                                label="Add Category"
                            />

                            <Table className={`mt-8`}>
                                <thead>
                                    <tr>
                                        <TableHeading>#</TableHeading>
                                        <TableHeading>Category</TableHeading>
                                        <TableHeading>Status</TableHeading>
                                        <TableHeading></TableHeading>
                                    </tr>
                                </thead>
                                <tbody>
                                    {console.log(categories)}
                                    {categories.data?.map((category, index) => (
                                        <tr key={category.id}>
                                            <TableCell className="text-center">
                                                {categories.from + index}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                {category.title}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <button
                                                    className={`${
                                                        statusCheck[
                                                            category.status
                                                        ].style
                                                    }`}
                                                >
                                                    {
                                                        statusCheck[
                                                            category.status
                                                        ].type
                                                    }
                                                </button>
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Link className="text-blue-500 mx-2">
                                                    <FiEdit2 />
                                                </Link>

                                                <Link className="text-red-500">
                                                    <MdOutlineDelete />
                                                </Link>
                                            </TableCell>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            {categories.last_page > 1 && (
                                <Pagination
                                    links={categories.links}
                                    className="my-8"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Category;
