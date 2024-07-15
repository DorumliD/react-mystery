import React, { useEffect, useState } from 'react'

function UseEffect() {

    // const [myVariable, setMyVariable] = useState(6);
    const [type, setType] = useState(['noOne']);
    const [data, setData] = useState([]);
    const [state, setState] = useState('salom');

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)  // fetch serverdan ma'lumotni olib keladi -agar parametrda faqat url bo'lsa
    .then(response => response.json())
    .then(json => setData(json))
    }, [type])

    return (
        <div>
            My type is: {type}
            <br></br>
            <br></br>
            <button className='btn bg-danger text-light m-2' onClick={()=>setType('users')}>users</button>
            <button className='btn bg-info text-light m-2' onClick={()=>setType('todos')}>todos</button>
            <button className='btn bg-warning text-light m-2' onClick={()=>setType('posts')}>posts</button>
            {state}
            <pre className='bg-secondary m-2'>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default UseEffect;
