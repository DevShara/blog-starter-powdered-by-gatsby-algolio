
const posts = require('./functions/posts.json');

exports.createPages = ({ actions: { createPage } }) => {
  // `getPokemonData` is a function that fetches our data


  // Create a page that lists all Pokémon.
  // createPage({
  //   path: `/`,
  //   component: require.resolve("./src/templates/all-pokemon.js"),
  //   context: { allPokemon },
  // })

  // Create a page for each Pokémon.
  posts.forEach(post => {
    createPage({
      path: `/post/${post.id}/`,
      component: require.resolve("./src/components/post-details.js"),
      context: { post },
    })
  })
}