import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Home/>
{/*       <div className="ambos-formularios">
        <Register />
        <Login />
      </div> */}
      <Cart />
      <Footer />
    </>
  );
}

export default App;