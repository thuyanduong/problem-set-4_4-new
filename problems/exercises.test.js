const solutions = require('./exercises');

test('Question 1: makeCounter', () => {
  const countFromFour = solutions.makeCounter(4)
  countFromFour(); // 5
  countFromFour(); // 6
  countFromFour(); // 7
  expect(countFromFour()).toBe(8);
});

test('Question 2: Circle class was properly constructed', () => {
  let radius = 4;
  let cir = new solutions.Circle(radius, "red")
  expect(cir.radius).toBe(4);
  expect(cir.color).toBe("red");
  radius = 8;
  cir = new solutions.Circle(radius, "blue")
  expect(cir.radius).toBe(8);
  expect(cir.color).toBe("blue");
});

test('Question 2: Circle class methods work properly', () => {
  let radius = 4;
  let cir = new solutions.Circle(radius, "red")
  let circumference = Math.PI * radius * 2;
  let area = Math.PI * (radius ** 2);
  expect(cir.radius).toBe(4);
  expect(cir.color).toBe("red");
  expect(cir.drawCircle()).toBe("Drawing a red circle.");
  expect(cir.getCircumference()).toBe(circumference);
  expect(cir.getArea()).toEqual(area);
  expect(cir.changeColor("blue")).toBe("blue");
  expect(cir.drawCircle()).toEqual("Drawing a blue circle.");
});

test('Question 3: Teacher instance was properly constructed', () => {
  const maya = new solutions.Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D')
  expect(maya.name).toBe('Maya Bhattacharjee');
  expect(maya.school).toBe('The Marcy Lab School');
  expect(maya.grade).toBe('post-secondary');
  expect(maya.subject).toBe('L&D');
  expect(maya.students).toEqual([]);
  const ann = new solutions.Teacher('Ann Duong', 'Flatiron School', 'bootcamp', 'Coding')
  expect(ann.name).toBe('Ann Duong');
  expect(ann.school).toBe('Flatiron School');
  expect(ann.grade).toBe('bootcamp');
  expect(ann.subject).toBe('Coding');
  expect(ann.students).toEqual([]);
});

test('Question 3: Teacher instance methods work properly', () => {
  const maya = new solutions.Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D');
  expect(maya.students).toEqual([]);
  expect(maya.addStudent("Paul")).toBe(1);
  expect(maya.addStudent("Laisha")).toBe(2);
  expect(maya.students).toEqual(['Paul', 'Laisha']);
  expect(maya.changeSchools("Uncommon Schools")).toBe("Uncommon Schools");
  expect(maya.school).toEqual("Uncommon Schools");
});

test('Question 4: BankAccount class was properly constructed', () => {
  let ann = new solutions.BankAccount("Ann", "Duong")
  expect(ann.firstName).toBe("Ann");
  expect(ann.lastName).toBe("Duong");
  expect(ann._balance).toBe(0);
  let reuben = new solutions.BankAccount("Reuben", "Ogbonna")
  expect(reuben.firstName).toBe("Reuben");
  expect(reuben.lastName).toBe("Ogbonna");
  expect(reuben._balance).toBe(0);
});

test('Question 4: BankAccount class instance methods work', () => {
  let ann = new solutions.BankAccount("Ann", "Duong")
  expect(ann.showBalance()).toBe("Your balance is $0.00.")
  expect(ann.deposit(100)).toBe("Your balance is $100.00.")
  expect(ann.deposit(200.5)).toBe("Your balance is $300.50.")
  expect(ann.withdraw(300)).toBe("Your balance is $0.50.")
  expect(ann.withdraw(100)).toBe("You do not have enough funds.")
  expect(ann.showBalance()).toBe("Your balance is $0.50.")
});
