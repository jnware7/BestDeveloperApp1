var axios = require('axios');

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=star:>1+language:'+language+
    '&sort=star&order=desc&type=Repositories');

      return axios.get(encodedURI)
        .then((response) => response.data.items)
  }
}
//encodeURI encodes uri from human readable to enoded version
