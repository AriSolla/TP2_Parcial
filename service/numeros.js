import ModelFile from '../model/numerosFile.js'

class Service{
    constructor(){
        this.model = new ModelFile()
    }
    
    obtenerNumeros = async () => {
        const numeros = await this.model.obtenerNumeros()

        if(numeros.length != 0){
            const numerosObtenidos = numeros.map(num => num.numero);
            const objNumeros = {numeros: numerosObtenidos}
            return objNumeros
        }else{
            return {numeros: "No ingresados"}
        }
    }   

    obtenerPromedio = async () => {
        const numeros = await this.model.obtenerNumeros()

        if(numeros.length != 0){
            const numerosObtenidos = numeros.map(num => parseInt(num.numero))
            const sumaNumeros = numerosObtenidos.reduce((acumulador, num) => acumulador + num, 0);
            const promedio = sumaNumeros / numerosObtenidos.length
            return {promedio: promedio}
        }else{
            return {promedio: null, mensaje: "No hay numeros ingresados"}
        }
    }   

    obtenerMinMax = async () => {
        const numeros = await this.model.obtenerNumeros()

        if(numeros.length != 0){
        const numerosObtenidos = numeros.map(num => parseFloat(num.numero)); // Convierte los valores a números

        const minimo = Math.min(...numerosObtenidos);
        const maximo = Math.max(...numerosObtenidos);
        return {min:minimo, max:maximo}

        }else{
            return {min: null, max: null, mensaje: "No hay numeros ingresados"}
        }
    }  

    obtenerCantidad = async () => {
        const numeros = await this.model.obtenerNumeros()
        return {cantidad: numeros.length}
    }   
    
    
    guardarNumero = async numero => {
        const numeroGuardado = await this.model.guardarNumero(numero)
        return numeroGuardado
    }
}


export default Service