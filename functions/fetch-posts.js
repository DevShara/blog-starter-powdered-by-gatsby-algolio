const fetch = require('node-fetch');
const posts = require('./posts.json');



exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  }

} 