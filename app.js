const { response } = require("express");
const express = require("express");
const app = express();
const path = require('path')

app.use(express.static("public"));//al acceder a public express ya tiene acceso a los archivos dentro de esa carpeta como las imagenes y el css, no hace falta poner la parte /public delante de cada path.


//MUY IMPORTANTE!!!
app.all("/views/home", routeHandlerHome)//peticion(donde, desde el navegador, me piden algo)/este path es lo que ve el usuario en la barra de navegacion.

function routeHandlerHome(request, response) {
    response.sendFile(path.join(__dirname, "/views/home.html"))//esto es lo que devuelvo, le indico a express donde esta el archivo en el servidor. (join() convierte la ruta en un string).
}


app.all("/views/works", routeHandlerWorks)
function routeHandlerWorks(request, response) {
    response.sendFile(path.join(__dirname, "/views/works.html"))
}

app.all("/views/about", routeHandlerAbout)
function routeHandlerAbout(request, response) {
    response.sendFile(path.join(__dirname, "/views/about.html"))
}

app.all("/views/photo-gallery", routeHandlerGallery)
function routeHandlerGallery(request, response) {
    response.sendFile(path.join(__dirname, "/views/photo-gallery.html"))
}


app.listen(3002);
