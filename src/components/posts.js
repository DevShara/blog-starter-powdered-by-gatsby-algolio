import React, { useEffect, useState } from "react";
import Post from "./post";



const Posts = () => {

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('api/fetch-posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data)

      })
  }, [])

  return (
    <div className="container px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

        {posts.map(post => {
          return (<Post>{post}</Post>)
        })}




      </div>
    </div>

  )
}

export default Posts;