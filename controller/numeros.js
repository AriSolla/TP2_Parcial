import Service from '../service/numeros.js'


class Controlador {
    constructor() {
        this.servicio = new Service()
    }

    obtenerNumeros = async (req,res) => {
        const numeros = await this.servicio.obtenerNumeros()
        res.json(numeros)
    }

    obtenerPromedio = async (req,res) => {
        const promedio = await this.servicio.obtenerPromedio()
        res.json(promedio)
    }

    obtenerMinMax = async (req,res) => {
        const minMax = await this.servicio.obtenerMinMax()
        res.json(minMax)
    }

    obtenerCantidad = async (req,res) => {
        const cantidad = await this.servicio.obtenerCantidad()
        res.json(cantidad)
    }

    guardarNumero = async (req,res) => {
        const numero = req.body
        const numeroGuardado = await this.servicio.guardarNumero(numero)
        res.json(numeroGuardado)
    }
}

export default Controlador
