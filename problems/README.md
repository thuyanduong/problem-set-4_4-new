# Problem Set 4-4
## Coding Challenge

1. Create a function, `makeCounter`, that takes a parameter, `startingValue` and returns a function. When called, the returned function should increment `startingValue` and then return the number.

```js
const countFromFive = makeCounter(5);
countFromFive(); // 6
countFromFive(); // 7 
countFromFive(); // 9 

const countFromOneHundred = makeCounter(100);
countFromOneHundred(); // 101
countFromOneHundred(); // 102
countFromOneHundred(); // 103
```

2. Create a `Circle` class. It should be initialized with two arguments which are the radius and the color of the circle. It should have four methods: 
* `drawCircle()` which returns the string `Drawing a <<color>> circle.`
* `getCircumference()` returns the circumference of the circle.
* `getArea()` returns the area of the circle.
* `changeColor()` updates the color property and returns the new color.

```javascript
const cir = new Circle(4, "red");
cir.drawCircle()         // "Drawing a red circle."
cir.getCircumference()   // 25.132741228718345
cir.getArea()           // 50.26548245743669

cir.changeColor("blue")  // "blue"
cir.drawCircle()         // "Drawing a blue circle."
```

3. Create a class, `Teacher`. Objects created with the `Teacher` function should have the following properties:
  * `name`
  * `school`
  * `grade`
  * `subject`
  * `students` (`students` should be initialized with the value of an empty array)

  `Teacher` objects should have the following two methods:
  * `addStudent()`, which takes a string student argument and adds it to the `Teacher` object's `students` property. This method should return the total number of students in the `students` array.
  * `changeSchools()`, which takes a string school argument and reassigns the object's `school`property to the passed argument. This method should return the name of the new school.
```javascript
const maya = new Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D');
maya.name;                // 'Maya Bhattacharjee'
maya.school;              // 'The Marcy Lab School'
maya.grade;               // 'post-secondary'
maya.subject;             // 'L&D'
maya.students;            // []

maya.addStudent('Paul');  // 1
maya.addStudent('Peter'); // 2
maya.students;            // ['Paul', 'Peter']

maya.changeSchools('Uncommon Schools'); // 'Uncommon Schools'
maya.school;              // 'Uncommon Schools'
```

4. Create a `BankAccount` class. It should take in two arguemnt (first and last name) and be initialized with three properties:
* `firstName` string
* `lastName` string
* `_balance` number which is initialized to 0. This is a private property. 

It should have three methods: 
* `showBalance()` return the string `Your new balance is $<<balance>>.` where the dollar amount has exactly two decimal places. 
* `deposit()` which takes in a number amount to add to the balance. It should return the string `Your new balance is $<<balance>>.` where the dollar amount has exactly two decimal places.
* `withdrawl()` which takes in a number to subtract from the balance. It should return the string `Your new balance is $<<balance>>.` where the dollar amount has exactly two decimal places. **However**, if the amount to withdrawl is more than the balance, it should not change the blanace and should return `You do not have enough funds.`
```js
  const ann = new BankAccount("Ann", "Duong");

  ann.showBalance()     // "Your balance is $0.00."
  ann.deposit(100)      // "Your balance is $100.00."
  ann.deposit(200.5)    // "Your balance is $300.50."
  ann.withdraw(300)     // "Your balance is $0.50."
  ann.withdraw(100)     // "You do not have enough funds."
  ann.showBalance()     // "Your balance is $0.50."
```