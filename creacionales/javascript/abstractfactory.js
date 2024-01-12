//clases abstractas
function FabricaAbstracta(){}
FabricaAbstracta.prototype = {
    crearMesa(){
        return new this._mesa();
    },
    crearSilla(){
        return new this._silla();
    }
}
function ProductoAbstracto(){}
ProductoAbstracto.prototype = {
    obtenerProducto(){
        return this._producto;
    }
}
//clases concretas
function FabricaConcretaModerna(){
    this._mesa = MesaModerna;
    this._silla = SillaModerna;
}
function FabricaConcretaClasica(){
    this._mesa = MesaClasica;
    this._silla = SillaClasica;
}
function MesaModerna(){
    this._producto = "Mesa moderna;"
}
function MesaClasica(){
    this._producto = "Mesa Clasica";
}
function SillaModerna(){
    this._producto = "Silla Moderna";
}
function SillaClasica(){
    this._producto = "Silla Clasica";
}

//implementacion
FabricaConcretaModerna.prototype = Object.create(FabricaAbstracta.prototype);
FabricaConcretaClasica.prototype = Object.create(FabricaAbstracta.prototype);
FabricaConcretaModerna.prototype.constructor = FabricaConcretaModerna;
FabricaConcretaClasica.prototype.constructor = FabricaConcretaClasica;
MesaModerna.prototype = Object.create(ProductoAbstracto.prototype);
MesaClasica.prototype = Object.create(ProductoAbstracto.prototype);
SillaModerna.prototype = Object.create(ProductoAbstracto.prototype);
SillaClasica.prototype = Object.create(ProductoAbstracto.prototype);
MesaModerna.prototype.constructor = MesaModerna;
MesaClasica.prototype.constructor = MesaClasica;
SillaModerna.prototype.constructor = SillaModerna;
SillaClasica.prototype.constructor = SillaClasica;

function Client(){
    this.main = () => {
        console.log("FABRICA MODERNA");
        this.clientCode(new FabricaConcretaModerna());

        console.log("FABRICA CLASICA");
        this.clientCode(new FabricaConcretaClasica());
    }
    this.clientCode = (fabrica) => {
        let mesa = fabrica.crearMesa();
        let silla = fabrica.crearSilla();
        console.log(mesa.obtenerProducto());
        console.log(silla.obtenerProducto());
    }
}
//SALIDA
/**
 * FABRICA MODERNA
 * Mesa moderna
 * silla moderna
 * FABRICA CLASICA
 * Mesa Clasica
 * Silla Clasica
 */


new Client().main();
