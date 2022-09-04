function whenButtonClicked() {
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    let result = 0;
    let result2 = "OK";

    if (!isNaN(parseFloat(value1)) && isFinite(value1) && !isNaN(parseFloat(value2)) && isFinite(value2)) {
        value1 = parseFloat(value1);
        value2 = parseFloat(value2);
        switch (document.getElementById("select").value) {
            case "1":
                result = value1 + value2;
                break;

            case "2":
                result = value1 - value2;
                break;

            case "3":
                result = value1 * value2;
                break;

            case "4":
                if (Math.abs(value2) >= Number.EPSILON) {
                    result = value1 / value2;
                }
                else {
                    result2 = "Ошибка. Деление на ноль";
                }
                break;

            default:
                break;
        }
    }

    else 
    {
        result2 = "Ошибка. Введены некорректные данные."
    }

    if (result2 === "OK") {
        document.getElementById("results").value += result + "\n";
    }
    else {
        document.getElementById("results").value += result2 + "\n";
    }

}


