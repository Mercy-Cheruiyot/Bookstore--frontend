import { useState } from "react";
import Bookstore from "../Images/bookstore.jpg";


function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("https://storebooks-production.up.railway.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username,password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        }
      });
    }
  
    return (
  <div className="md:p-12 md:mx-6">
    <div className="text-center">
    <img
        className="mx-auto w-48"
        src={Bookstore}
        alt="logo"
      />
          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">Halisi Bookstore</h4>
    </div>
    <form onSubmit={handleSubmit}>
      <p className="mb-4">Please login to your account</p>
      <div className="mb-4">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="text-center pt-1 mb-12 pb-1">
        <div className="flex space-x-2 justify-center">
          <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
          leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition
            duration-150 ease-in-out">Log In</button>
        </div>
        
        </div>
  
        

    </form>
    </div>
    );
  }
export default LoginForm;