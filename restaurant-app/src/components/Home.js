import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <h1 className='text-4xl font-bold mb-3 m-auto'>Home</h1>
      </div>
    )
  }
}
