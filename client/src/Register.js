
import React, { useState } from 'react';

export const Register = () => {
    const [formData,setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // fetch('http://localhost:6000/register', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ formData }),
        // }).then(response => response.json())
        // .then(data => console.log(data))
        // .catch(error => console.error(error));
        try {
            const response = await fetch('http://localhost:6000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData }),
            });
            if (response.ok) {
                // Registration successful
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'An error occurred');
            }
        } catch (error) {
            console.log(error)
            setError('An error occurred');
        }
    };

    return (
        <section class="bg-fixed h-screen ">
            <div class="font-sans antialiased bg-grey-lightest">
                <div class="w-full bg-grey-lightest">
                    <div class="container mx-auto py-8">
                        <form onSubmit={handleSubmit}>
                            <div class="w-5/6 lg:w-2/4 mx-auto rounded opacity-90 drop-shadow-2xl bg-black dark:bg-gray-900 ">
                                <div class="py-4 px-8 flex text-white text-xl border-b border-grey-lighter justify-between">
                                    Register for a free
                                    account
                                    <a href="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                        </svg>
                                    </a>
                                </div>
                                <div class="py-4 px-8">
                                    {error && <p>{error}</p>}
                                    <div class="flex mb-4">
                                        <div class="w-1/2 mr-1">
                                            <label class="block text-white text-sm font-bold mb-2"
                                                for="first_name">Username</label>
                                            <input
                                                class="appearance-none border rounded w-full bg-transparent py-2 px-3 text-white"
                                                id="username" name="username" type="text" placeholder="Your Username"  onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="email">Email</label>
                                        <input class="appearance-none border rounded w-full py-2 px-3 bg-transparent text-white"
                                            id="email" type="email" name="email" placeholder="Enter a valid email address" onChange={handleChange} />
                                    </div>
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2" for="password">Password</label>
                                        <input class="appearance-none border rounded w-full py-2 bg-transparent px-3 text-white"
                                            id="password" name="password" type="password" placeholder="A secure password" onChange={handleChange} />
                                        <p class="text-white text-xs mt-1">At least 6 characters</p>
                                        {/* <label class="block text-white text-sm font-bold mt-2 mb-2" for="password">Confirm
                                            Password</label>
                                        <input class="appearance-none border rounded w-full py-2 bg-transparent px-3 text-white"
                                            id="confirmPassword" name="confirmPassword" type="password"
                                            placeholder="Confirm password" /> */}
                                    </div>
                                    {/*  <p class="text-red-500 text-sm mt-1" id="passwordMismatch">Passwords
                                        do not match. Make sure the passwords match.</p> */}
                                    <div class="flex items-center justify-center mt-8">
                                        <button type="submit" id="signupButton"
                                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                        >Sign up</button>
                                    </div>
                                    <p class="text-center my-4">
                                        <a href="/login" class="text-white text-sm no-underline hover:text-white">I
                                            already
                                            have an account !</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
//};