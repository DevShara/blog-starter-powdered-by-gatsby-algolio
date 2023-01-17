import React from "react";
import Navbar from '../components/navbar';


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="bg-slate-50">
        {children}
      </main>
    </>
  )
}

export default Layout;