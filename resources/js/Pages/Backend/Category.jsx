import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Title from "@/Components/Title";
import Table from "@/Components/Table";
import TableHeading from "@/Components/TableHeading";
import TableCell from "@/Components/TableCell";
import { statusCheck } from "@/utils/statusChecker";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";
import Pagination from "@/Components/Pagination";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import InputSelect from "@/Components/InputSelect";

const Category = ({ auth, categories }) => {
    const [modal, setModal] = useState(false);
    const { data, setData, errors, post, reset } = useForm({
        id: null,
        icon: null,
        title: "",
        parentId: null,
    });

    const handleCreateOrUpdate = (e) => {
        e.preventDefault();
        post(route("admin.category.storeOrUpdate", data?.id), {
            preserveScroll: true,
            onSuccess: (e) => {
                setModal(false);
            },
        });
    };

    const handleEdit = (category) => {
        setData({
            id: category.id,
            title: category.title,
            icon: category.icon,
        });
        setModal(true);
    };

    const statusToggle = ({ id }) => {
        post(route("admin.category.updateStatus", id), {
            preserveScroll: true,
        });
    };

    const handleDelete = ({ id }) => {
        if (confirm("Are you sure ?")) {
            post(route("admin.category.delete", id), {
                preserveScroll: true,
            });
        }
    };

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
                                url="home"
                                label="Add Category"
                                action={(e) => setModal(true)}
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
                                    {console.log(categories.data)}
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
                                                    onClick={(e) =>
                                                        statusToggle(category)
                                                    }
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
                                                <button
                                                    onClick={(e) =>
                                                        handleEdit(category)
                                                    }
                                                    className="text-blue-500 mx-2"
                                                >
                                                    <FiEdit2 />
                                                </button>

                                                <button
                                                    onClick={(e) =>
                                                        handleDelete(category)
                                                    }
                                                    className="text-red-500"
                                                >
                                                    <MdOutlineDelete />
                                                </button>
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
            <Modal
                show={modal}
                title={`Add Category`}
                onClose={(e) => {
                    setModal(false);
                    reset();
                }}
            >
                <form
                    onSubmit={handleCreateOrUpdate}
                    className="text-end relative"
                >
                    <TextInput
                        defaultValue={data.title}
                        initialvalue={data.title}
                        onChange={(e) => setData("title", e.target.value)}
                        className="w-full"
                        placeholder="Category"
                    />
                    <div className="text-start">
                        {<InputError message={errors.title} />}
                    </div>
                    {data.icon && (
                        <img
                            src={
                                typeof data.icon == "object"
                                    ? URL.createObjectURL(data.icon)
                                    : `/${data.icon}`
                            }
                            alt=""
                            className="max-w-[80px] my-2"
                        />
                    )}
                    <InputLabel className="text-start my-2">
                        Category Icon
                        <TextInput
                            initialvalue={data.icon}
                            type="file"
                            className="w-full"
                            onChange={(e) => setData("icon", e.target.files[0])}
                        />
                    </InputLabel>

                    <InputLabel className="text-start my-2">
                        Parent Category
                        <InputSelect
                            defaultValue={data.parentId}
                            onChange={(e) =>
                                setData("parentId", e.target.value)
                            }
                            placeHolder={`Select an category`}
                        >
                            {categories.data?.map((category) => (
                                <option value={category.id} key={category.id}>
                                    {category.title}
                                </option>
                            ))}
                        </InputSelect>
                    </InputLabel>

                    <PrimaryButton className="">
                        {!data.id ? `Add` : "Update"} Category
                    </PrimaryButton>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
};

export default Category;
