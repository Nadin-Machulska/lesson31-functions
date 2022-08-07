
//3 task
document.querySelector('.start-compare').onclick = comparingNumbers;

function comparingNumbers (firstNumber, secondNumber){
    let firstNumber = document.querySelector('.first__number').value;
    let secondNumber = document.querySelector('.second__number').value;

    if (firstNumber < secondNumber){
        document.querySelector('.comparing-result').innerHTML = '-1';
    } else if (firstNumber > secondNumber){
        document.querySelector('.comparing-result').innerHTML = '1';
    } else if (firstNumber == secondNumber) {
        document.querySelector('.comparing-result').innerHTML = '0';

    }
}

//5 task
document.querySelector('.start').onclick = unitNumbers;

function unitNumbers (first, second, third){
    let first = document.querySelector('.first').value;
    let second = document.querySelector('.second').value;
    let third = document.querySelector('.third').value;

    let unitNumber = first.toString() + second.toString() + third.toString();

    document.querySelector('.result__of-unit').innerHTML = unitNumber;
}


// 6 task
document.querySelector('.calc').onclick = calcArea;

function calcArea (areaOfRect){
    const widthOfFig = document.querySelector('.number-one');
    const lengthOfFig = document.querySelector('.number-two');

    let areaOfRect = widthOfFig * lengthOfFig;
    document.querySelector('.output__area').innerHTML = areaOfRect;
}
/*как сделать чтобы при вводе только одного 
значения расчитывало площадь квадрата*/ 

//7 task

document.querySelector('.random-number').change = findPerfNumber;
function findPerfNumber(){

    let numberToCheck = document.querySelector('.random-number');
//знайти усі дільники числа
    if (numberToCheck.isInteger(num) && num > 0) {
        let allDividers = [];
        for (let i = 0; i <= num; i++) {
          if ((num % i) == 0) {
            allDividers.push(i);
          }
        }
      } 
//знайти сумму дільників     
    function getSum (accumulator, currentValue){
        return accumulator + currentValue;
    }

    let sum = allDividers.reduce(getSum);
//перевірка чи є число ідеальним
    if (numberToCheck == sum){
        document.querySelector('.output').innerHTML = 'Cool, this number is really perfeckt!'
    } else (!(numberToCheck == sum)){
        document.querySelector('.output').innerHTML = 'Sorry, this one isn`t perfeckt, try again'
    }

}

