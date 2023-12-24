import React, { Component } from 'react'
import Navbar from './Navbar'

export default class RestaurantCreate extends Component {
  constructor(){
    super()
    this.state={
      name:null,
      email:null,
      rating:null,
      address:null
    }
  }
  create(){
    fetch("http://localhost:3000/restaurant",{
      method:'Post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>result.json().then((resp)=>alert("Restaurant Successfully Added")))
  }
  render() {
    return (
      <div>
        <Navbar/>
        <h1 className="text-4xl font-bold mb-3 m-auto">Restaurant Create</h1>
        <input onChange={(event)=>this.setState({name:event.target.value})} placeholder="Restaurant Name"></input><br/><br/>
        <input onChange={(event)=>this.setState({email:event.target.value})} placeholder='Restaurant Email'></input><br/><br/>
        <input onChange={(event)=>this.setState({rating:event.target.value})}placeholder='Restaurant Rating'></input><br/><br/>
        <input onChange={(event)=>this.setState({address:event.target.value})} placeholder='Restaurant Address'></input><br/><br/>
        <button className='button m-auto' onClick={()=>this.create()}>Add Restaurant</button>
      </div>
    )
  }
}
