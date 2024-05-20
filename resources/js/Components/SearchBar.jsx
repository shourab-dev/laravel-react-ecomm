import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import { Link } from "@inertiajs/react";

import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
    const [searchModal, setSearchModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([
        { id: 1, title: "Gold" },
        { id: 1, title: "Gold" },
        
    ]);
    const { data, setData, post, processing } = useForm({
        searchParam: "",
    });
    const searching = (e) => {
        const searchValue = e.target.value;
        setData({ searchParam: searchValue });

        if (searchValue.length >= 4) {
            setSearchModal(true);
            //* GET SEARCH RESULTS OVER HERE
            //* GET SEARCH RESULTS OVER ENDS HERE
            if (products != null) {
                setLoading(false);
            }
        } else {
            setSearchModal(false);
        }
    };
    return (
        <div className="flex justify-center relative">
            <div className=" relative w-[80%]">
                <span className=" absolute top-1/2 left-2 translate-y-[-50%] text-2xl">
                    <CiSearch />
                </span>
                <input
                    onChange={searching}
                    type="text"
                    defaultValue={data.searchParam}
                    className="h-full w-full border-gray-200 rounded-s-md ps-9 focus:ring-primary focus:border-gray-200 "
                    placeholder="Search"
                />
            </div>
            <button className="bg-primary  text-white py-[14px] px-[24px] rounded-e-md">
                Search
            </button>

            {searchModal && (
                <div className="absolute bg-white w-full top-[100%]  shadow-lg p-4">
                    {loading ? (
                        <h5>Searching Results...</h5>
                    ) : (
                        <div>
                            <h6 className="mb-3">{products.length} Results found</h6>
                            {products?.map((product) => (
                            <Link
                                key={product.id}
                                className="block border-b mb-2"
                                href="#"
                            >
                                {product.title}
                            </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
