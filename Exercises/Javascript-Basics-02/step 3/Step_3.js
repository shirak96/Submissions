var div = document.querySelector("div");
var input = document.querySelector("input");

input.onkeydown = function() {
    div.innerHTML =   input.value
}