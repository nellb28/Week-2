// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const bestFriend = {
  firstName: "Duane",
  lastName: "Sanser",
  'favorite food' : 'Pizza',
};

const firstName = 'Nell';
const lastName = 'Bee';

const me = {
  firstName,
  lastName,
  'favorite food' : 'Pizza',
  bestFriend
};

// 2. console.log best friend's firstName and your favorite food
console.log("My best friend is " + me.bestFriend.firstName);
console.log("My favorite food is " + me["favorite food"]);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

//As I create this tic-tac-toe board, I wonder how hard it would be to create something like this
//https://www.mathsisfun.com/games/chess-ws.html
const ticTacToe = [[' ','O',' '],[' ','X','O'],[' ','X','X'],]
let row = '| ';

console.log('_____________');

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
      row = row + ticTacToe[i][j] + ' | ';
  }

  console.log(row);
  console.log('_____________');
  row = '| ';
}



// 4. After the array is created, 'O' claims the top right square.
// Update that value.


// 5. Log the grid to the console.


// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test


// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


// 10. log this value using console.log
