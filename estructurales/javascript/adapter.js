function Adapter(){}
Adapter.OBJtoJSON = (data) => {
    return JSON.stringify(data);
}
Adapter.JSONtoOBJ = (data) => {
    return JSON.parse(data);
}

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let obj = Adapter.JSONtoOBJ(text);
console.log("De JSON a " + typeof obj);
console.log(obj);
let json = Adapter.OBJtoJSON(obj);
console.log("De Obj a " + typeof json);
console.log(json);