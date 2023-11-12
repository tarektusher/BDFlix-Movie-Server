import React from 'react'
import ('../App.css');
function Home() {
  return (
    <div className="w-full h-screen  bg-no-repeat bg-cover tp" 
          >
               <div classNameName="flex flex-col items-center gap-4 md:gap-7 ">
                    <div></div>
                    <div>
                         <p className="text-6xl text-white font-black text-center  pt-28">Unlimited movies, TV shows, and more</p>
                    </div>
                    <div>
                         <p className="text-3xl font-medium text-white text-center md:font-semibold mt-6" >Plans now start at Tk 500 BDT/month</p>
                    </div>
                    <div>
                         <p className="text-3xl font-medium text-white text-center md:font-semibold mt-4">Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className=" flex flex-col align-middle justify-center gap-2 md:flex md:flex-row md:justify-center mt-8">
                         <input type="text" className="rounded-lg w-96 px-3 py-3 text-black" placeholder="Email address"/>
                         <button className="bg-dark2 px-3 py-2 rounded-lg text-2xl w-52 ml-20 md:ml-0 hover:bg-red-800 ">
                              Get Started
                         </button>
                    </div>
               </div>
          </div>
  )
}

export default Home