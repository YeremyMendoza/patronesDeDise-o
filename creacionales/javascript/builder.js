function Producto(){
    let caracteristicas = new Set();
    this.añadirCaracteristica = (caracteristica) => {
        caracteristicas.add(caracteristica);
    }
    this.getCaracteristicas = () => {
        return [...caracteristicas];
    }
}
function Builder(){
    let producto = new Producto();
    this.caracteristicaA = () => {
        producto.añadirCaracteristica("car A");
    }
    this.caracteristicaB = () => {
        producto.añadirCaracteristica("car B");
    }
    this.caracteristicaC = () => {
        producto.añadirCaracteristica("car C");
    }
    this.caracteristicas = () => {
        let res = "(";
        producto.getCaracteristicas().map(car => {
            res += car + ",";
        });
        return res + ")";
    }
}
function Director(){
    let _builder;
    this.setBuilder = (builder) => {
        _builder = builder;
    }
    this.completo = () => {
        _builder.caracteristicaA();
        _builder.caracteristicaB();
        _builder.caracteristicaC();
    }
    this.minimo = () => {
        _builder.caracteristicaA();
        _builder.caracteristicaC();
    }
}

let builder = new Builder();
let director = new Director();
director.setBuilder(builder);

director.minimo();
console.log(builder.caracteristicas());
builder.caracteristicaB();
console.log(builder.caracteristicas());