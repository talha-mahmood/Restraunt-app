import './App.css';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Login from './components/Login';
import Logout from './components/Logout';
import ProtectedRoutes from './components/ProtectedRoutes';
import { Component} from 'react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/create" element={<ProtectedRoutes ><RestaurantCreate /></ProtectedRoutes>} ></Route>
          <Route path="/update/:id" element={<ProtectedRoutes ><RestaurantUpdate /></ProtectedRoutes>}></Route>
          <Route path="/search" element={<ProtectedRoutes ><RestaurantSearch /></ProtectedRoutes>} ></Route>
          <Route path="/details" element={<ProtectedRoutes ><RestaurantDetail /></ProtectedRoutes>} ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/list" element={<ProtectedRoutes ><RestaurantList /></ProtectedRoutes>} ></Route>
          <Route path="/logout" element={<Logout />} ></Route>
          <Route path="/" element={<ProtectedRoutes ><Home /></ProtectedRoutes>} ></Route>
        </Routes>
      </div>
    );
  }
}
export default App;
