import React, { useState } from 'react';

const Mainadmin = () => {
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
                window.location.reload();

            } else {
                const errorData = await response.json();

                setError(errorData.message || 'An error occurred');
            }
        } catch (error) {
            setError('An error occurred');
        }
    };
    return (
        <div className='h-80 bg-[#624bff]'>
            <div className='container mx-auto'>
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between h-32 items-center pt-20">
                    <div className="mr-6">
                        <h1 className="text-4xl font-semibold mb-2 text-white">Welcome To Dashboard</h1>
                        <h2 className="text-white ml-0.5">Welcome to the Admin Area! Effortlessly manage users, monitor performance, and customize the app experience,<br /> all at your fingertips. Streamline your tasks with our user-friendly dashboard and ensure everything runs seamlessly.</h2>
                    </div>
                    <div className="flex flex-wrap items-start justify-end -mb-3">
                        <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="inline-flex px-5 py-3 text-black bg-white hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                            Create new User
                        </button>

                        {/* <!-- Main modal --> */}
                        <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                            <div class="relative w-full max-w-md max-h-full">
                                {/* <!-- Modal content --> */}
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                    <div class="px-6 py-6 lg:px-8">
                                        <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
                                        <form onSubmit={handleSubmit}>
                                            {error && <p className="text-red-500 text-center text-sm">{error.message}</p>}
                                            {!passwordsMatch && <p className="text-red-500 text-sm">Passwords do not match</p>}
                                            <label class="block text-white text-sm font-bold mb-2"
                                                for="first_name">Username</label>
                                            <input
                                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                id="username" name="username" type="text" placeholder="Your Username" onChange={handleChange} />
                                            <label class="block text-white text-sm font-bold" for="email">Email</label>
                                            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                id="email" type="email" name="email" placeholder="Enter a valid email address" onChange={handleChange} />
                                            <label class="block text-white text-sm font-bold" for="password">Password</label>
                                            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                id="password" name="password" type="password" placeholder="A secure password" onChange={handleChange} />
                                            <p class="text-black text-xs mt-2">At least 6 characters</p>
                                            <label class="block text-white text-sm font-bold" for="password" onChange={handleConfirmPasswordChange}>Confirm
                                                Password</label>
                                            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                id="confirmPassword" name="confirmPassword" type="password"
                                                placeholder="Confirm your password" onChange={handleConfirmPasswordChange} />
                                            <button type="submit" class="w-full mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create this user account</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Mainadmin