import React, { Fragment } from "react";
import Table from "../Table";
import TableHeading from "../TableHeading";
import TableCell from "../TableCell";
import { FaRegStar } from "react-icons/fa";
import { Link } from "@inertiajs/react";
import Pagination from "../Pagination";
import { statusCheck } from "@/utils/statusChecker";

const AllProducts = ({ products, className }) => {
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
                                <span
                                    className={`${
                                        statusCheck[product.status].style
                                    } cursor-pointer`}
                                >
                                    {statusCheck[product.status].type}
                                </span>
                            </TableCell>
                            <TableCell>
                                <Link className="text-center block text-xl text-yellow-500">
                                    <FaRegStar />
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="grid lg:grid-cols-2">
                                    <a
                                        href=""
                                        className=" text-white py-3 px-4 block text-center bg-primary"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        href=""
                                        className=" text-white py-3 px-4 block text-center bg-red-500"
                                    >
                                        Delete
                                    </a>
                                </div>
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
