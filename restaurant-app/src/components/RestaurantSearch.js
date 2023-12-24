import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
export default class RestaurantSearch extends Component {
  constructor(){
    super()
    this.state={
      searchData:null,
      noData:false
    }
  }
  search(key){
    fetch("http://localhost:3000/restaurant?q="+key)
    .then((response)=>{
    response.json().then((result)=>{
      console.log(result)
      if(result.length>0){
      this.setState({searchData:result,noData:false})
      }
      else{
      this.setState({searchData:null,noData:true})
      }
    })
    })
  }
  delete(id){
    fetch(`http://localhost:3000/restaurant/${id}`, {
      method: 'DELETE',
    }).then((result) =>
      result.json().then((resp) => alert('Restaurant Successfully Delete'),
      this.search()
      ));      
  }
  render() {
    return (
      <div className='padding-[20px]'>
        <Navbar/>
       <h1 className="text-4xl font-bold mb-3 m-auto">Restaurant Search</h1> 
       <input className='border' type="text" onChange={(event)=>this.search(event.target.value)} placeholder="Search list"/>
       <div>
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Email                     
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Rating                     
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                        Address                      
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Update</span>
                </th>
            </tr>
        </thead>
        <tbody> 
        {
          this.state.searchData?
            this.state.searchData.map((item)=>
              <tr className="bg-white dark:bg-gray-800">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}</th>
              <td className="px-6 py-4">
              {item.email}
              </td>
             <td className="px-6 py-4">
             {item.rating}
              </td>
             <td className="px-6 py-4">
              {item.address}
              </td>
                <td className="px-6 py-4 text-right">
                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" to={'/update/'+item.id}><FontAwesomeIcon icon={faPenToSquare} color='orange'/></Link>
                    <Link className="ml-2 font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red'/></Link>
                </td>
             </tr>
            )
          :""
        }
         </tbody>
        </table>
        {
          this.state.noData?
          <div>No Data Found</div>:null
        }
        </div>
       </div>
      </div>
    )
  }
}
