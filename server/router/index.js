const express=require("express")
// express tiene un metodo que funciona como enrutador para enlazar
//rutas de nuestra aplicacion (localHost:3100/)
const router=express.Router()

// esta funcion define nustras rutas de la API que me permiten conectar mi parte visual (html)
// con mi servidor (node js)
function RouterAPI(app){
    app.use("/api/v1",router)

}

// vamos a exportar nuestra funcion para utilizarla en nuestro index.js  principal del server

module.exports=RouterAPI