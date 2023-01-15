import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';
import Details from '../components/post-details';
import { useStaticQuery } from 'gatsby'

export default () => {

  const data = useStaticQuery(graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        id
        title
        category
      }
    }
  }
    `)

  return (

    const posts = data.allSanityPost.nodes;
    
    <Layout>
      <Posts />
      <h1>This is the heading</h1>
    </Layout >


  )
} 