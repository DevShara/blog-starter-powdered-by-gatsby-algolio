import { Link } from "gatsby";
import React from "react";

const Post = ({ children }) => {

  return (
    <Link to={`post/${children.id}`} >
      <div className=" shadow overflow-hidden rounded-lg cursor-pointer">
        <img className="w-full" src={children.image} />
        <div className="content-wrap p-2">
          <header className="p-2">
            <h1 className="text-xl font-bold">{children.title}</h1>
            <p className="mt-2 text-md">{children.body}</p>
          </header>
          <footer className="p-2 text-xs flex gap-4 text-gray-400 border-t border-gray">
            <p className="font-semibold">{children.category}</p>
            <p>{new Date(children.date).toDateString()}</p>
          </footer>
        </div>
      </div>
    </Link >
  )
}

export default Post;