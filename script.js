let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");


console.log(add, subract);

add.addEventListener("click", function () {
    // Every time the add button is pressed, this code will execute.
    let output = document.querySelector("#output");
    let result = Number(output.innerText) + 1;

    if (result > 10) {
        result = 0;
      }
  
    output.innerText = result;
   });

   subract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});