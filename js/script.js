function calculator() {
    let operator = prompt("Оберіть дію: '+', '-', '/', '*': ");
    let firstNum = +prompt("Введіть перше число: ");
    let secondNum = +prompt("Введіть перше число: ");

    if (operator === "+") {
        let result = firstNum + secondNum;
        alert(`Результат обчислення: ${firstNum} + ${secondNum} = ${result}`);
    } else if (operator === "-"){
        let result = firstNum - secondNum;
        alert(`Результат обчислення: ${firstNum} - ${secondNum} = ${result}`);
    } else if (operator === "*"){
        let result = firstNum * secondNum;
        alert(`Результат обчислення: ${firstNum} * ${secondNum} = ${result}`);
    } else if (operator === "/"){
        if (secondNum !== 0) {
            let result = firstNum / nsecondNumum2;
            alert(`${firstNum} / ${secondNum} = ${result}`);
        } else {
            alert("Діліти на нуль не можна");
        }
    } else {
        alert("Невірна операція");
    }
}
 