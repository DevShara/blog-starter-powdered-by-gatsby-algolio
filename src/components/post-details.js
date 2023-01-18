import React from "react";
import Layout from "./layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const Details = ({ pageContext: { post } }) => {
  console.log(post)
  return (
    <Layout>

      <div className="container p-8 md:px-28 ">
        <div className="shadow-lg flex flex-col overflow-hidden rounded-lg  bg-white  p-3">
          <h1 className="text-3xl font-bold m-3">{post.title}</h1>
          <div className="md:flex-0 m-3">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="rounded  w-full object-cover md:h-full  "
            />
          </div>
          <p className="m-3">{post.body}</p>
        </div>
      </div>

    </Layout>
  )
}

// const Details = () => {
//   return (<h1>test</h1>)
// }



export default Details;