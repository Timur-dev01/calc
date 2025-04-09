let numFirst = Number(prompt("Введите первое число"))

if (!isNaN(numFirst)) {
  let operator = prompt("Введите оператор для данной операции (+ ; - ; * ; /)")  
  let numSecond = Number(prompt("Введите второе число"))
  if (!isNaN(numSecond)) {
    switch (operator) {
      case "+":
        alert(numFirst + numSecond )
        break;
    
      case "-":
        alert(numFirst - numSecond)
        break;
    
      case "*":
        alert(numFirst * numSecond)
        break;
    
      case "/":
        alert(numFirst / numSecond)
        break;
    
      default:
        alert("Вы неправильно заполнили поля, введите заново")
        break;
    }
    
  } else {
    alert("Вводите числа, а не буквы ")     
  }  
} else {
  alert("Вводите числа, а не буквы ")
}

