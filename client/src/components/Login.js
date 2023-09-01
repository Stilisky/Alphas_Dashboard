import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email, password,
                }),
            });
            if (response.ok) {
                console.log(response.json())
                navigate("/dashboard")
            }
            else {
                const errorData = await response.json();

                setError(errorData.message || 'Invaid credentials !');
            }
        }
        catch (error) {
            setError('Invalid credentials !')
        }
    }
    return (
        <section class="bg-gray-50 dark:bg-gray-900 h-full">
            <form onSubmit={handleLogin}>
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        class="w-full bg-white rounded-lg shadow dark:border drop-shadow-2xl opacity-90 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 bg-black md:space-y-6 sm:p-8 opacity-90">
                            <div class="py-4 flex text-white text-xl border-grey-lighter justify-between">
                                Login
                                <a href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </a>
                            </div>

                            <span class="space-y-4 md:space-y-6">

                                <div>
                                        {error && <p className="text-red-500 mb-2 text-center Email text-sm">{error}</p>}
                                    <label for="email" class="block mb-3 text-sm font-medium text-white dark:text-white">Email</label>
                                    <input type="email" name="email" id="email"
                                        class="bg-gray-50 text-white border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com" required="" onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        class="bg-gray-50 text-white border border-gray-300 bg-transparent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="" onChange={handleChange} />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox"
                                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            />
                                        </div>
                                        <div class="ml-3 text-sm">
                                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit"
                                    class="w-full text-white border bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                    in</button>
                                <p class="text-sm font-light text-black dark:text-gray-400">
                                    Don’t have an account yet? <a href="/register"
                                        class="font-medium text-white hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Login;