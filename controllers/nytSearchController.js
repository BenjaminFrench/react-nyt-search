const axios = require('axios');

module.exports = {

  // Wrapper for nyt api. Behaves the same regular api endpoint but doesn't require an api-key param
  search: function (req, res) {
    axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
      params: {... req.query, ...{'api-key': process.env.APIKEY } }
    })
    .then(function (response) {
      res.json(response.data.response.docs);
    })
    .catch(function (error) {
      res.send(error);
    });
  }
};