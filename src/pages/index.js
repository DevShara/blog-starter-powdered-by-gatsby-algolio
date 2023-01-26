import React from 'react';
import Layout from '../components/layout';
import Posts from '../components/posts';
import Details from '../components/post-details';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

export default () => {

  const searchClient = algoliasearch('Q591FZGUAK', 'a325d2a9ab8b1b107a912d1ed275f6ff');



  return (

    <Layout>

      <InstantSearch searchClient={searchClient} indexName="test_BLOG">
        <SearchBox />

        <Hits hitComponent={Posts} />


      </InstantSearch>

      {/* <Posts posts={posts} /> */}

    </Layout >

  )
} 