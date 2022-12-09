// import { Link } from "react-router-dom";
import React from "react";
function About(){
    
return(
<>
<div className="house-list md:mb-32 mb-16">
    <h1 className="md:text-3xl text-2xl font-semibold my-2"> yy</h1>
    <h2 className="font-light md:text-2xl text-xl text-blue-800">Here's is a guide if you want to buy books
    </h2>
    <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6 md:space-y-0 space-y-8 md:my-8 my-4">
        <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
            <img src="https://static.rdc.moveaws.com/images/owners-sellers-ui/img-instant-offers-final.svg" alt="" />
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Read as many books as possible</h3>
                <p>We provide both soft copy and hardcopy</p>
            </div>
        </div>

        <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
            <img src="https://static.rdc.moveaws.com/images/owners-sellers-ui/img-myhome-final.svg" alt="" />
            <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Track your home value</h3>
            <p>See your RealEstimate℠ valuation information over time compared to homes in your area.</p>
        </div>
    </div>

    <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
        <img src="https://static.rdc.moveaws.com/images/owners-sellers-ui/img-agent-final.svg" alt="" />
        <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Pick the book right here</h3>
                    <p>Answer a few questions and get a suitable book for you.</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
      

 

);
}
export default About;