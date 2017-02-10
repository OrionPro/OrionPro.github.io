//Функция добавляет в аргументе(число) пробелы от последнего по три. В целом числе, дробную часть не трогает.
function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (parts[1] ? "." + parts[1] : "");
}

$(window).ready(function() {
    var num0 = document.getElementById('num0');
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var num3 = document.getElementById('num3');
    var num4 = document.getElementById('num4');
    var num5 = document.getElementById('num5');
    var num6 = document.getElementById('num6');
    var num7 = document.getElementById('num7');
    var num8 = document.getElementById('num8');
    var num9 = document.getElementById('num9');
    var numPlus = document.getElementById('num+');
    var numMinus = document.getElementById('numMinus');
    var numMultiply = document.getElementById('num*');
    var numDivide = document.getElementById('num/');
    var numEqually = document.getElementById('num_equally');
    var numClear = document.getElementById('numClear');
    var answer = document.getElementById('input');
    var numDot = document.getElementById('num.');
    var reset = document.getElementById('reset');
    var percent = document.getElementById('percent');
    var sqrt = document.getElementById('sqrt');
    var numArr = document.getElementById('numArr');
    var factorial = document.getElementById('factorial');
    var allHistoryExpression = document.createElement('div');
    var form = document.querySelector('.calc_wrap .row');

    // Функция нажатия на кнопки 0-9

    num0.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '0';
        else {
            calculator.answer.value += '0';
        }

    });
    num1.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '1';
        else {
            calculator.answer.value += '1';
        }

    });
    num2.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '2';
        else {
            calculator.answer.value += '2';
        }

    });
    num3.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '3';
        else {
            calculator.answer.value += '3';
        }

    });
    num4.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '4';
        else {
            calculator.answer.value += '4';
        }

    });
    num5.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '5';
        else {
            calculator.answer.value += '5';
        }

    });
    num6.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '6';
        else {
            calculator.answer.value += '6';
        }

    });
    num7.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '7';
        else {
            calculator.answer.value += '7';
        }

    });
    num8.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '8';
        else {
            calculator.answer.value += '8';
        }

    });
    num9.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '9';
        else {
            calculator.answer.value += ('9');
        }

    });

    // обработчик кнопки точка 

    numDot.addEventListener('click', function() {

        calculator.answer.value += '.';

    });

    // обработчик кнопки +

    numPlus.addEventListener('click', function() {


        calculator.answer.value += ' + ';


    });

    // // обработчик кнопки квадратный кроень

    sqrt.addEventListener('click', function() {

        answer.value = 'sqrt' + '(' + calculator.answer.value.match(/\d+/g) + ')';



    });

    //  в этом событии, при клике, мы с помощью регулярных выражений подставляем минус (-) ,
    // т.е. если regexp видит, что введено задуманное выражение он ставит с пробелами минус, 
    // если нет подходящего выражения, он ставит else ( ' -'). 
    // В частности в данном случае это важно для пересчёта процента, чтобы если число со знаком минус, чтобы он был возле числа без пробела

    numMinus.addEventListener('click', function() {
        if (calculator.answer.value == '0')
            calculator.answer.value = '-';
        else if (calculator.answer.value == calculator.answer.value.match(/\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\s[^\s]\s\s\-\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\.\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\.\d+\s[^\s]\s\d+\.\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\.\d+\s[^\s]\s\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\.\d+\s[^\s]\s\s\-\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\.\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\.\d+\s[^\s]\s\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\.\d+\s[^\s]\s\d+\.\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\.\d+\s[^\s]\s\s\-\d+\.\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\.\d+\s[^\s]\s\s\-\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\.\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\s[^\s]\s\s\-\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\s[^\s]\s\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\s[^\s]\s\d+\s[^\s]\s\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\d+\s[^\s]\s\d+\s[^\s]\s\s\-\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\s[^\s]\s\d+/g)) {
            calculator.answer.value += ' - ';
        } else if (calculator.answer.value == calculator.answer.value.match(/\-\d+\s[^\s]\s\d+\s[^\s]\s\d+/g)) {
            calculator.answer.value += ' - ';
        } else {
            calculator.answer.value += (' -');
        }


    });

    // обработчик кнопки умножение

    numMultiply.addEventListener('click', function() {

        calculator.answer.value += ' * ';

    });

    // обработчик кнопки деление

    numDivide.addEventListener('click', function() {

        calculator.answer.value += ' / ';

    });

    //  Сброс результатов

    numClear.addEventListener('click', function() {

        calculator.answer.value = '0';

    });

    // Удаляет последнюю введённую цифру

    numArr.addEventListener('click', function() {

        if (calculator.answer.value == calculator.answer.value.match(/\d/g))
            calculator.answer.value = '0';
        else if (calculator.answer.value == calculator.answer.value.match(/\-/g)) {
            calculator.answer.value = '0';
        } else {
            calculator.answer.value = calculator.answer.value.slice(0, -1);
        }



    });

    //  Клик по кнопке = выдаёт результат

    numEqually.addEventListener('click', function() {

        showHistoryExpression();

        $(".anim").animated("fadeIn"); // анимация истории результата
        var fun = mathparser.parse(calculator.answer.value);
        var result = fun({
            sin: Math.sin,
            cos: Math.cos,
            sqrt: Math.sqrt
        }, {});

        //функция определения целое число или дробное (если целое то выводим его, если дробное, то применяем метод toFixed)
        function isInteger(num) {
            if (num / Math.floor(num) == 1) {            	
                return num;
            } else if (num == 0.30000000000000004) {            	
                return num.toFixed(1);
            } else {
            	
                return num;
            }
        }

        calculator.answer.value = isInteger(result);


    });

    // вычисляем факториал

    factorial.addEventListener('click', function() {

        //  создаём пустой массив 

        var injectedarray = [];

       
        // куда положем введённое выражение

        injectedarray = calculator.answer.value;

        // функция reg exp, которая выбирает числа и операторы -+*/ в массив 

        function parse(expr) {
            var re = /(-?\d+(?:\.\d+)?)/;

            var result = expr.match(re);

            if (!result) return;
            result.shift();

            return result;
        }

        function factorial(n) {
            return n ? n * factorial(n - 1) : 1;
        }

        factorialEq = calculator.answer.value = factorial(calculator.answer.value);
        

        function showHistoryExpressionFactorial() {
            var allHistoryExpression = document.createElement('div');

            var introducedExpression = calculator.answer.value;
            var expression = {};
            
            var form = document.querySelector('.historyListWrap');
        	var first= form.firstChild;        	

            allHistoryExpression.setAttribute('class', 'historyList anim col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3');

            // Вставляем div с добавленными классами в html, и добавляем в него нужную разметку в которую выводим результаты  
            allHistoryExpression.innerHTML = '<p>' + 'Выражение : ' + '<span>' + parse(injectedarray) + '!' + '</span>' +
                '</p>' + '<p>' + ' Факториал ' + parse(injectedarray) + ' = ' + '<span>' + numberWithCommas(factorialEq) + '</span>' + '</p>';

            form.insertBefore(allHistoryExpression, first);

        }
        // вызываем функцию отображения истории

        showHistoryExpressionFactorial();
    });
    //  высчитывает процент с помощью регулярного выражения

    percent.addEventListener('click', function() {

        //  создаём пустой массив 

        var injectedarray = [];

        var form = document.querySelector('.historyListWrap');
        var first= form.firstChild;	
        // куда положем введённое выражение

        injectedarray = calculator.answer.value;

        // функция reg exp, которая выбирает числа и операторы -+*/ в массив 

        function parse(expr) {
            var re = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;

            var result = expr.match(re);

            if (!result) return;
            result.shift();

            return result;
        }

        // вычисляем процент введённого выражения

        calculator.answer.value = parse(calculator.answer.value)[0] / 100 *
            parse(calculator.answer.value)[2];

        //  в переменную кладём полученный процент от введённого числа
        var fun = mathparser.parse(calculator.answer.value);
        var result = fun({
            sin: Math.sin,
            cos: Math.cos,
            sqrt: Math.sqrt
        }, {});

        //функция определения целое число или дробное (если целое то выводим его, если дробное, то применяем метод toFixed)
        function isInteger(num) {
            if (num / Math.floor(num) == 1) {
            	
                return num;
            } else if (num == 0.30000000000000004) {
            	
                return num.toFixed(1);
            } else {
            	
                return num;
            }
        }
        var percentEq = calculator.answer.value = isInteger(result);

       

        // функция отображения истории выражений при вычислении процентов

        function showHistoryExpressionPercent() {

            var allHistoryExpression = document.createElement('div');

            var introducedExpression = calculator.answer.value;
            var expression = {};  

            var form = document.querySelector('.historyListWrap');
      		 var first= form.firstChild;

            expression.introducedExpression = injectedarray;

            allHistoryExpression.setAttribute('class', 'historyList anim col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3');

            // Вставляем div с добавленными классами в html, и добавляем в него нужную разметку в которую выводим результаты  
            allHistoryExpression.innerHTML = '<p>' + 'Выражение : ' + '<span>' + expression.introducedExpression + '%' + '</span>' +
                '</p>' + '<p>' + parse(injectedarray)[2] + ' % от ' + parse(injectedarray)[0].replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' = ' + '<span>' + numberWithCommas(percentEq) + '</span>' + '</p>';

            form.insertBefore(allHistoryExpression, first);

        }
        // вызов функции пересчёта процентов

        showHistoryExpressionPercent();

        // подставляем изначально введённые значения, но убираем последнее значение (к примеру a+b% вот мы оставляем первое число+оператор арифметический ), вместо b  подставляем высчитанный процент от числа (calculator.answer.value, уже подсчитанный процент)

        calculator.answer.value = parse(injectedarray)[0] + ' ' + parse(injectedarray)[1] + ' ' + calculator.answer.value;



    });

    // удаляет историю результатов

    reset.addEventListener('click', function() {

        var elem = document.querySelectorAll(".historyList");
        // цикл проверяет все элементы с классом historyList 
        for (var i = 0; i < elem.length; i++) {

            elem[i].remove(); // и потом удаляет их

        }

    });


    // на нажатие в форме кнопки ввод, выводим результат выражения

    answer.onkeypress = function(e) {
        e = e || event;

        if (e.keyCode == 13) {
            showHistoryExpression();

            $(".anim").animated("fadeIn"); // анимация истории результата

            // используем парсер а не eval

            var fun = mathparser.parse(calculator.answer.value);
            var result = fun({
                sin: Math.sin,
                cos: Math.cos,
                sqrt: Math.sqrt
            }, {});

            //функция определения целое число или дробное (если целое то выводим его, если дробное, то применяем метод toFixed)

            function isInteger(num) {
                if (num / Math.floor(num) == 1) {
            	
                return num;
            } else if (num == 0.30000000000000004) {
            	
                return num.toFixed(1);
            } else {
            	
                return num;
            }
            }

            calculator.answer.value = isInteger(result);

        }

    };

    // показывает результат выражений с суммой (история выражений)

    function showHistoryExpression() {
        var allHistoryExpression = document.createElement('div');

        // var historyEqually = eval(calculator.answer.value);

        var introducedExpression = calculator.answer.value;
        var expression = {};
        var form = document.querySelector('.historyListWrap');
        var first= form.firstChild;


        // используем парсер а не eval

        var fun = mathparser.parse(calculator.answer.value);
        var result = fun({
            sin: Math.sin,
            cos: Math.cos,
            sqrt: Math.sqrt
        }, {});

        //функция определения целое число или дробное (если целое то выводим его, если дробное, то применяем метод toFixed)
        function isInteger(num) {
            if (num / Math.floor(num) == 1) {
            	
                return num;
            } else if (num == 0.30000000000000004) {
            	
                return num.toFixed(1);
            } else {
            	
                return num;
            }
        }


        expression.introducedExpression = calculator.answer.value;

        calculator.answer.value = isInteger(result);

        

        allHistoryExpression.setAttribute('class', 'historyList anim col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3');


        allHistoryExpression.innerHTML = '<p>' + 'Выражение : ' + '<span>' + expression.introducedExpression + '</span>' + '</p>' + '<p>' + ' Ответ : ' + '<span>' + numberWithCommas(calculator.answer.value) + '</span>' + '</p>';

        form.insertBefore(allHistoryExpression, first);

    }


});
