import ProfileLayout from "@/Layouts/ProfileLayout";


const Profile = ({ auth }) => {
    const { customer } = auth;
    return (
        <ProfileLayout>
            {auth.customer?.name}
        </ProfileLayout>
    );
};

export default Profile;
