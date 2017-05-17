class GreeterGeneric<T> {
    greeting: T;
    constructor(message: T) {
        this.greeting = message;
    }
    greet() {
        return this.greeting;
    }
}

let greeterGeneric = new GreeterGeneric<string>("Hello, world");

let buttonGeneric = document.createElement('button');
buttonGeneric.textContent = "Say Hello";
buttonGeneric.onclick = function() {
    alert(greeterGeneric.greet());
}

document.body.appendChild(buttonGeneric);