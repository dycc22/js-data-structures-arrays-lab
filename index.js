// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"] ;

function  destructivelyAppendDriver(name) {
    drivers.push(name);
    return drivers;

}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
    return drivers;
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
    return drivers;
}

function  destructivelyRemoveFirstDriver(){
    drivers.shift();
    return drivers;
}

function appendDriver(name){
    const arr1 = [...drivers, name];
    return arr1;
}

function prependDriver(name){
    const arr1 = [name, ...drivers];
    return arr1;
}

function removeLastDriver() {
    const arr1 = drivers.slice(0 , drivers.length - 1);
    return arr1;
}

function removeFirstDriver() {
    const arr1 = drivers.slice(1);
    return arr1;
}