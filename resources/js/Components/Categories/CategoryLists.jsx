import React, { Fragment } from "react";
import SubCategoryList from "./SubCategoryList";
import TableCell from "../TableCell";
import { statusCheck } from "@/utils/statusChecker";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const CategoryLists = ({ categories, handleEdit, handleDelete }) => {
    return (
        <>
            {categories.data?.map((category, index) => (
                <Fragment key={category.id}>
                    <tr>
                        <TableCell className="text-center">
                            {categories.from + index}
                        </TableCell>
                        <TableCell className="text-center">
                            {category.title}
                        </TableCell>
                        <TableCell className="text-center">
                            <button
                                onClick={(e) => statusToggle(category)}
                                className={`${
                                    statusCheck[category.status].style
                                }`}
                            >
                                {statusCheck[category.status].type}
                            </button>
                        </TableCell>
                        <TableCell className="text-center">
                            <button
                                onClick={(e) => handleEdit(category)}
                                className="text-blue-500 mx-2"
                            >
                                <FiEdit2 />
                            </button>

                            <button
                                onClick={(e) => handleDelete(category)}
                                className="text-red-500"
                            >
                                <MdOutlineDelete />
                            </button>
                        </TableCell>
                    </tr>
                    <SubCategoryList
                        subCategories={category.sub_categories}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Fragment>
            ))}
        </>
    );
};

export default CategoryLists;
