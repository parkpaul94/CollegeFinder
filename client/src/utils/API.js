import axios from "axios";

export default {

  getAll: function() {
    return axios.get("/api/college");
  },

  getAllwDetails: function() {
    return axios.get('/api/college/all')
  },

  getLogo: function(name) {
    return axios.get(`/api/logo/${name}`)
  }
};