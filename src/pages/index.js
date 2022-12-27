import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Posts from '../components/posts.js';

export default () => {

  return (
    <>
      <Layout>
        <Posts />
        <h1>This is the heading</h1>
      </Layout>

    </>
  )
} 