import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Login from "../Pages/Login";
import BookList from "../Pages/BookList";
import NewBookForm from "../Pages/NewBookForm.js";

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
            <BookList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;