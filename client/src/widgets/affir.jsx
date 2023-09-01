import React, { useEffect, useState } from 'react'
import contry from '../img/contry.png'

const Afficomponent = (props) => {

    const [affir, setAffir] = useState("")
    const [selectedTimer, setSelectedTimer] = useState("1");

    const handleTimerChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedTimer(selectedValue);
    };

    useEffect(() => {
        fetchAffir()
    }, []);

    const fetchAffir = async () => {
        try {
            const url = "https://www.affirmations.dev/";
            const response = await fetch(url)
            const data = await response.json()
            setAffir(data.affirmation)
        } catch (error) {
            console.error('error:' + error)
        };
    }
    const duplicate = async () => {
        try {
            const userid = localStorage.getItem('token')
            const url = "http://localhost:4000/duplicate/widget/" + props.widid + "/user/" + userid;
            await fetch(url)
            props.updateState()
        } catch (error) {

        }
    }

    const removeWidget = async () => {
        try {
            const userid = localStorage.getItem('token')
            const url = "http://localhost:4000/remove/widget/" + props.widid + "/user/" + userid;
            await fetch(url)
            props.updateState()
        } catch (error) {

        }
    }

    return (
        <div class="relative mx-auto w-full my-3">
            <a href="#jg" class="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div class="shadow p-4 rounded-lg bg-white flex flex-col items-center">
                    <img src={contry} alt="contry" className='h-[200px]' />

                    <div className='flex space-x-2 mt-5'>
                        <span>City: ;</span>
                        <span>Country: ;</span>

                    </div>

                    <div class="grid mt-8">
                        <div class="flex bg-[#2bb24c] px-8 py-1 space-x-5 rounded-lg overflow-hidden shadow items-center">
                            <a href="#ddd">
                                <p class="flex items-center font-medium text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                                    </svg>
                                    Duplicate
                                </p>
                            </a>

                            <a onClick={duplicate}>
                                <p class="flex items-center font-medium text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                    Duplicate
                                </p>
                            </a>
                            <a onClick={removeWidget}>
                                <p class="flex items-center font-medium text-gray-800">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                    </svg>
                                    Remove
                                </p>
                            </a>
                            <select
                                name="timer"
                                id="timer"
                                className='bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:outline-none'
                                value={selectedTimer}
                                onChange={handleTimerChange}
                            >
                                <option value="1">1000 ms</option>
                                <option value="2">2000 ms</option>
                                <option value="3">3000 ms</option>
                                <option value="4">4000 ms</option>
                            </select>

                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Afficomponent