import React from 'react'
import hero from '../img/hero.jpg'
import leo from '../img/leo-privacy.svg'

const Feature = () => {
    return (
        <div className='h-fit bg-[white]'>
            <div class="container px-5 py-10 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Discover Our Intuitive Dashboard Experience</h1>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col border shadow-md">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2bb24c] text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">Customized Dashboard</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Create a personalized dashboard by choosing from a variety of widgets to track your favorite information.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col border shadow-md">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2bb24c] text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">Interactive Widgets</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Add interactive widgets such as charts, to-do lists, and social media feeds to stay organized and informed.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col border shadow-md">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2bb24c] text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">Third-Party Integrations</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">Connect with your favorite apps by integrating services like news, stock quotes, and weather forecasts.</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4">
                        <div class="flex rounded-lg h-full bg-white p-8 flex-col border shadow-md">
                            <div class="flex items-center mb-3">
                                <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#2bb24c] text-white flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 class="text-gray-900 text-lg title-font font-medium">User-Friendly Interface</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">The User-Friendly Interface ensures a seamless experience, offering intuitive  to all features.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <dl class="grid gap-8 mx-auto text-gray-900 sm:grid-cols-4 dark:text-white">
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M<span className='text-[#2bb24c]'>+</span></dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B<span className='text-[#2bb24c]'>+</span></dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">contributors</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M<span className='text-[#2bb24c]'>+</span></dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">organizations</dd>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M<span className='text-[#2bb24c]'>+</span></dt>
                        <dd class="font-light text-gray-500 dark:text-gray-400">User</dd>
                    </div>
                </dl>
            </div>
            <div className='bg-[#f6f7f8] h-[500px]'>
                <div className='container mx-auto flex space-x-2 h-full'>
                    <div className='w-1/2 h-full flex flex-col items-center justify-center space-y-3.5'>
                        <h1 className='text-3xl'><strong><span className='text-[#2bb24c]'>Privacy</span> by default</strong></h1>
                        <p className='mx-10 text-1xl text-gray-600'>
                            Feedly is a secure space where you can privately organize and research the topics and trends that matter to you
                        </p>
                        <p className='mx-10 text-1xl text-gray-600'>
                            Feedly is funded by the community that uses it. This means we can focus on optimizing your time, instead of creating a feed that mines your attention.
                        </p>

                    </div>
                    <div className="w-1/2 h-full flex flex-col items-center justify-center">
                        <img src={leo} alt="Hero" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature