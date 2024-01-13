class Producto{
    operacion(){
        return "Producto";
    }
}
class Decorator{
    constructor(prod){
        this._producto = prod;
    }
    setComponente(prod){
        this._producto = prod;
    }
    operacion(){
        if (this._producto !== null) {
            return this._producto.operacion();
        }else{
            return "";
        }
    }
}
class Decorator1 extends Decorator{
    operacion(){
        return "ConcreteDecorator1("+ super.operacion()+")";
    }
}
class Decorator2 extends Decorator{
    operacion(){
        return "ConcreteDecorator2("+ super.operacion()+")";
    }
}

class Client{
    clientCode(componente){
        console.log("Result: " + componente.operacion());
    }
}

let cliente = new Client();
let simple = new Producto();
cliente.clientCode(simple);

let decorador1 = new Decorator1(simple);
let decorador2 = new Decorator2(decorador1);
cliente.clientCode(decorador2);