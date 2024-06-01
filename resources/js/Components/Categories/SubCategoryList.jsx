import React from "react";
import TableCell from "../TableCell";
import { statusCheck } from "@/utils/statusChecker";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

const SubCategoryList = ({ subCategories, handleEdit, handleDelete }) => {
    return (
        <>
            {subCategories?.map((category, index) => (
                <tr key={category.id}>
                    <TableCell className="text-center">
                        --
                    </TableCell>
                    <TableCell className="text-center">
                        {category.title}
                    </TableCell>
                    <TableCell className="text-center">
                        <button
                            onClick={(e) => statusToggle(category)}
                            className={`${statusCheck[category.status].style}`}
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
            ))}
        </>
    );
};

export default SubCategoryList;
