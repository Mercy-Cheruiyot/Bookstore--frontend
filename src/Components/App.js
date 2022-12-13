// import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
    fetch("https://storebooks-production.up.railway.app/me").then((r) => {
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
        <Switch>
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
        </Switch>
        <Footer />
      </main>
    </>
  );
}

export default App;


