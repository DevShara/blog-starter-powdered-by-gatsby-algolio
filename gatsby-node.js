const path = require("path");

exports.createPages = ({ graphql, actions: { createPage } }) => {

  return graphql(`
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
    }`)
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      result.data.allSanityPost.nodes.forEach(post => {
        createPage({
          path: `/${post.path}`,
          component: require.resolve("./src/components/post-details.js"),
          context: { post },
        })
      })

    })
}