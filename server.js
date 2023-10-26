import express from "express";
import RouterNumeros from "./router/numeros.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(express.static('public'))


app.use('/api/numeros', new RouterNumeros().start())


const PORT = 8080
const server = app.listen(PORT, ()=>console.log(`Servidor express escuchando en http://localhost:${PORT}`))
server.on('error', error =>console.log(`error en servidor: ${error.message}`))