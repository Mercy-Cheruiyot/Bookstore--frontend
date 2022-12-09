// import './App.css';
import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Signup from "../Pages/Signup";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Profile from './Profile';
import Author from "../Pages/Author";
import Home from "../Pages/Home";
import BookList from "../Pages/GenresFilter";
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

  if (!user) return <LoginForm onLogin={setUser} />;

  return (
    <>
      <NavBar
 user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/BookList">
            <BookList user={user}/>
          </Route>
          
            <Route exact path="/Author">
              <Author/>
              </Route>
            <Route exact path="/Profile" element ={<Profile/>}/>
          
          <Route path='/About'>
            <About/>
            </Route>
            <Route path='/Signup'>
              <Signup/>
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


