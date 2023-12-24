import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

export default function RestaurantUpdate() {
  const { id } = useParams();
  const [state, setState] = useState({
    name: null,
    email: null,
    rating: null,
    address: null,
    id: null,
  });
  useEffect(() => {
    fetch('http://localhost:3000/restaurant/'+id)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setState({
          name: result.name,
          email: result.email,
          rating: result.rating,
          address: result.address,
          id: result.id,
        });
      });
  }, [id]);
  const updateRestaurant = () => {
    fetch(`http://localhost:3000/restaurant/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then((result) =>
      result.json().then((resp) => alert('Restaurant Successfully updated'))
    );
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold mb-3 m-auto"> Restaurant Update</h1>
      <div>
        <input
          onChange={(event) => setState((prevState) => ({ ...prevState, name: event.target.value }))}
          placeholder="Restaurant Name"
          value={state.name}
        ></input>
        <br />
        <br />
        <input
          onChange={(event) => setState((prevState) => ({ ...prevState, email: event.target.value }))}
          placeholder="Restaurant Email"
          value={state.email}
        ></input>
        <br />
        <br />
        <input
          onChange={(event) => setState((prevState) => ({ ...prevState, rating: event.target.value }))}
          placeholder="Restaurant Rating"
          value={state.rating}
        ></input>
        <br />
        <br />
        <input
          onChange={(event) => setState((prevState) => ({ ...prevState, address: event.target.value }))}
          placeholder="Restaurant Address"
          value={state.address}
        ></input>
        <br />
        <br />
        <button onClick={updateRestaurant}>Update Restaurant</button>
      </div>
    </div>
  );
}
