import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {
    const [message,setMessage]=useState('')
    useEffect(()=>{
      getDataFromServer()
    },[])
  async function getDataFromServer(){
    try {
      const response = await axios.get('https://servestaticreactfilesinserver.onrender.com/api/v1')
      setMessage(response.data)
    } catch (error) { 
      console.log(error)
    }
  }
    return (
      <div>hello,{message.message}</div>
    )
}
