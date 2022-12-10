import { useState } from "react";

function Signup({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [fullname, setFullname] = useState("");
    const [email,    setEmail]    = useState("");
    const [image, setImage] =useState("");
    const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
    setIsLoading(true);
      fetch("https://storebooks-production.up.railway.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
         fullname,
          image: image
        }),
      })
        .then((r) => r.json())
        .then(onLogin);
    }
  
    return (
      <form onSubmit={handleSubmit}>
         <div className="mb-4">
        <label htmlFor="username">Username:</label>
        <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div className="mb-4">
        <label htmlFor="password">Password:</label>
        <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        </div>
        <div className="mb-4">
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        </div>
        <div className="mb-4">
        <label htmlFor="fullname">Full Name:</label>
        <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          id="fullname"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        </div>
        <div className="mb-4">
     <label htmlFor="email">Email:</label>
        <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="mb-4">
         
        <label htmlFor="imageUrl">Profile Image</label>
        <input
        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          type="text"
          id="imageUrl"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        </div>
           <div className="text-center pt-1 mb-12 pb-1">
        <div className="flex space-x-2 justify-center">
          <button type="submit"
           className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
          leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700
            focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition
            duration-150 ease-in-out" >{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>
        
       
        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
        </div>
      </form>
    );
  }
  export default Signup;