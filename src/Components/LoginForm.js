import { useState } from "react";
import Bookstore from "../Images/bookstore.jpg";
import {Link} from "react-router-dom";




function LoginForm({ onLogin }) {
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
      <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
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
              
                    <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="submit"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                        <Link to="signup" >Sign UP</Link>
                    
                      
                    </button>
                    </div>

                </form>
                </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none bg-teal-500" >
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                    <p className="text-sm">
                  To create a reading culture, read at least one hour in the morning and one hour in the evening.Did you know that
                  a scholar has to be perseverant,enthusiastic , compassionate and have a teamwork? You can 
                   buy our books at affordable prices. We offer both soft-copy and a hardcopy.
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
export default LoginForm;