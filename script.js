function whenButtonClicked(){
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    value1 = parseFloat(value1);
    value2 = parseFloat(value2);

    let result = 0;
    let result2 = "OK";

    if (!isNaN(value1) && !isNaN(value2)){
        switch (document.getElementById("select").value){
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
                if(value2 != 0){
                    result = value1 / value2;
                }
                else{
                    result2 = "Ошибка. Деление на ноль";
                }
                break;

            default:
                break;
        }
    }
    else{
            if (isNaN(value1) && isNaN(value2)){
                result2 = "Ошибка. Оба значения не являются числом";
            }
            else if (isNaN(value1)){
                result2 = "Ошибка. Первое значение не является числом";
            }
            else {
                result2 = "Ошибка. Второе значения не являются числом";
            }
        }
        if (result2 ==="OK"){
            document.getElementById("results").value += result + "\n";
        }
        else{
            document.getElementById("results").value += result2 + "\n";
        }

    }

 
