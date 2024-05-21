import { router, useForm } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

import { CiSearch } from "react-icons/ci";
import axios from "axios";

const SearchBar = () => {
    const [searchModal, setSearchModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState(null);
    const { data, setData, get, processing } = useForm({
        searchParam: "",
    });
    //* LIVE SEARCH ON TYPE
    const searching = (e) => {
        const searchValue = e.target.value;
        setData({ searchParam: searchValue });

        if (searchValue.length >= 4) {
            setSearchModal(true);
            //* GET SEARCH RESULTS OVER HERE
            axios
                .get(route("products.search", data.searchParam))
                .then(({ data }) => {
                    setProducts(data);
                });
            //* GET SEARCH RESULTS OVER ENDS HERE
            if (products != null) {
                setLoading(false);
            }
        } else {
            setSearchModal(false);
        }
    };
    //* TURN OFF SEARCH MODAL IF CLICKED OUTSIDE
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                searchModal &&
                searchInputRef.current &&
                !searchInputRef.current.contains(event.target) &&
                !searchModalRef.current.contains(event.target)
            ) {
                setSearchModal(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchModal]);

    const searchInputRef = React.useRef();
    const searchModalRef = React.useRef();

    //* FORM SUBMIT
    const handleSearch = (e) => {
        e.preventDefault();

        router.get(route("shop", {title:data.searchParam}));
    };

    return (
        <form
            method="POST"
            onSubmit={handleSearch}
            className="flex justify-center relative"
        >
            <div className=" relative w-[80%]">
                <span className=" absolute top-1/2 left-2 translate-y-[-50%] text-2xl">
                    <CiSearch />
                </span>
                <input
                    onChange={searching}
                    type="text"
                    ref={searchInputRef}
                    defaultValue={data.searchParam}
                    className="h-full w-full border-gray-200 rounded-s-md ps-9 focus:ring-primary focus:border-gray-200 "
                    placeholder="Search"
                />
            </div>
            <button
                type="submit"
                className="bg-primary  text-white py-[14px] px-[24px] rounded-e-md"
            >
                Search
            </button>

            {searchModal && (
                <div
                    ref={searchModalRef}
                    className="absolute bg-white w-full top-[100%]  shadow-lg p-4 z-50"
                >
                    {loading ? (
                        <h5>Searching Results...</h5>
                    ) : (
                        <div className="group">
                            <h6 className="mb-3">
                                {products.length} Results found
                            </h6>
                            {products?.map((product) => (
                                <Link
                                    key={product.id}
                                    className="block border-b mb-2 capitalize group-last:last:border-0"
                                    href={route("product.view", product.slug)}
                                >
                                    {product.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </form>
    );
};

export default SearchBar;
