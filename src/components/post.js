import React from "react";
import { Link } from 'gatsby';
import _ from 'lodash';

const Post = ({ hit }) => {

  const truncate = _.truncate;

  return (
    <>
      <Link to={`/${hit.path}`} >
        <div className=" shadow overflow-hidden rounded-lg cursor-pointer">
          <img className="w-full" src={hit.imageUrl} />
          <div className="content-wrap p-2">
            <header className="p-2">
              <h1 className="text-xl font-bold">{hit.title}</h1>
              <p className="mt-2 text-md">{
                truncate(hit.body, {
                  'length': 200,
                  'separator': ' '
                })}
              </p>
            </header>
            <footer className="p-2 text-xs flex gap-4 text-gray-400 border-t border-gray">
              <p className="font-semibold">{hit.category}</p>
              <p>{new Date(hit.createdAt).toDateString()}</p>
            </footer>
          </div>
        </div>
      </Link >
    </>
  )
}

export default Post;