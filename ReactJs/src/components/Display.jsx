import axios from 'axios'
import { useEffect, useState } from 'react';
const Display = () => {
    let [data,setData] = useState([])
    const fetchData = async()=>{
        try {   
        const response =  await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
         setData(response.data); // ✅ Directly set state
        console.log(response.data);
    } catch (error) {
        alert(error)
    }
    }
    
    useEffect(()=>{
        fetchData()
    },[])
  
   
  return (
    <div>
      {data.map((list)=>(
        <li key={list.userId}>
            {list.title} {list.body}
        </li>
      ))}
    </div>
  )
}

export default Display
