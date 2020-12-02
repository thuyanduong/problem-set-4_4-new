const solutions = require('./solutions');

test('Question 1: makeCounter', () => {
  const countFromFour = solutions.makeCounter(4)
  countFromFour(); // 5
  countFromFour(); // 6
  countFromFour(); // 7
  expect(countFromFour()).toBe(8);
});

test('Question 2: makeFriendList', () => {
  const reubsFriends = solutions.makeFriendList();
  expect(reubsFriends.addFriend('Maya')).toBe('Maya successfully added.');
  expect(reubsFriends.addFriend('Juan Pablo')).toBe('Juan Pablo successfully added.');
  expect(reubsFriends.addFriend('Bronthie')).toBe('Bronthie successfully added.');
  expect(reubsFriends.removeFriend('Bronthie')).toBe('Bronthie successfully removed.');
  expect(reubsFriends.displayFriends()).toEqual(['Maya', 'Juan Pablo']);
});

test('Question 3: Teacher', () => {
  const maya = new solutions.Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D')
  expect(maya.school).toBe('The Marcy Lab School');
  expect(maya.addStudent('Paul')).toBe(1);
  expect(maya.addStudent('Peter')).toBe(2);
  expect(maya.students).toEqual(['Paul', 'Peter']);
  expect(maya.changeSchools('Uncommon Schools')).toBe('Uncommon Schools');
  expect(maya.school).toBe('Uncommon Schools');
});

test('Question 4: Quadrilateral', () => {
  const quad = new solutions.Quadrilateral(3, 5, 9, 4);
  expect(quad.side1).toBe(3);
  expect(quad.getPerimeter()).toBe(21);
});

test('Question 5: Rectangle', () => {
  const rect = new solutions.Rectangle(30, 40);
  expect(rect.side1).toBe(30);
  expect(rect.side2).toBe(40);
  expect(rect.side3).toBe(30);
  expect(rect.side4).toBe(40);
  expect(rect.getPerimeter()).toBe(140);
  expect(rect.getArea()).toBe(1200);
});
