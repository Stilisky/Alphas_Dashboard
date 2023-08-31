
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

export const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPassword(confirmPasswordValue);
        setPasswordsMatch(formData.password === confirmPasswordValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!passwordsMatch) {
            return setError('Passwords do not match');
        }

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                //history.push('/login')
            } else {
                const errorData = await response.json();

                setError(errorData.message || 'An error occurred');
            }
        } catch (error) {
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
                                    {error && <p className="text-red-500 text-center text-sm">{error.message}</p>}
                                    {!passwordsMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
                                    <div class="mb-4">
                                        <label class="block text-white text-sm font-bold mb-2"
                                            for="first_name">Username</label>
                                        <input
                                            class="appearance-none border rounded w-full bg-transparent py-2 px-3 text-white"
                                            id="username" name="username" type="text" placeholder="Your Username" onChange={handleChange} />
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
                                        <label class="block text-white text-sm font-bold mt-2 mb-2" for="password" onChange={handleConfirmPasswordChange}>Confirm
                                            Password</label>
                                        <input class="appearance-none border rounded w-full py-2 bg-transparent px-3 text-white"
                                            id="confirmPassword" name="confirmPassword" type="password"
                                            placeholder="Confirm your password" onChange={handleConfirmPasswordChange} />
                                    </div>
                                    <div class="flex items-center justify-center mt-9">
                                        <button type="submit" id="signupButton"
                                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mr-8"
                                        >Sign up</button>
                                        <label class="text-white"> OR </label>
                                            <button class="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ml-8" >
                                                <svg class="h-6 w-6 mr-2" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
                                                <span>Continue with Google</span>
                                            </button>
                                    </div>
                                    <p class="text-center my-4">
                                        <a href='/login' class="text-white text-sm no-underline hover:text-white">
                                            I already have an account!
                                        </a>
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
