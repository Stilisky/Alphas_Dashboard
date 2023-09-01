import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
                const token = await response.json();
                localStorage.setItem('token', token)
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
        <section class="bg-gray-100 dark:bg-gray-900 h-screen">
            <form onSubmit={handleLogin} >
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        class="w-full bg-white rounded-lg shadow drop-shadow-3xl opacity-90 md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="relative p-6 space-y-4 bg-white md:space-y-6 sm:p-8 opacity-90">
                            <div class="w-full text-4xl mb-2 font-medium text-center leading-snug font-serif">
                                Login
                                <a href="/" className="absolute top-4 right-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                                </a>
                            </div>

                            <span class="space-y-4 md:space-y-6">

                                <div>
                                        {error && <p className="text-red-500 mb-2 text-center Email text-sm">{error}</p>}
                                    <label for="email" class="block mb-3 text-sm font-medium text-black dark:text-white">Email</label>
                                    <input type="email" name="email" id="email"
                                        class="bg-gray-50 text-black border bg-transparent border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com" required="" onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="password"
                                        class="block mb-2 text-sm font-medium text-black dark:text-black">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        class="bg-gray-50 text-black border border-gray-300 bg-transparent sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                                    class=" w-full text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign
                                    in</button>
                                <p class="text-sm font-light text-black dark:text-gray-400">
                                    Don’t have an account yet? <a href="/register"
                                        class="font-medium text-black hover:underline dark:text-primary-500">Sign up</a>
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