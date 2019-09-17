
(function() {
  "use strict";

  //получения элементов
  var el = function(element) {
    if (element.charAt(0) === "#") {
      return document.querySelector(element);
    }

    return document.querySelectorAll(element); 
  };

  //переменные
  var viewer = el("#viewer"),
    equals = el("#equals"), 
    nums = el(".num"),
    ops = el(".ops"), 
    theNum = "", // текущуее число
    oldNum = "", // первое число
    resultNum, 
    operator; 
    

  //когда нажали на число. Отримати число
  var setNum = function() {
    if (resultNum) { // якщо результат був відображений. скинути його
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else { 
      theNum += this.getAttribute("data-num");
    }

    viewer.innerHTML = theNum; // відобразити число
  };

  //коли вибраний оператор
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", "");
  };

  //коли натиснуто дорівнює. рахувати результат
  var displayNum = function() {

    //перетворення строки вводу в число
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // виконати операцію
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "multiply":
        resultNum = oldNum * theNum;
        break;

      case "divide":
        resultNum = oldNum / theNum;
        break;

        // якщо натиснутий оператор дорівнює, без оператора
      default:
        resultNum = theNum;
    }

    // If NaN or Infinity повертає
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) { // якщо результат не число; двойне нажаття на оператор
        resultNum = "Неправильний ввод";
      } else { 
        alert('деление на ноль');
        location.reload();
      }
    }


    // показати результат
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Теперь сбросьте oldNum и сохраните результат
    oldNum = 0;
    theNum = resultNum;

    if(resultNum == 0){
      location.reload();
    } else{
      viewer.innerHTML = resultNum;
    }

  };

  //показ результату
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

 /*реакция на клик*/

  // Добавить событие клика к числам
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  //Добавить событие клика к оператора
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  //Добавить событие клика в знак равенства
  equals.onclick = displayNum;


  // Добавить событие клика, чтобы очистить кнопку
  el("#clear").onclick = clearAll;

}());