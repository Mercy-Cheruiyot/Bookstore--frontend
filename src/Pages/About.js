// import { Link } from "react-router-dom";
import React from "react";
function About(){
    
return(
<>
<div className="house-list md:mb-32 mb-16">
   
    <h2 className="font-light md:text-2xl text-xl text-blue-800">Here's is a guide if you want to buy books
    </h2>
    <div className="grid sm:grid-cols-3 md:gap-12 sm:gap-6 md:space-y-0 space-y-8 md:my-8 my-4">
        <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzCotPXpxVuyJcipk1x03VFSSjme3M1GP0Yg&usqp=CAU" alt="" />
            <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Read as many books as possible</h3>
                <p>We provide both soft copy and hardcopy</p>
            </div>
        </div>

        <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
            <img src="https://media.istockphoto.com/id/1003202986/vector/man-reading-to-children.jpg?s=612x612&w=0&k=20&c=8YoFSRm_FXDsMrVFcN-Qef-oJTvlxlMMKWctnMa6s0I=" alt=""/>
            <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Track book  progres</h3>
            <p>Talk to us and we will help you buy the right book.</p>
        </div>
    </div>

    <div className="rounded-xl hover:bg-blue-100 border-blue-500 border-2 py-4 px-6 hover:scale-105 hover:translate-x-2  duration-500">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHalzEn2bLiQXrEA2vI3NolWBGh5agRdKG_A&usqp=CAU" alt="" />
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