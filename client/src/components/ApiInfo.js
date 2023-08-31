import React, { useState, useEffect } from 'react';

function ApiInfo() {
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/setting')
        .then(response => response.json())
        .then(data => setApiData(data))
        .catch(error => console.error('Error fetching API data:', error));
    }, 
    [])

    return (

        <div>
            {
                apiData.map((list, index)=>(
                    <li key={index}>{list.id} | {list.name}</li>

                ))
            }
        </div>

    )
       
}

export default ApiInfo;