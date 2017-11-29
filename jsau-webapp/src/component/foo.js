
const axios = require("axios")
const url = "http://localhost:80/api"
export default{
  methods: {
    onSubmit(){
      var name = document.querySelector("input[name=name]").value
      var password = document.querySelector("input[name=password]").value
      var profession = document.querySelector("input[name=profession]").value
      axios
        .post(url, {name: name, password: password, profession : profession })
        .then(response => {
          console.log("users =")
          response.data.forEach(function(users){
          console.log(users.name + " " + users.password+ " " + users.profession)
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
