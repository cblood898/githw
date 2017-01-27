var x = 5;
var y = 6;
var z;
z= x + y;
y = z;
var hello = 'world'
document.getElementById('hello').innerHTML = hello;

function sayHello() {
    console.log('hello');
    console.log(z);
}

sayHello();