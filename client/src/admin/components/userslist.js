import React, { useState, useEffect } from 'react';

const Userslist = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/allusers')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                setUsers(data);
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    const handleDeleteUser = (userId) => {
        fetch(`http://localhost:4000/users/${userId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                console.log('User deleted:', data);
                setUsers(prevUsers => prevUsers.filter(user => user._id !== userId));
                window.location.reload();
            })
            .catch(error => console.error('Error deleting user:', error));
    };

    return (
        <div>
            {/* <!-- component --> */}
            <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <table className="container mx-auto mt-24">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-center leading-4 text-blue-500 tracking-wider">ID</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Username</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="flex items-center justify-center text-center">
                                        <p className="text-sm leading-5 text-gray-800">#{index + 1}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                    <div className="text-sm leading-5 text-center text-blue-900">{user.username}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b text-center text-blue-900 border-gray-500 text-sm leading-5">{user.email}</td>
                                <td className="px-6 py-4 whitespace-no-wrap text-center border-b text-blue-900 border-gray-500 text-sm leading-5">
                                    <span className={`relative inline-block px-3 py-1 font-semibold ${user.isAdmin ? 'text-green-900' : 'text-orange-900'} leading-tight`}>
                                        <span aria-hidden className={`absolute inset-0 ${user.isAdmin ? 'bg-green-200' : 'bg-orange-200'} opacity-50 rounded-full`}></span>
                                        <span className="relative text-xs">{user.isAdmin ? 'Admin' : 'Not Admin'}</span>
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap text-center border-b border-gray-500 text-sm leading-5">
                                    <button name='Promote' className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                        </svg>
                                    </button>
                                    <button name='edith' className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>
                                    <button
                                        name='delete'
                                        className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none ml-1"
                                        onClick={() => handleDeleteUser(user._id)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Userslist;
