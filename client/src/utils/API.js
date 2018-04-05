import axios from "axios";

export default {
  // Gets all saved artiles
  getArticles: function() {
    return axios.get("/api/articles");
  },
};
