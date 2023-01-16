import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';
import Details from '../components/post-details';
import { useStaticQuery, graphql } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        id
        title
        category
        imageUrl
        body
        createdAt
        
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