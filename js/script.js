function calculator() {
    const operator = prompt("Оберіть дію: '+', '-', '/', '*': ");
    const firstNum = +prompt("Введіть перше число: ");
    const secondNum = +prompt("Введіть друге число: ");

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
            let result = firstNum / secondNum;
            alert(`${firstNum} / ${secondNum} = ${result}`);
        } else {
            alert("Діліти на нуль не можна");
        }
    } else {
        alert("Невірна операція");
    }
}
 