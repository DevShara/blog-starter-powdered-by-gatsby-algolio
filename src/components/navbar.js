import React from "react";

const Navbar = () => (
  <nav className="	p-2 bg-gray-800 " >
    <div className="container">
      <div className="flex flex-col items-center">
        <h1 className="text-white m-3 font-bold text-2xl ">THE BLOG</h1>
        <div className="">
          <ul class="flex">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav >
);

export default Navbar;