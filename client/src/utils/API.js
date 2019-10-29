import axios from "axios";

export default {
  // Gets all
  getClothes: function() {
    return axios.get("/api/clothes");
  },

  createUser: function(newUser) {
    return axios({
      method: "post",
      url: "/api/users",
      data: newUser
    });
  },
  getTops: function() {
    return axios.get("/api/clothes/tops");
  },
  getShoes: function() {
    return axios.get("/api/clothes/shoes");
  },
  getOuterwear: function() {
    return axios.get("/api/clothes/outerwear");
  },
  getBottoms: function() {
    return axios.get("/api/clothes/bottoms");
  },

  // Get one
  getTopById: function(id) {
    return axios.get(`/api/clothes/tops/${id}`);
  },
  getShoeById: function(id) {
    return axios.get(`/api/clothes/shoes/${id}`);
  },
  getOuterwearById: function(id) {
    return axios.get(`/api/clothes/outerwear/${id}`);
  },
  getBottomById: function(id) {
    return axios.get(`/api/clothes/bottoms/${id}`);
  },

  saveOutfit: function(userId, outfitObj) {
    return axios.post(`/api/outfits/${userId}`, outfitObj);
  },
  // loads outfits assocaited with user
  loadOutfits: function(userId) {
    return axios.get(`/api/outfits/user/${userId}`);
  },
  getOutfit: function(outfitId) {
    return axios.get(`/api/outfits/${outfitId}`);
  },
  deleteAllOutfits: function() {
    return axios.delete(`/api/outfits`);
  },

  deleteAllOutfitsFromUser: function(userId) {
    return axios.delete(`/api/outfits/${userId}`);
  }
};
