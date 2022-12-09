import { useState } from "react";
import LoginForm from "../Components/LoginForm";
import Signup from "./Signup";


function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
   <section className="h-full gradient-form bg-gray-200 md:h-screen">
        <div className="container py-12 px-6 h-full">
         <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
         <div className="xl:w-10/12">
         <div className="block bg-white shadow-lg rounded-lg">
           <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />         
              
                    <p className="mb-0 mr-2">Don't have an account?
                    <button onClick={() => setShowLogin(false)}
                      type="submit"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light">
                      Sign UP</button>
                      </p>
        </>
      ) : (
        <>
          <Signup onLogin={onLogin} />
         
          <p>
            Already have an account?
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
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
     </>
  );
}

export default Login;