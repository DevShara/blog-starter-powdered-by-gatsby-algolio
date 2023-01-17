import React from "react";
import { Link } from 'gatsby';
import _ from 'lodash';

const Post = ({ children }) => {

  const truncate = _.truncate;

  return (
    <>
      <Link to={`/${children.path}`} >
        <div className=" shadow overflow-hidden rounded-lg cursor-pointer">
          <img className="w-full" src={children.imageUrl} />
          <div className="content-wrap p-2">
            <header className="p-2">
              <h1 className="text-xl font-bold">{children.title}</h1>
              <p className="mt-2 text-md">{
                truncate(children.body, {
                  'length': 200,
                  'separator': ' '
                })}
              </p>
            </header>
            <footer className="p-2 text-xs flex gap-4 text-gray-400 border-t border-gray">
              <p className="font-semibold">{children.category}</p>
              <p>{new Date(children.createdAt).toDateString()}</p>
            </footer>
          </div>
        </div>
      </Link >
    </>
  )
}

export default Post;