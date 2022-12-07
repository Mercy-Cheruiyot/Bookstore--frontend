// import './App.css';
import Login from "./LoginForm";
// import SignUp from "./Signup";
// import Header from "./Header"
import Author from "../Pages/Author";
import Footer from "./Footer"
import NewBookForm from "../Pages/NewBookForm.js";
import NavBar from "./Navbar";
import Home from "../Pages/Home";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import BookList from "../Pages/BookList";


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
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewBookForm user={user} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/booklist">
            <BookList/>
          </Route>
          <Route path="/author">
            <Author/>
          </Route>
        </Switch>
        <Footer />
      </main>
    </>
  );
}

export default App;

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("/me").then((response) => {
//       if (response.ok) {
//         response.json().then((user) => setUser(user));
//       }
//     });
//   }, []);

//   function handleLogin(user) {
//     setUser(user);
//   }

//   function handleLogout() {
//     setUser(null);
//   }

//   return (
//     <div className="App">
//       <Header user={user} onLogout={handleLogout} />
//       <Navbar />
//       <Switch>

        
//         <Route exact path="/login">
//           <Login onLogin={handleLogin} />
//         </Route>
//         <Route exact path="/signup"> 
//          <SignUp onSignUp={handleLogin}/>
//         </Route>
//         <Route exact path="/home"> 
//          <Home />
//         </Route>
        
        
       
//       </Switch>
//     </div>
//   );
// }




// export default App;

