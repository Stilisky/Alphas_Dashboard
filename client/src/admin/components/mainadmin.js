import React from 'react'

const Mainadmin = () => {
    return (
        <div className='h-80 bg-[#624bff]'>
            <div className='container mx-auto'>
                <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between h-32 items-center pt-20">
                    <div className="mr-6">
                        <h1 className="text-4xl font-semibold mb-2 text-white">Welcome To Dashboard</h1>
                        <h2 className="text-white ml-0.5">Welcome to the Admin Area! Effortlessly manage users, monitor performance, and customize the app experience,<br/> all at your fingertips. Streamline your tasks with our user-friendly dashboard and ensure everything runs seamlessly.</h2>
                </div>
                <div className="flex flex-wrap items-start justify-end -mb-3">
                    <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Manage dashboard
                    </button>
                    <button className="inline-flex px-5 py-3 text-black bg-white hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                        </svg>
                        Create new User
                    </button>
                </div>
            </div>
        </div>
        </div >
    )
}

export default Mainadmin