const express=require("express")
const RouterAPI=require("./server/router")
let cors=require("cors")

// esto es nuestra aplicacion -origen
const app=express()

//esta linea me sirve para quitar el problema de cors y permitir que se conecten dispositivos desde cualquier origen 

app.use(cors())

//esta linea me permitr entender los archivos json enviados desde la respuesta 
app.use(express.json())
//esta funcionando es nuestro API 
RouterAPI(app)

//.use sirve para servir en nuestro servidor y recibe n cantidad de parametros, el primero va ser nuestra ruta en la web y el segundo el middleware
// (logica cuando vaya )
app.use("/", (req,res)=>{

    //req=solicitud o solicitar 
    //res=respuesta o devolver

    res.send("<h1>funciona</h1>")


})
//levantando nuestro servidor en el puerto
//.listen escucha nuestro servidor  y como primer parametro recibe el puerto y como segundo la funcion a mostrar cuando nuestro servidor funcione 
app.listen(3100,()=>{
    console.log("aplicacion corriendo")
})
