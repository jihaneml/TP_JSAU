
const axios = require("axios")
const url = "http://localhost:3000"
export default{
  methods: {
    onSubmit(){
      axios
      .post(url, {
      name: 'Fred',
      password: 'Flintstone',
      profession: 'teacher'
    })
    .then(function (response) {
      document.getElementById("RestAPIResponse_post").innerHTML = JSON.stringify(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  }
}
