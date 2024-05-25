import OrderTable from "@/Components/Order/OrderTable";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { setUsers } from "@/store/slices/UserSlice";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";

const Profile = ({ auth }) => {
    const { customer } = auth;
    
    
   



    return (
        <ProfileLayout>
            <div className="grid grid-cols-2 gap-3">
                <div className="border py-[32px] text-center rounded-md">
                    <img
                        className="size-[100px] rounded-full mx-auto"
                        src={`https://api.dicebear.com/8.x/initials/svg?seed=${auth.customer.name}`}
                        alt=""
                    />
                    <h4 className="mt-3 text-xl font-semibold capitalize">
                        {auth.customer.name}
                    </h4>
                    <p className="text-gray-600 text-sm">Customer</p>
                    <Link href="#" className="text-primary">Edit Profile</Link>
                </div>
                <div className="border p-5 rounded-md">
                    <h3 className="font-bold text-2xl">Billing Details</h3>
                    <p className="my-2">Address: {auth.customer.address}.</p>
                    <p className="my-2">Phone: {auth.customer.phone}</p>
                    <p className="my-2">Email: {auth.customer.email}</p>
                </div>
                <div className="border p-5 rounded-md col-span-2">
                    <OrderTable title='Recent Orders' />
                </div>
            </div>
        </ProfileLayout>
    );
};

export default Profile;
