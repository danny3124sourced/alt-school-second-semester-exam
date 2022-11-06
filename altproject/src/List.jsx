import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const List = ({repo}) => {

    const [index, setindex] = useState(1)
    const total = Math.ceil(repo?.length/5)
    let arr = []
    for( let i = 0; i < total; i++) {
        arr.push(i+1);
    }
    console.log(index)
  return (
    <>
        <ul className='repos'>
            {
                // user
                repo?.slice(index -1, index + 4).map((u, i) => <li  key={i}><Link to={`/repo/${u?.name}`}>{u?.name}</Link></li>)
            }

        </ul>
        <ul className='paginate'>

            {
                arr.map(i => <li key={i} onClick={() => setindex(i)}>{i}</li>)
            }
        </ul>

    </>
  )
}

export default List