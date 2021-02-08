import React, { Component } from "react";
<script
  src="https://code.jquery.com/jquery-2.2.4.js"
  integrity="sha256-iT6Q9iMJYuQiMWNd9lDyBUStIq/8PuOW33aOqmvFpqI="
  crossorigin="anonymous"></script>


  $.ajax({
    url: 'https://randomuser.me/api/ results=4000/exc=login/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });
 
//   openssl dgst -sha384 -binary FILENAME.js | openssl base64 -A
  https://randomuser.me/api/?exc=login
  
//   TO SPECIFY WAYS OF SORTING THE API
//   https://randomuser.me/api/?inc=gender,name,nat
//   gender
//   name
//   location
//   email
//   login
//   registered
//   dob
//   phone
//   cell
//   id
//   picture
//   nat
  
