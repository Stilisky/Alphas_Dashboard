import React from 'react'

const Hero = () => {
    return (
        <div>
            <div class="container px-6 py-16 mx-auto text-center">
                <div class="max-w-lg mx-auto">
                    <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Track insights across the web without having to read everything</h1>
                    <p class="mt-6 text-gray-500 dark:text-gray-300">You tell Feedly AI what’s important to you and it flags the important insights from everywhere, including news sites, blogs, and newsletters</p>
                    <button class="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-[#2bb24c] rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                        Get Started
                    </button>
                </div>

                <div class="flex justify-center mt-10">
                    <img class="object-cover w-full h-96 rounded-xl lg:w-4/5" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
                </div>
            </div>
        </div>
    )
}
export default Hero