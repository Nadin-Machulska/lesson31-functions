
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
document.querySelector('.check').onclick = findPerfNumber;
function findPerfNumber(number){
number = document.querySelector('.random-number').value;
    let temp = 0;
    for (let i=1; i<=number/2; i++) {
         if(number % i === 0)
          {
            temp += i;
          }
     }
   
     if (temp === number && temp !== 0) {
       document.querySelector('.output').innerHTML = 'It is a perfect number';
        }  else{
            document.querySelector('.output').innerHTML = 'Sorry, it`s not a perfect number';
        }   
 } 



















// function findPerfNumber() {

//     let numberToCheck = document.querySelector('.random-number');
//     //знайти усі дільники числа
//     if (numberToCheck.isInteger(num) && num > 0) {
//         let allDividers = [];

//         for (let i = 0; i <= num; i++) {
//             if ((num % i) == 0) {
//                 allDividers.push(i);
//             }
//         }
//     }
//     //знайти сумму дільників     
//     function getSum(accumulator, currentValue) {
//         return accumulator + currentValue;
//     }

//     let sum = allDividers.reduce(getSum);
//     //перевірка чи є число ідеальним
//     if (numberToCheck == sum) {
//         document.querySelector('.output').innerHTML = 'Cool, this number is really perfect!'
//     } else (!(numberToCheck == sum)); {
//         document.querySelector('.output').innerHTML = 'Sorry, this one isn`t perfeckt, try again'
//     }

// }

//8 taks
document.querySelector('.finding').onclick = findPerfNumInDiap;
function findPerfNumInDiap() {
    const beginingOfSpectr = document.querySelector('.beggining__of-spectr').value;
    const endOfSpectr = document.querySelector('.end__of-spectr').value;
    let perfNumbers = [];

    while (beginingOfSpectr <= endOfSpectr) {

        function getPerfNumber() {
            return accumulator + currentValue;
        }

        let sum = allDividers.reduce(getSum);
        //перевірка чи є число ідеальним

        beginingOfSpectr++;

    }

}