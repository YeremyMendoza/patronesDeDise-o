class FormaBase{
    _implementacion;
    constructor(implementacion){
        this._implementacion = implementacion;
    }
    get color(){
        return "Forma Base con color: " + this._implementacion.getColor();
    }
}
class FormaCircular extends FormaBase{
    get color(){
        return "Forma Circular con color: " + this._implementacion.getColor();
    }
}
class FormaRectangular extends FormaBase{
    get color(){
        return "Forma Rectangular con color: " + this._implementacion.getColor();
    }
}

class ColorBase{
    constructor(){
        this._color = "gris";
    }
    getColor(){
        return this._color;
    }
}
class ColorRojo extends ColorBase{
    constructor(){
        super();
        this._color = "Rojo";
    }
}
class ColorAzul extends ColorBase{
    constructor(){
        super();
        this._color = "Azul";
    }
}

let rojo = new ColorRojo();
let circulo = new FormaCircular(rojo);
console.log(circulo.color);

let azul = new ColorAzul();
let rectangulo = new FormaRectangular(azul);
console.log(rectangulo.color)