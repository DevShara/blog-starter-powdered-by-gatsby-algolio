import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';
import Details from '../components/post-details';
import { useStaticQuery, graphql } from 'gatsby';


export default () => {

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

    <Layout>

      <Posts posts={posts} />

    </Layout >


  )
} 