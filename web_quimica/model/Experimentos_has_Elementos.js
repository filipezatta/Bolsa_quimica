const Elemento = require("./Elemento")
const Experimento = require("./Experimento")

module.exports = class Experimentos_has_Elementos { 
    constructor() {
        this.Elemento = new Elemento()
        this.Experimento = new Experimento()
    }
    
}