const axios = require("axios")
  const url = "http://localhost:3000"
  export default{
    //  mounted(){
    //    axios
    //    .get(url).then(function (response){
    //              document.getElementById("RestAPIResponse_get").innerHTML = JSON.stringify(response.data);
    //          })
    //      .catch(error => {
    //        console.log(error);
    //      });
    //  }
    methods: {
      onSubmitGet(){
        axios
        .get(url).then(function (response){
                     document.getElementById("RestAPIResponse_get").innerHTML = JSON.stringify(response.data);
                 })
             .catch(error => {
               console.log(error);
             });
    }
    }
   }

    // getMethod()
    // {
    //
    // };
