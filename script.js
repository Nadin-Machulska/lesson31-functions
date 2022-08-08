
//3 task
document.querySelector('.start-compare').onclick = comparingNumbers;

function comparingNumbers() {
    let firstNumber = document.querySelector('.first__number').value;
    let secondNumber = document.querySelector('.second__number').value;

    if (firstNumber < secondNumber) {
        document.querySelector('.comparing-result').innerHTML = '-1 ' + 'друге число більше ніж перше';
    } else if (firstNumber > secondNumber) {
        document.querySelector('.comparing-result').innerHTML = '+1 ' + 'перше число більше ніж друге';
        //при сравнении, где первое число больше выводится не 1, а -1
    } else if (firstNumber == secondNumber) {
        document.querySelector('.comparing-result').innerHTML = '0 ' + 'числа рівні';

    }
}

//5 task
document.querySelector('.start').onclick = unitNumbers;

function unitNumbers() {
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;
    let third = document.querySelector('.third').value;

    let unitNumber = first.toString() + second.toString() + third.toString();

    document.querySelector('.result__of-unit').innerHTML = unitNumber;
}


// 6 task
document.querySelector('.calc').onclick = calcArea;

function calcArea(areaOfRect) {
    let widthOfFig = document.querySelector('.number-one');
    let lengthOfFig = document.querySelector('.number-two');

    areaOfRect = (widthOfFig * lengthOfFig);
    document.querySelector('.output__area').innerHTML = areaOfRect;
}
/*как сделать чтобы при вводе только одного 
значения расчитывало площадь квадрата*/




//7 task 

/* 1) isInteger показывает в консоле что не работает
2) не работает change начать функцию как только значение будет введено в input
3) num в консоле пишет что не обьявлен
4) reduce не работает с пустым массивом?
*/

//document.querySelector('.random-number').change = findPerfNumber;
document.querySelector('.check').onclick = () => {
    // document.querySelector('.output').innerHTML = isPerfect(Number(input.value)) ? "It is a perfect number" : "It isn`t a perfect number"
    document.querySelector('.output').innerHTML = `It is${isPerfect(+input.value) ? '' : "n't"} a perfect number`


    // if (isPerfect(Number(input.value))){
    //     document.querySelector('.output').innerHTML = "It is a perfect number"
    // } else {
    //     document.querySelector('.output').innerHTML = "It isn`t a perfect number"
    // }
} ;

const input = document.querySelector('.custom-number')


function isPerfect(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }
    return temp === number
}

const start = document.querySelector('.beggining__of-spectr');
const end = document.querySelector('.end__of-spectr');

document.querySelector('.finding').onclick = () => {
    document.querySelector('.perf__numb').innerText = findPerfectNumbers(+start.value, +end.value).join(', ..., ')
}

function findPerfectNumbers(start, end) {
    const perfectNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isPerfect(i)) {
            perfectNumbers.push(i)
        }
    }

    return perfectNumbers
}


console.log(findPerfectNumbers(1, 1000));















