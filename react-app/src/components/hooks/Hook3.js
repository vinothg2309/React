import React, { useState, useEffect } from 'react'

export default function Hook3(){

    const[data,setData] = useState([])

    useEffect( () => {
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setData(data))
    })

    return(
        <div>
             <ul>
                { data.map( el => ( <li key={el.id}>{el.name}</li>)) }
            </ul>
        </div>
    );
}