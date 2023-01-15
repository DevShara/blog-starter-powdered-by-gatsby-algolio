import React from "react";
import Layout from "./layout";


const Details = ({ pageContext: { post } }) => {
  return (
    <Layout>

      <div className="container p-8 mx-auto ">
        <div className="shadow-lg overflow-hidden rounded-lg cursor-pointer text-center bg-white  p-3">
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>

    </Layout>
  )
}

// const Details = () => {
//   return (<h1>test</h1>)
// }



export default Details;