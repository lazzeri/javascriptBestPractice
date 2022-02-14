//Must use functions:
Number.isNaN('1.2.3');

//User more:
reduce
filter
map
forEach
every //check if true for all
some //checks if true for some
concat //connects two arrays
find //to find all
findIndex

//Produce arrays from objects with:
Object.values();
Object.entries();
Object.keys();

//if(!a) then a = b
//Short is let x = a || b;

//Optional Chainig:
person && person.name && person.name.first

CAN BE EASIER:

person?.name?.first // undefined

Prints val if not null
function print(val) {
    return val ?? 'Missing'
}

Multiple variable assignment:
let [person, fruit, , day] = ['Monty', 'apple', 'reading', 'tomorrow'];



//Module structure:
myNameSpace = function(){
    var current = null;
    function init(){...}
    function change(){...}
    function verify(){...}
    return{
        init:init,
        set:change
    }
}();

//Funciton structure:
// good
if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
) {
    thing1();
}

//Evaluation:
//What is true what it false:
Objects evaluate to true
Undefined evaluates to false
Null evaluates to false
Booleans evaluate to the value of the boolean
Numbers evaluate to false if +0, -0, or NaN, otherwise true
Strings evaluate to false if an empty string '', otherwise true

//How to eval:
// good

// Bools
if (name) {
    // ...
}

// Strings
if (name !== '') {
    // ...
}

// Arrays
if (collection.length > 0) {
    // ...
}


//Objects

//Function in object:
const atom = {
    value: 1,

    addValue(value)
    {
        return atom.value + value;
    },
};

let lukeSkywalker = 'luke';
// good
const obj = {
    lukeSkywalker
};

//Create a frontend function for has property lookup:
console.log (Object.prototype.hasOwnProperty.call (object, key));

//Cool way of creating other objects:
const original = {a: 1, b: 2};
const copy = {...original, c: 3}; // copy => { a: 1, b: 2, c: 3 }
const {a, ...noA} = copy; // noA => { b: 2, c: 3 }


//Arrays

//Creating an array copy:
const itemsCopy = [...items];

//Iterable to array VERY NICE
const nodes = [...foo];

//Array like object to array:
const arr = Array.from (arrLike);

//Nice mapping function
[1, 2, 3].map ((x) =>
{
    const y = x + 1;
    return x * y;
});

//Destructuring
// best
function getFullName({firstName, lastName})
{
    return `${firstName} ${lastName}`;
}

//Array Deconstructing:
// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;

// good
function processInput(input)
{
    // then a miracle occurs
    return {left, right, top, bottom};
}

// the caller selects only the data they need
const {left, top} = processInput (input);

//FUNCTIONS
//NEVER MUTATE PARAMETER OR PARAMETER OBJECT
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo()
{
    // ...
};

//Arrow Functions:
// good
[1, 2, 3].map ((x) =>
{
    const y = x + 1;
    return x * y;
});

[1, 2, 3].map ((number, index) =>
{
    return {[index]: number}
});

//Iterators and Generators

//Dont mutate variables!!!


//Type casting:
//String
const totalScore = String(this.reviewScore);
//Val
const val = Number(inputValue);
//Boolean
const hasAge = !!age;

//jQuery:

Use $ signs for cached stuff:
    const hasAge = !!age;






