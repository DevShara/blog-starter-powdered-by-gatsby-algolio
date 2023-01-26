import React from "react";
import Post from "./post";
import { useStaticQuery, graphql } from 'gatsby';

const Posts = (hits) => {
  console.log({ hits })

  const data = useStaticQuery(graphql`
  query GetAllPosts {
    allSanityPost {
      nodes {
        id
        title
        category
        imageUrl
        body
        createdAt
        path
        
      }
    }
  }
    `)

  const posts = data.allSanityPost.nodes;



  return (





    <div className="container px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">

        {/* {posts.map(hit => {
          return (
            <Post hit={hit} />
          )
        })} */}

      </div>
    </div>


  )
}

export default Posts;