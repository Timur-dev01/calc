let numFirst = Number(prompt("Введите первое число"))
let operator = prompt("Введите оператор для данной операции")
let numSecond = Number(prompt("Введите второе число"))

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
