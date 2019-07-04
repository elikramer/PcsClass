for(let i = 0; i < 10; i++){
    window.app.increment();
}

console.log("Printing 'app' object after incremented 10 times.");

console.log(window.app.getNumber());