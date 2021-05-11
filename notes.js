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
    /*We pass our 'price' variable to multiplyByNineFifths, receive our 'price' variable multiplied by nine fifths and then we add 32 to it*/
}

getPrice(15);

/*AA method calling a function and using the value returned*/

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
    * * function IDENTIFIER(parameters){
    * *
    * * }
        1.1 You may pass parameters to a function - these parameters will be variables that will exist within the code block of the function.
      * * function IDENTIFIER (param1, param2, param3){
      * *
      * * }
            1.1.1 You may assign default values to parameters
                * * function IDENTIFIER(param1 = 69, param2 = 42, param3 = 309){
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
