// to use our random person api
$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
  import axios from "axios";
  
  const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
  const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";
  
  // Export an object with a "search" method that searches the Giphy API for the passed query
  export default {
    search: function(query) {
      return axios.get(BASEURL + query + APIKEY);
    }
  };
  
  
  
  https://randomuser.me/api/?exc=login
  
  TO SPECIFY WAYS OF SORTING THE API
  https://randomuser.me/api/?inc=gender,name,nat
  gender
  name
  location
  email
  login
  registered
  dob
  phone
  cell
  id
  picture
  nat
  
  //USE OF PROPS-SEARCH FORM