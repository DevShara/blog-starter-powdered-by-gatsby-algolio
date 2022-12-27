import { Link } from "gatsby";
import React from "react";

const Navbar = () => (
  <nav className="p-1 bg-white-800 shadow-md " >
    <div className="container mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-inherit m-3 font-bold text-3xl "><Link to="/"><a href="#">THE BLOG</a></Link></h1>
        <div className="border-t border-gray p-2">
          <ul class="flex">
            <li class="mr-6">

              <Link to=""><a class="text-gray-400  hover:text-black" href="#">Spotlight</a></Link>
            </li>
            <li class="mr-6">
              <Link to="/insight"><a class="text-gray-400  hover:text-black" href="#">Insights</a></Link>
            </li>
            <li class="mr-6">
              <a class="text-gray-400  hover:text-black" href="#">History & Culture</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400  hover:text-black" href="#">Identities</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400  hover:text-black" href="#">Travel</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav >
);

export default Navbar;