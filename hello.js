console.log('Hello world!');

var a =[];
for(var i=0;i<10;i++){
    a[i] = function(){
        console.log(i);
    }
}
a[5]();


function f(a, b, c){
    console.log(arguments.length);
    a = 100;
    console.log(arguments[0]);       // result: "100"
    arguments[0] = "qqyumidi";
    console.log(a);                  // result: "qqyumidi"
    console.log(b);                  // result: "undefined"
    c = 2012;
    console.log(arguments[2]);       // result: "undefined"
}
f(1, 2,3);

