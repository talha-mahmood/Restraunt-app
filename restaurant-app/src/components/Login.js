import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
export default function Login() {
  const [state, setState] = useState({ name: null, password: null });
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.getItem("login") && navigate("/")
  },[])
  let loginSuccess = () => {
    fetch("http://localhost:3000/login")
    .then((response) => {response.json().then((result) => {
    console.log([state.password == result.map((i) => i.password)]);
    if ([state.name == result.map((i) => i.name)] && state.password == result.map((i) => i.password)) 
    {
    console.log("success")
    localStorage.setItem('login', JSON.stringify(result))
    navigate("/list")
    }
    else 
    {
    alert("please check username and password")
    }
    })})
  }
  return (
    <div>
      <Navbar />
      <div className='login'>
      <input className="mb-[10px] p-[5px]" type='text' placeholder='Enter Name' onChange={(event) => setState({ name: event.target.value })}></input>
      <input className="mb-[10px] p-[5px]" type='text' placeholder='Enter Password' onChange={(event) => setState({ password: event.target.value })}></input>
      <button className='button m-auto' onClick={() => loginSuccess()}>Login</button>
      </div>
    </div>
  )
}

