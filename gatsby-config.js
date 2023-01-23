
const blogQuery = `
 {
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
`;

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.allSanityPost.nodes,
    matchFields: ['path'],
  },

];



module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-algolia",
      options: {
        appId: 'Q591FZGUAK',
        apiKey: '0ca083635443b92142c303ce0682d2d0',
        indexName: 'test_BLOG',
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true, // default: false
        matchFields: ['path'], // Array<String> default: ['modified']
        concurrentQueries: false, // default: true
        skipIndexing: true, // default: false, useful for e.g. preview deploys or local development
      },

    },

    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'qgsx2p7p',
        dataset: 'production'
      }
    },
  ],
}

