var GreeterGeneric = (function () {
    function GreeterGeneric(message) {
        this.greeting = message;
    }
    GreeterGeneric.prototype.greet = function () {
        return this.greeting;
    };
    return GreeterGeneric;
}());
var greeterGeneric = new GreeterGeneric("Hello, world");
var buttonGeneric = document.createElement('button');
buttonGeneric.textContent = "Say Hello";
buttonGeneric.onclick = function () {
    alert(greeterGeneric.greet());
};
document.body.appendChild(buttonGeneric);
