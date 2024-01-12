//clases Abstractas
function Fabrica(){}
Fabrica.prototype = {
    metodoInterno(){
        let producto = this.getProducto();
        return "El producto es: " + producto.obtenerProducto();
    }
}
function Producto(){}
Producto.prototype = {
    obtenerProducto(){ return this.getMensaje() }
}

//Clases concretas
function CreadorConcreto1(){
    let _producto = Producto1;
    this.getProducto = () => { return new _producto() };
}
function CreadorConcreto2(){
    let _producto = Producto2;
    this.getProducto = () => { return new _producto() };
}
function Producto1(){
    let _mensaje = "producto1";
    this.getMensaje = () => _mensaje;
}
function Producto2(){
    let _mensaje = "producto2";
    this.getMensaje = () => _mensaje;
}

//implementacion
CreadorConcreto1.prototype = Object.create(Fabrica.prototype);
CreadorConcreto2.prototype = Object.create(Fabrica.prototype);
CreadorConcreto1.prototype.constructor = CreadorConcreto1;
CreadorConcreto2.prototype.constructor = CreadorConcreto2;

Producto1.prototype = Object.create(Producto.prototype);
Producto2.prototype = Object.create(Producto.prototype);
Producto1.prototype.constructor = Producto1;
Producto2.prototype.constructor = Producto2;

//Cliente
function Client(){
    this.main = () => {
        console.log("Primer Creador");
        let creador1 = new CreadorConcreto1();
        // Object.freeze(creador1);
        this.codeClient(creador1);

        console.log("Segundo Creador");
        let creador2 = new CreadorConcreto2();
        // Object.freeze(creador2);
        this.codeClient(creador2);
    }
    this.codeClient = (creador) => {
        //Resultado Esperado
        let producto = creador.metodoInterno();
        console.log(producto);
        //Esto produce un resultado no esperado
        creador.metodoInterno = () => "resultado no esperado";
        producto = creador.metodoInterno();
        console.log(producto);
    }
}

new Client().main();