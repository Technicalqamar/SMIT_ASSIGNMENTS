var expression = document.getElementById("expression");
var result = document.getElementById("result");

function press(value) {

  expression.value += value; 

  }
function clearAll(){
    expression.value = expression.value = '';
    result.value = result.value = '';
   return;
  }


function del(){
  expression.value = expression.value.slice(0, -1);
   


}


function calculate(){
    result.value = eval(expression.value);

  
}

