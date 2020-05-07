import axios from "axios";
const BASEURL = " https://randomuser.me";
const APIKEY = "&apikey=trilogy";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
