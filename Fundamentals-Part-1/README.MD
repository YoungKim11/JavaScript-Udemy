# JavaScript Fundamentals Notes

## JavaScript Fundamentals Part 1

<br>

### Naming Variables notes

---

**Name Variables in JavaScript with _camelCasing_**

**& <- is a reserved JavaScript symbol, Dollar Sign $ and _ is allowed**

**_'name'_ will not work, _capitals_ are not allowed but will still work, you can still write it in all UPPERCASE**

<br>

### let, const, and var notes
---
**_typeof null_** is a legacy bug

```javascript
    typeof null;
```

Declaring an undefined variable and later on giving it a value is called a **_dynamic variable_**

```javascript
    let age;
    age = 31;
```

**_Mutating a value_** is when you give it a value and you change it later and give it a new value

```javascript
    let age = 31;
    age = 32;
```

**_const variables_** cannot be changed once it has been declared will throw error

```
    TypeError: Assignment to constant variable.
```

**by default try to use _const_ as much as possible**

**try to mutate variables as least as possible as it can produce bugs**

<br>

## Basic operators notes
---

```javascript
// 2 ** means two to the power of 3 = 2 * 2 * 2 //
    2 ** 3 
```

**_Assignment Operators_**
```javascript
    let x = 10 + 5; //15
    x += 10 // x + 10 = 25
    x *= 4 // x * 4 = 100 
    x -= 25 // x - 25 = 75
    x++ // x + 1
    x-- //x - 1
```

**_Comparison Operators_**
```javascript
    > greater then
    < lesser then
    >= greater or equal
    <= less or equal 
```

**_Operator Precedence_**

checkout MDN's Operator Precedence ->[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence]

**_IF ELSE Statements_**
Always use IF ELSE to make decisions in JavaScript.
IF ELSE always returns either true or false.

```javascript
if (check wether or not item is true) {
    //if item was truth 
} else {
    //item was not false
}
```

**_type conversion & type coercion_**
Type conversion is when you manually convert the type
Type coercion is when JavaScript converts it for us behind the scene

JavaScriot can only convert into 3 types: Number, String, and Boolean.

**_Truthy and Falsy Values_**
```javascript
5 falsy values: 
    0, '', undefined, null, NaN.
    console.log(Boolean(0)); //false
    console.log(Boolean('Jonas')); //true
    console.log(Boolean({})); //true
    console.log(Boolean(undefined)); //false
    console.log(Boolean('')); //false
```
**_Equality Operators == vs ===_**
Strictly Equal "===" does not perform type coercien
```javascript
    18 === "18" 
    false
```
Losely Equality Operator "==" does perform type coercien
```javascript
    18 == "18" //performs type coercien
    true
```
try not to use Losely "==" Operator.

**_Logical Operators_**

when using the logical AND '&&' operator if any of the boolean values are false, the result will be false.
```javascript
    true && true && true = true
    true && false && true = false
    false && true && true = false
    true && true && false = false
```
when using the logical OR '||' operator if any of the boolean values are true, the result will be true.
```javascript
    true ||true ||true = true
    true ||false || true = true
    false|| true || true = true
    true ||true ||false = true
    false || false || false = false
```
when using the logical NOT is '!' operator it switched the boolean value from _true_ to _false_ and _vice versa_
```javascript
    !true = false
    !false = true
```

**_Switch Statement_**
Similar to if statements but easier to write. 
In switch statements if you forget to add a **break** the code will continue to display all of the data until it hits a break.
At the end of the switch statement you'll find **default** statement, this is similar to the **else** statement in a **if else** statement.
```javascript
    const day = ' ' //enter day of the week
    switch (day) {
        case `monday`: // Monday 
            console.log(`Plan Week`); // console.log what to do during the week
            break; //break to stop the switch statement and display the console.log
        case `tuesday`: // Tuesday
        case `wednesday`: // Wednesday
        case `thursday`: //  Thursday
        case `friday`: // Friday
            console.log(`Study`); //console.log what to do for Tuesday thru Thursday
            break; // break to stop the switch statement and display what to do on Tuesday thru Thursday
        case `saturday`: //Saturday
            console.log(`Relax`) //console.log what to do on Saturdays
            break; // break to stop the switch statementn on Saturday display console.og
        case `sunday`: //Sunday
            console.log(`Clean`) //console.log what to do on Sunday
            break; // break to stop the switch statementn on Sunday display "clean"
        default: // if an incorrect day or no date have been entered
            console.log(`invalid day`) //invalid day or no day entered
    }
```
**_Statements and Expressions_**
Statements are like sentences i.e: Switch Statements and IF ELSE statements, and expressions always return value
```javascript
    1 + 2 + 3       //
    true || false   // Expressions
    `something`     //

    if () {         //
    }else{          //
                    //  
    }               //  Statements
    switch:         //  
        break;      //  
    default:        //  

```
**_The Conditional Operator(Ternary) Operator_**
Ternary operators can be used inside of a ternary operator.
ternary operators returns an expression.
```javascript 
    const age = 20
    console.log(`I can drink  ${age >= 21 ? `wine` : `water`}`);
    const drink = age <=  18? `wine` : `h20`;
    console.log(drink) 

```







