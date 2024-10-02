import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
const [item,setItem]=useState("products")
const [show,setShow]=useState([])
useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then( (response)=> {
    // handle success
    console.log(response.data);
    setShow(response.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
} ,[item])
  return (
    <>
  
    <div className=' flex flex-wrap justify-center gap-4'>
      {show.map((e,index)=>{
        return(
        <div key={index} >
          <div className='card w-64 border border-2  '>
          <div className='card-body'>

          <img
          src={e.image}
          />
          <h1 className='card-title'>{e.title}</h1>
          <p>{e.price}</p>
          <p>{e.description}</p>

        </div>
        </div>
        </div>
)
      })}
      </div>
      {item}
    </>
  )
}

export default App
