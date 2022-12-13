// import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import { Switch,Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Author from "../Pages/Author";
import Home from "../Pages/Home";
import Genre from "../Pages/Genre";
import About from "../Pages/About"

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  

  return (
    <>
      <NavBar
 user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/Genre">
            <Genre user={user}/>
          </Route>
          
            <Route exact path="/Author">
              <Author/>
              </Route>
     
          
          <Route path='/About'>
            <About/>
            </Route>
            <Route path='/Signup'>
              <Signup/>
            </Route>
            <Route path='/Genre'>
              <Genre/>
            </Route>
            
            <Route path="/">
            <Home />
          </Route>
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;


