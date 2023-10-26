import fs from 'fs'

class ModelFile {
    constructor() {
        this.nombreArchivo = 'numeros.json'
    }

    leerArchivo = async nombre => {
        let numeros = []
        try {
            numeros = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch {}

        return numeros
    }

    escribirArchivo  = async (nombre, numeros) => {
        await fs.promises.writeFile(nombre, JSON.stringify(numeros,null,'\t'))
    }


    obtenerNumeros = async () => {    
        try {
            const numeros = await this.leerArchivo(this.nombreArchivo)
            return numeros
        }
        catch {
            return []
        }
    }

    guardarNumero = async numero => {
        try{
            const numeros = await this.leerArchivo(this.nombreArchivo)
            numeros.push(numero)
            await this.escribirArchivo(this.nombreArchivo, numeros)
            return numero
        }
        catch{
            throw new Error("Error en la escritura")
        }
    }


  


}

export default ModelFile