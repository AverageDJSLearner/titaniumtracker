/* Functions may call another functions inside their code blocks.

    getPrice() is called and 15 is passed as an argument.
    The code block inside of getPrice() calls multiplyByNineFifths() and passes 15 as an argument.
    multiplyByNineFifths() takes the argument of 15 for the number parameter.
    The code block inside of multiplyByNineFifths() function multiplies 15 by (9/5), which evaluates to 27.
    27 is returned back to the function call in getPrice().
    getPrice() continues to execute. It adds 32 to 27, which evaluates to 59.
    Finally, 59 is returned back to the function call getPrice(15).

*/

function multiplyByNineFifths(number) {
    return number * (9 / 5);
    /*multiplyByNineFifths receives our initial input (15), multiplies it by nine fifths and returns the result to the code block which called the function*/
}

function getPrice(price) {
    return multiplyByNineFifths(price) + 32;
    /*We pass our 'price' value to multiplyByNineFifths, returns our 'price' variable multiplied by nine fifths and then we add 32 to it*/
}

getPrice(15);

/*A method calling a function and using the value returned*/

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
        return day;
    } else {
        return !day;
    }
};

console.log(plantNeedsWater('Tuesday'));

/**
 * ! There are multiple ways of declaring functions:
    1. Through the usage of the function method
    * * function IDENTIFIER(param1, param2, param3){
    * *
    * * }
        1.1 You may pass parameters to a function - these parameters will be variables that will exist within the code block of the function.
      * * function IDENTIFIER (param1, param2, param3){
      * *
      * * }
            1.1.1 You may assign default values to parameters
                * * function IDENTIFIER(param1 = 69, param2 = 'sex', param3 = false){
                * *
                * * }
    2. Through the expression of a function - if we are declaring a function on this way, we can skip the function identifier, as our function could be identified with our variable identifier. This function would be known as an 'anonymous function'.
    * * const identifier = function(parameters){
    * *
    * * }
        2.1 All the properties of a normal function are inherited, even if declared on this way.
* !  All methods of declaring functions can be used with arrow functions (=>)
    1. Arrow functions is a shorter way to declare a function. When creating a function with the fat arrow, you first declare the parameters and then add an arrow that points to the functions' body
* * let identifier = (parameters) => {
* *
* * }
        1.1 The syntax of arrow functions may vary depending on the properties of your function.
            1.1.1 Functions that take only a single parameter do not need the parameter to be enclosed in parentheses - however, if a function takes zero or multiple parameters, parentheses are required.
        * ! No parameters anonymous arrow function
        * * const identifier = () => {
        * *
        * * }
        * ! Single Parameter anonymous arrow function
        * * const identifier = singleParameter => {
        * *
        * * }
        * ! Multiple Parameter anonymos arrow function
        * * const identifier = (parameter1, parameter2) => {
        * *
        * * }
            1.1.2 A arrow functions' body composed of a single-line block does not need curly braces. On this type of function, whatever that line evaluates to will be automatically returned to the function call.
        * ! Single-line code block arrow function
        * * const sumNumber = number => number + number;
        * ! Multi-line code block arrow function
        * * const sumNumber = number => {
        * *     const sum = number + number;
        * *     return sum;
        * * }
*/

/*  When calling a function, the computer will run the code within the functions' body and evalaute the result of calling the function. By default, the resulting value is undefined, and the resulting value is always returned to the function call.
*/


/* Arrays */

/**
 * ! Arrays info
        1. Arrays can store any data type -- values, integers, booleans; anything!
            1.1 Each element inside an array (an arrays' limitation is defined by its '[]' brackets) is considered an element of the array.
                1.1.1 Each one of these elements has a numbered position which is known as their index. Java-scripts arrays are zero-indexed, meaning that the first elements' index of an array is 0, and the second is 1.
                    1.1.1.1 Trying to adress an unexistent-index of any array will return undefined
        2. You may reassign a given element of an array by adressing its identifier and it's element, plus the new value you want it to hold.
        3. If an array is created through a let variable, you may reassign the entire array. If the array was created through a constant, you may reassign a certain index, but you will not be able to reassign the entire array.
        4. Arrays have built-in properties.
            4.1 One of them is the .length function, which returns the amount of elements that there is on the array.
            4.2 .push() is a built-in method for arrays that add new elements to the end of the array. arrayIdentifier.push(element1, element2) will result on arrayIdentifier having two new elements.
            4.3 .pop() is a built-in method for arrays that remove the last element of the array and returns the element to the call. arrayIdentifier.pop(); will return the element and remove it from the array.
     * *const array = ['Your Mom', 'Lmao', 'XD'];
     * *console.log(array.length);
     * ? Output is 3
       5. One may also create nested arrays. A nested array is an array within an array. To access nested array, we can use bracket notation with the index value
     * *const nestedArr = [[1], [2, 3]];
     * *console.log(nestedArr[1]);
     * ? Output is [2, 3]
     * *const nestedArr = [[1], [2, 3]];
     * *console.log(nestedArr[1][0]);
     * ? Output: 2
  * ! You may also access individual characters of a string using bracket notation and the index of the character you wanna adress. 
  * * const hello = 'Hello World!';
  * * console.log(hello[6]);
  * ? Output would be the character W
 * ! Type of arrays
        1. 'Array Literals'
            1.1
        * *['array'];
        2. Arrays pertinent to variables
            1.1
        * * let array = ['array'];
*/

/*
 ! Loops Info
            1. A loop is a tool that repeats until a specified condition - often known as stopping condition - is reached.
                x.1  To loop through an array, it is recommended to use the array's length property to check whatever we should stop iterating over it.
                x.2 Nested loops - nested loops are loops that run within the code block of another loop.
                x.3 One may break out of a loop block at any time using the 'break;' call
 ! Type of loops
            1. The 'for' loop includes an iterator variable that appears in all three expressions. TThe iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration.
                1.1 'for' loops contains three expresions separated from each other by ';' inside the parentheses:
                    1.1.1 an initialization starts the loop and can also be used to declare the iterator variable.
                    1.1.2 a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
                    1.1.3 an iteration statement is used to update the iterator variable on each loop.
                ?         for (let counter = 0; counter < 4; counter++) {
                ?           console.log(counter);
                ?         }
            2. The 'while' loop which allows for a single parameter: the stopping condition. This loop will run until the condition has been met.
            ?  let condition = 1;
            ?  while(condition <= 3) {
            ?   condition++;
            ?  }
            3. The 'do' loop allows to run a code block once, and if paired with 'while', you can run the code until a specific condition is met.
            ?  let string = '';
            ?  let i = 0;
            ?  do {
            ?   string = string + i;
            ?   i++
            ?  } while(i < 10)
            TODO So you may be wondering when to use a while loop! The syntax of a for loop is ideal when we know how many times the loop should run, but we don’t always know this in advance. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.
}

*/

/* Interesting code


const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// a

const bobsFollowers = ['boofy', '2nfg', 'pxblo', '15h'];
const tinasFollowers = ['2nfg', '15h', 'tiredalbert'];

const mutualFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++) {
    for(let j = 0; j < tinasFollowers.length; j++) {
        if(bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(j);
        }
    }
}
*/