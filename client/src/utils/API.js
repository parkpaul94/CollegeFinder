import axios from "axios";

export default {

  getAll: function() {
    return axios.get("/api/college");
  },

  getAllwDetails: function() {
    return axios.get('/api/college/all')
  },

  
};