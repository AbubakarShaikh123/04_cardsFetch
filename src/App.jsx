// import React from 'react'
import React,{useState} from "react"
import Card1 from "./components/Card1"

function App() {

  const [data, setData] = useState([])


  const fun = async ()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>{
      return res.json()
    }).then((result)=>{
      setData(result)
    })
  }

  fun()
  
 console.log(data);

  return (
    <>
      <div className=" flex  flex-wrap gap-10 items-center justify-center">
          {
            data?.map((item, index)=>{
                   return <Card1 
                            key={index} 
                            imgurl={item.image}
                            title={item.price}
                            des={item.title}
                            />
            })
          }
      </div>
    </>
  )
}

export default App