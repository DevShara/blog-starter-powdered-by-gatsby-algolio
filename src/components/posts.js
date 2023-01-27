import React from "react";
import Post from "./post";
import { connectHits } from 'react-instantsearch-dom';

const Posts = ({ hits }) => {
  console.log({ hits })

  return (

    <div className="container px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">

        {hits.map(hit => (
          <Post hit={hit} />
        ))}

      </div>
    </div>


  )
}

export const CustomHits = connectHits(Posts);

export default Posts;