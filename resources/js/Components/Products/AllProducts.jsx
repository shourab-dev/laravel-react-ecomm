import React, { Fragment } from "react";
import Table from "../Table";
import TableHeading from "../TableHeading";
import TableCell from "../TableCell";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import Pagination from "../Pagination";
import { statusCheck } from "@/utils/statusChecker";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import {useForm} from "@inertiajs/react";
const AllProducts = ({ products, className }) => {

    const {get} = useForm();

    const handleDelete = (product) =>{
        if(confirm(`Are you sure, you want to delete this item?`)){
            
            get(route("admin.products.delete", product.id),  {
                preserveScroll: true,
            });
        }
    }

    return (
        <div className={`${className}`}>
            <Table>
                <thead>
                    <tr>
                        <TableHeading>#</TableHeading>
                        <TableHeading>Product</TableHeading>
                        <TableHeading>Status</TableHeading>
                        <TableHeading>Featured</TableHeading>
                        <TableHeading>Action</TableHeading>
                    </tr>
                </thead>
                <tbody>
                    {products.data?.map((product, index) => (
                        <tr key={product.id}>
                            <TableCell className="text-center">
                                {products.from + index}{" "}
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-3 items-center">
                                    {product.featured_img && (
                                        <img
                                            src={"/" + product.featured_img}
                                            alt={product.title}
                                            className="w-[50px] rounded-md"
                                        />
                                    )}
                                    <h4 className="font-bold text-base capitalize">
                                        {product.title}
                                    </h4>
                                </div>
                            </TableCell>
                            <TableCell className="text-center">
                                <Link
                                    preserveScroll={true}
                                    href={route(
                                        "admin.products.status",
                                        product.id
                                    )}
                                    className={`${
                                        statusCheck[product.status].style
                                    } cursor-pointer`}
                                >
                                    {statusCheck[product.status].type}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link
                                    preserveScroll={true}
                                    href={route(
                                        "admin.products.featured",
                                        product.id
                                    )}
                                    className="text-center block text-xl text-yellow-500"
                                >
                                    {product.featured ? (
                                        <FaStar />
                                    ) : (
                                        <FaRegStar />
                                    )}
                                </Link>
                            </TableCell>
                            <TableCell className="text-center">
                                <Link href={route('admin.products.add', product.id)} className="text-blue-500 mx-2">
                                    <FiEdit2 />
                                </Link>

                                <button
                                    onClick={(e) => handleDelete(product)}
                                    className="text-red-500"
                                >
                                    <MdOutlineDelete />
                                </button>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination links={products.links} className="mt-5" />
        </div>
    );
};

export default AllProducts;
