import React from 'react'

function About() {
  return (
        <div className="mt-1 p-10 text-white bg-form_color w-full">
          <div>
               <a href="#" className="">Questions? Contact us.</a>
          </div>
          <div className="md:flex items-center justify-between mt-8">
               <div>
                    <a href="#">FAQ</a><br/>
                    <a href="#">Media Center</a><br/>
                    <a href="#">Ways to Watch</a><br/>
                    <a href="#">Cookie Preferences</a><br/>
                    <a href="#">Speed Test</a><br/>
               </div>
               <div>
                    <a href="#">Help Center</a><br/>
                    <a href="#">Investor Relations</a><br/>
                    <a href="#">Terms of Use</a><br/>
                    <a href="#">Corporate Information</a><br/>
                    <a href="#">Legal Notices</a><br/>
               </div>
               <div>
                    <a href="#">Account</a>
                    <a href="#">Jobs</a><br/>
                    <a href="#">Privacy</a><br/>
                    <a href="#">Contact Us</a><br/>
                    <a href="#">Only on Netflix</a><br/>
               </div>
          </div>

          <div className="mt-5 mb-10 bg-form_color w-32 py-1 px-2 rounded-md text-md">
               <span className="material-symbols-outlined align-middle bg-form_color text-white">
                    language
                    </span>
               <select name="language" id="" className="bg-form_color text-white">
                    <option value="english">English</option>
                    <option value="bangla">Bangla</option>
                    <option value="hindi">Hindi</option>
               </select>
          </div>
          <h3>copyright : BDflix Bangladesh</h3>
     </div>
  )
}

export default About