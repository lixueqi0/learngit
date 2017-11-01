function Person(){
    this.name = 'xyz';
}
Person.prototype={
    constructor : Person,
    job : "student"
};
var xyz = new Person();

/*Object.defineProperties(xyz,"sex",{
    value : "female",
    enumerable : false
});*/

for(var n in xyz){
    console.log(xyz[n]);
    console.log("xyz." + n + "=" + xyz[n]);
}


function clone(xy){
    return Object.assign({},xy);
}
var clon = new clone(xyz);
console.log(clon);

for(var n in clon){
    console.log(clon[n]);
    console.log("clon." + n + "=" + clon[n]);
}

var one = {
    name: "小明",
    age : 21
};
var two = Object.assign({},one,{
    name:"小王",
    age:30
});
console.log(one);
console.log(two);
console.log(__dirname);
