
var axios = require('axios');
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
// const dirTree = require('directory-tree');

//retourne un objet JSON contenant les informations sur l'arborescence du chemin

function directoryTree(p, depth){

    var result_div = document.getElementById("directory3")
    fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }
    files.map(function (file) {
        return path.join(p, file);
    }).forEach(function (file) {
        if (fs.lstatSync(file).isFile()) {
            file = file.replace(window.originalPath, '');
            result_div.innerHTML += "<br>"
            for (var i = 0; i < depth; i++ ){
                result_div.innerHTML += "&nbsp;&nbsp;"
            }
            result_div.innerHTML += file;

            // console.log("|-- %s", file);
        }
        else if ( fs.lstatSync(file).isDirectory()){
        // result_div.innerHTML += "<br><br>" + file.replace(p, '')
            return directoryTree(file, depth + 2)
        }
    });
  });
}


// la methode Get
function getMethod()
{
    axios.get('http://127.0.0.1:80/api').then(function (response)
    {
        document.getElementById("RestAPIResponse").innerHTML = JSON.stringify(response.data);
    })
}
// la methode Post
function postMethod()
{
  axios.post('http://127.0.0.1:80/api', {
  name: 'Fred',
  password: 'Flintstone',
  profession: 'teacher'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
}
// la methode put
function putMethod()
{
    axios.put('http://127.0.0.1:80/api').then(function (response)
    {
        document.getElementById("RestAPIResponse").innerHTML = JSON.stringify(response.data);
    })
}

// la methode put
function deleteMethod()
{
    axios.delete('http://127.0.0.1:80/api').then(function (response)
    {
        document.getElementById("RestAPIResponse").innerHTML = JSON.stringify(response.data);
    })
}
