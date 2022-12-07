import { useState } from "react";
import Bookstore from "../Images/bookstore.jpg";
import {Link} from "react-router-dom";




function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
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
      <section class="h-full gradient-form bg-gray-200 md:h-screen">
        <div class="container py-12 px-6 h-full">
        <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div class="xl:w-10/12">
        <div class="block bg-white shadow-lg rounded-lg">
          <div class="lg:flex lg:flex-wrap g-0">
            <div class="lg:w-6/12 px-4 md:px-0">
              <div class="md:p-12 md:mx-6">
                <div class="text-center">
                <img
                    class="mx-auto w-48"
                    src={Bookstore}
                    alt="logo"
                  />
                     <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">Halisi Bookstore</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <p class="mb-4">Please login to your account</p>
                  <div class="mb-4">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"autoComplete="current-password"value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                    <div class="text-center pt-1 mb-12 pb-1">
                    <div class="flex space-x-2 justify-center">
                      <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                      leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
                       focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition
                        duration-150 ease-in-out">Log In</button>
                    </div>
                   
                    </div>
              
                    <div class="flex items-center justify-between pb-6">
                    <p class="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                        <Link to="signup" >Sign UP</Link>
                    
                      
                    </button>
                    </div>

                </form>
                </div>
                </div>
                <div class="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none" 
                // style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);"
                bg
                >
                  <div class="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 class="text-xl font-semibold mb-6">We are more than just a company</h4>
                    <p class="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    );
  }
export default Login;