/* eslint-disable no-unused-vars */
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
  return (
    <BrowserRouter>
    <Topbar/>
     <Navbar user={user}/>
      <div className="container">
        <Sidebar />
        <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/users"
            element={user ? <UserList /> : <Navigate to="/login" />}
          />

          <Route
            path="/user/:userId"
            element={user ? <User /> : <Navigate to="/login" />}
          />


          <Route
            path="/newUser"
            element={user ? <NewUser /> : <Navigate to="/login" />}
          />

          <Route
            path="/products"
            element={user ? <ProductList /> : <Navigate to="/login" />}
          />

          <Route
            path="/product/:productId"
            element={user ? <Product /> : <Navigate to="/login" />}
          />


          <Route
            path="/newproduct"
            element={user ? <NewProduct /> : <Navigate to="/login" />}
          />         
          
      </div>
      </BrowserRouter>
  );
}

export default App;
