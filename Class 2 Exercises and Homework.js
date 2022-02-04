// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)

const bestFriend = {
  firstName: 'Duane',
  lastName: 'Sanders',
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
console.log('My best friend is ' + me.bestFriend.firstName);
console.log('My favorite food is ' + me['favorite food']);

// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X

//As I create this tic-tac-toe board, I wonder how hard it would be to create something like this
//https://www.mathsisfun.com/games/chess-ws.html
const ticTacToe = [[' ','O',' '],[' ','X','O'],[' ','X','X'],]
let row = '| ';

function printTicTacToeBoard() {
  console.log('_____________');

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        row = row + ticTacToe[i][j] + ' | ';
    }

    console.log(row);
    console.log('_____________');
    row = '| ';
  }
};

printTicTacToeBoard();

// 4. After the array is created, 'O' claims the top right square.
// Update that value.
console.log('Adding move...');
ticTacToe[0][2] = 'O';

// 5. Log the grid to the console.
printTicTacToeBoard();

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const email = 'foo@bar.baz'
//const regex = new RegExp('//[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+'); //not sure why this works in rubular but not javascript
const regex = new RegExp('[a-zA-Z]+@[a-zA-Z]+.[a-zA-Z]+');
console.log('Regex evaluation of email is ' + regex.test(email));

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = '1/21/2019';
console.log(typeof assignmentDate);
const convertedDate = new Date(assignmentDate);
console.log(typeof convertedDate);
console.log(convertedDate);

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.
const dueDate = new Date(convertedDate.setDate(convertedDate.getDate() + 7));
console.log(typeof dueDate);
console.log(dueDate);
let prettyDueDate = formatDate(dueDate);
console.log('FORMATTED = ' + prettyDueDate);

//This could probably be handled with a javascript format method
function formatDate(date) {
  var d = new Date(date);
  var month = '' + (d.getMonth());
  var day = '' + d.getDate();
  var year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

  return [year, month, day, ].join('-');
}

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

//need to figure out how to extend calls across multiple lines.
let newlyFormattedDate =  '<time datetime=\"' + prettyDueDate + '\">' + months[dueDate.getMonth()] + ' '+ dueDate.getDate() + ',' + dueDate.getFullYear()  + '</time>';

// 10. log this value using console.log
console.log(newlyFormattedDate)

