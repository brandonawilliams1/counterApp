let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");
let result = Number(output.innerText) + 1;

console.log(add, subract);

add.addEventListener("click", function () {
    // Every time the add button is pressed, this code will execute.
    let output = document.querySelector("#output");
    let result = output.innerText + 1;
  
    output.innerText = result;
   });