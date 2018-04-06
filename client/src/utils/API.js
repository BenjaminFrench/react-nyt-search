import axios from "axios";

export default {
  // Gets all saved artiles
  getArticles: function() {
    return axios.get("/api/articles");
  },

  searchArticles: function(topic, startYear, endYear) {
    return axios.get('/api/nytsearch', {
      params: { q : topic, begin_date: startYear, end_date: endYear }
    })
  }
};
