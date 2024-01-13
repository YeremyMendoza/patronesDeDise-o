function Singleton(){}
Singleton._singleton = null;
Singleton.getInstance = function(){
    if(this._singleton === null){
        this._singleton = new Singleton();
    }
    return this._singleton;
};

class Singleton{
    singleton = null;
    static getInstance(){
        if(this.singleton == null){
            this.singleton = new Singleton();
        }
        return this.singleton;
    }
}


let ins1 = Singleton.getInstance();
let ins2 = Singleton.getInstance();

if(ins1 === ins2){
    console.log("Son iguales: funciona");
}else{
    console.log("son distintos")
}