import React from "react";
import Frontend from "@/Layouts/Frontend";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const SignUp = () => {
    const { data, setData, errors, setError, clearErrors, post,processing } =
        useForm({
            email: "",
            password: "",
            password_confirmation: "",
            name: "",
        });

    const checkPasswordConfirmation = (e) => {
        setData("password_confirmation", e.target.value);
        
        if (data.password !== e.target.value) {
            setError("password", "Password did not match!");
            return false;
        }
        clearErrors();
    };

    const handleRegister = (e) => {
        e.preventDefault();
        post(route("signup.attempt"));
    };

    return (
        <Frontend>
            <section id="signin">
                <div className="container my-[80px]">
                    <form
                        onSubmit={handleRegister}
                        className="w-full max-w-[520px] shadow-lg mx-auto p-[24px] rounded-md"
                    >
                        <h2 className="text-center font-popins font-semibold text-3xl mb-5">
                            Sign Up
                        </h2>

                        <input
                            type="text"
                            placeholder="User Name"
                            onChange={(e) => setData("name", e.target.value)}
                            initialvalue={data.name}
                            className="my-[6px] w-full border-gray-200 rounded-md focus:border-transparent focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.name} />
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                            initialvalue={data.email}
                            className="my-[6px] w-full border-gray-200 rounded-md focus:border-transparent focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.email} />
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            initialvalue={data.password}
                            className="my-[6px] w-full border-gray-200 rounded-md focus:border-transparent focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.password} />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={(e) => checkPasswordConfirmation(e)}
                            initialvalue={data.password_confirmation}
                            className="my-[6px] w-full border-gray-200 rounded-md focus:border-transparent focus:ring-1 focus:ring-primary"
                        />

                        <button
                            type="submit"
                            className="btn rounded-full w-full py-[10px] my-[10px]"
                        >
                            Sign Up
                        </button>
                        <p className="text-center text-gray-500 text-sm">
                            Already have an account?
                            <Link
                                href={route("signin.show")}
                                className="font-bold text-gray-900 ms-1"
                            >
                                Signin Here
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </Frontend>
    );
};

export default SignUp;
