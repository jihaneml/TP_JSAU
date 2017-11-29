const axios = require("axios")
  const url = "http://localhost:80/api"
  export default{
    mounted(){
      axios
        .get(url)
        .then(response => {
          var div = document.querySelector(".user")
          var users_html = ""
          response.data.forEach(function(user){
            users_html += "<div>" + user.name + " " + user.password + " " +user.profession + "</div>"
          })
          div.innerHTML = users_html
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
