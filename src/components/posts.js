import React from "react";
import Post from "./post";

import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const Posts = ({ posts }) => {
  const searchClient = algoliasearch('Q591FZGUAK', 'a325d2a9ab8b1b107a912d1ed275f6ff');



  return (

    <div className="container px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">

        <InstantSearch searchClient={searchClient} indexName="test_BLOG">
          <SearchBox />
          <Hits hitComponent={Post} />

        </InstantSearch>



        {/* {posts.map(post => {
          return (<Post>{post}</Post>)
        })} */}

      </div>
    </div>

  )
}

export default Posts;