
var axios = require('axios');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');

function getArborescence(element){
  console.log("getArborescence in")
  directoryTree(document.getElementById('path').value, 1)
}

function directoryTree(p, depth){

    var arborescence = document.getElementById("arborescence")
    fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }
    files.map(function (file) {
        return path.join(p, file);
    }).forEach(function (file) {
        if (fs.lstatSync(file).isFile()) {
            file = file.replace(window.originalPath, '');
            arborescence.innerHTML += "<br>"
            for (var i = 0; i < depth; i++ ){
                arborescence.innerHTML += "&nbsp;&nbsp;"
            }
            arborescence.innerHTML += file;
        }
        else if ( fs.lstatSync(file).isDirectory()){
          // arborescence.innerHTML += "<br><br>" + file.replace(p, '')
          return directoryTree(file, depth + 2)
        }
    });
  });
}


// la methode Get
function getMethod()
{
    axios.get('http://127.0.0.1:3000').then(function (response)
    {
        document.getElementById("RestAPIResponse_get").innerHTML = JSON.stringify(response.data);
    })
}
// la methode Post
function postMethod()
{
  axios.post('http://127.0.0.1:3000', {
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
// la methode put
function putMethod()
{
    axios.put('http://127.0.0.1:3000').then(function (response)
    {
        document.getElementById("RestAPIResponse_put").innerHTML = JSON.stringify(response.data);
    })
}

// la methode put
function deleteMethod()
{
    axios.delete('http://127.0.0.1:3000').then(function (response)
    {
        document.getElementById("RestAPIResponse_delete").innerHTML = JSON.stringify(response.data);
    })
}
