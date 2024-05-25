import React from "react";
import FeaturedTitle from "../FeaturedTitle";
import { Link } from "@inertiajs/react";

const OrderTable = ({ title, orders, url }) => {
    return (
        <div>
            <FeaturedTitle title={title} url={url} />

            <table className="w-full">
                    <thead>
                        <tr className="text-start bg-gray-100">
                            <th className="text-start font-medium py-3 px-4">Order ID</th>
                            <th className="text-start font-medium py-3 px-4">Date</th>
                            <th className="text-start font-medium py-3 px-4">Total</th>
                            <th className="text-start font-medium py-3 px-4">Status</th>
                            <th className="text-start font-medium py-3 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-start font-medium py-3 px-4 text-sm text-gray-600">1</td>
                            <td className="text-start font-medium py-3 px-4 text-sm text-gray-600">2019-01-01</td>
                            <td className="text-start font-medium py-3 px-4 text-sm text-gray-600">$135</td>
                            <td className="text-start font-medium py-3 px-4 text-sm text-gray-600">processing</td>
                            <td className="text-start font-medium py-3 px-4 text-sm text-gray-600"><Link>View Detail</Link></td>
                        </tr>
                    </tbody>    
            </table>
        </div>
    );
};

export default OrderTable;
