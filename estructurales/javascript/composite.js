class Componente{
    constructor(){}
    Añadir(componente){
        throw new Error("NotImplementedException");
    }
    Remover(componente){
        throw new Error("NotImplementedException");
    }
    EsCompuesto(){
        return true;
    }
}
class Hoja extends Componente{
    Operacion(){
        return "Hoja";
    }
    EsCompuesto(){
        return false;
    }
}
class Compuesto extends Componente{
    #_hijo;
    constructor(){
        super();
        this.#_hijo = [];
    }
    Añadir(componente){
        this.#_hijo.push(componente);
    }
    Remover(componente){
        this.#_hijo.pop(componente);
    }
    Operacion(){
        let i = 0;
        let result = "Rama(";
        console.log(this.#_hijo);
        this.#_hijo.forEach(componente => {
            result += componente.Operacion();
            if(i != this.#_hijo.length - 1){
                result += "+";
            }
            i++;
        });
        return result + ")";
    }
}
class Client{
    ClientCode(hoja){
        console.log(`RESULTADO: ${hoja.Operacion()}`)
    }
    clientCode2(componente1, componente2){
        if(componente1.EsCompuesto()){
            componente1.Añadir(componente2);
        }
        console.log(`RESULTADO: ${componente1.Operacion()}`)
    }
}

let client = new Client();
let hoja = new Hoja();
console.log("Client: I get a simple component:");
client.ClientCode(hoja);

let arbol = new Compuesto();
let rama1 = new Compuesto();
rama1.Añadir(new Hoja());
rama1.Añadir(new Hoja());
let rama2 = new Compuesto();
rama2.Añadir(new Hoja());
arbol.Añadir(rama1);
arbol.Añadir(rama2);
console.log("Cliente: ahora tenemos un arbol compuesto")
client.ClientCode(arbol);

console.log("Cliente: No necesitamos verificar las clases de componentes cuando manejamos el arbol")
client.clientCode2(arbol, hoja);