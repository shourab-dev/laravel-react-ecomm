import React from "react";
import Frontend from "@/Layouts/Frontend";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

const SignIn = () => {
    const { data, setData, errors, processing, post } = useForm({
        email: "",
        password: "",
        remember: true,
    });

    const handleLogin = (e) => {
        e.preventDefault();

        post(route("signin.attempt"));
    };

    return (
        <Frontend>
            <section id="signin">
                <div className="container my-[80px]">
                    <form
                        onSubmit={handleLogin}
                        method="POST"
                        className="w-full max-w-[520px] shadow-lg mx-auto p-[24px] rounded-md"
                    >
                        <h2 className="text-center font-popins font-semibold text-3xl mb-5">
                            Sign In
                        </h2>

                        <input
                            type="email"
                            placeholder="Email"
                            initialvalue={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="my-[6px] w-full border-gray-200 rounded-md focus:border-transparent focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.email} />
                        <input
                            type="text"
                            placeholder="Password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            initialvalue={data.password}
                            className="my-[6px] w-full border-gray-200 rounded-md focus:border-transparent focus:ring-1 focus:ring-primary"
                        />
                        <InputError message={errors.password} />

                        <div className="flex justify-between my-[10px]">
                            <label
                                htmlFor="remember"
                                className="flex items-center gap-2"
                            >
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        setData("remember", e.target.value)
                                    }
                                    checked={data.remember}
                                    className="rounded focus:ring-0 text-primary "
                                    id="remember"
                                />
                                Remember me
                            </label>
                            <Link className="text-gray-500">
                                Forgot Password
                            </Link>
                        </div>
                        <button
                            type="submit"
                            className="btn rounded-full w-full py-[10px] my-[10px]"
                        >
                            Login
                        </button>
                        <p className="text-center text-gray-500 text-sm">
                            Don't have an account?{" "}
                            <Link
                                href={route("signup.show")}
                                className="font-bold text-gray-900"
                            >
                                Register Here
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </Frontend>
    );
};

export default SignIn;
