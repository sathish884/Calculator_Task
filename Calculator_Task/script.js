// Function to create and append an element with optional class and text content
function createElements(tagName, classes = [], textContents = '') {
    const element = document.createElement(tagName);
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    if (textContents !== '') {
        element.textContent = textContents;
    }
    return element;
}

// Function to handle addition
function add() {
    display.value += '+';
}

// Function to handle subtraction
function subtract() {
    display.value += '-';
}

// Function to handle multiplication
function multiply() {
    display.value += '*';
}

// Function to handle division
function divide() {
    display.value += '/';
}

// Function to clear the display
function clearDisplay() {
    display.value = '0';
}

// Function to evaluate the expression and display the result
function evaluateExpression() {
    display.value = eval(display.value);
}

// Create container element
let container = createElements('div', ['container-fluid', 'p-5']);

// create h1 tag
let h1Tag = createElements('h1', ['text-center', 'p-3'], 'Calculator');
h1Tag.setAttribute('id', 'title');
container.appendChild(h1Tag);

// create p tag
let paragraphTag = createElements('p', ['text-center']);
paragraphTag.setAttribute('id', 'description');
paragraphTag.textContent = 'Basic calculator functionalies';
container.appendChild(paragraphTag);

// Create table element
let table = createElements('table');
table.classList.add('calculator-table'); // Add class for styling
table.setAttribute('border', '1'); // Set border attribute

// Display screen
let display = createElements('input', ['display']);
display.setAttribute('type', 'text');
display.setAttribute('id', 'result');
display.value = '0';

let displayCell = createElements('td', ['display-cell']);
displayCell.setAttribute('colspan', '4');
displayCell.appendChild(display);

let firstRow = createElements('tr', ['first-row']);
firstRow.appendChild(displayCell);
table.appendChild(firstRow);

// create 1 buttons
let oneButton = createElements('button', ['btn']);
oneButton.textContent = '1';
oneButton.id = '1';
oneButton.addEventListener('click', function () {
    handleButtonClick(oneButton.textContent);
});

// create 2 buttons
let twoButton = createElements('button', ['btn']);
twoButton.textContent = '2';
twoButton.id = '2';
twoButton.addEventListener('click', function () {
    handleButtonClick(twoButton.textContent);
});

// create 3 buttons
let threeButton = createElements('button', ['btn']);
threeButton.textContent = '3';
threeButton.id = '3';
threeButton.addEventListener('click', function () {
    handleButtonClick(threeButton.textContent);
});

// create 4 buttons
let fourButton = createElements('button', ['btn']);
fourButton.textContent = '4';
fourButton.id = '4';
fourButton.addEventListener('click', function () {
    handleButtonClick(fourButton.textContent);
});

// create 5 buttons
let fiveButton = createElements('button', ['btn']);
fiveButton.textContent = '5';
fiveButton.id = '5';
fiveButton.addEventListener('click', function () {
    handleButtonClick(fiveButton.textContent);
});

// create 6 buttons
let sixButton = createElements('button', ['btn']);
sixButton.textContent = '6';
sixButton.id = '6';
sixButton.addEventListener('click', function () {
    handleButtonClick(sixButton.textContent);
});

// create 7 buttons
let sevenButton = createElements('button', ['btn']);
sevenButton.textContent = '7';
sevenButton.id = '7';
sevenButton.addEventListener('click', function () {
    handleButtonClick(sevenButton.textContent);
});

// create 8 buttons
let eightButton = createElements('button', ['btn']);
eightButton.textContent = '8';
eightButton.id = '8';
eightButton.addEventListener('click', function () {
    handleButtonClick(eightButton.textContent);
});

// create 9 buttons
let nineButton = createElements('button', ['btn']);
nineButton.textContent = '9';
nineButton.id = '9';
nineButton.addEventListener('click', function () {
    handleButtonClick(nineButton.textContent);
});

// create 0 buttons
let zeroButton = createElements('button', ['btn']);
zeroButton.textContent = '0';
zeroButton.id = '0';
zeroButton.addEventListener('click', function () {
    handleButtonClick(zeroButton.textContent);
});


// Create buttons for addition 
let addButton = createElements('button', ['btn']);
addButton.textContent = '+';
addButton.id = 'add';
addButton.addEventListener('click', function () {
    add();
});

// Create buttons for subtraction
let subtractButton = createElements('button', ['btn']);
subtractButton.textContent = '-';
subtractButton.id = 'subtract';
subtractButton.addEventListener('click', function () {
    subtract();
});

// Create buttons for multiplication
let multiplyButton = createElements('button', ['btn']);
multiplyButton.textContent = '*';
multiplyButton.id = 'multiply';
multiplyButton.addEventListener('click', function () {
    multiply();
});

// Create buttons for division
let divideButton = createElements('button', ['btn']);
divideButton.textContent = '/';
divideButton.id = 'divide';
divideButton.addEventListener('click', function () {
    divide();
});

// Create button for clear
let clearButton = createElements('button', ['btn']);
clearButton.textContent = 'C';
clearButton.id = 'clear';
clearButton.addEventListener('click', function () {
    clearDisplay();
});

// Create button for equal (=)
let equalButton = createElements('button', ['btn']);
equalButton.textContent = '=';
equalButton.id = 'equal';
equalButton.addEventListener('click', function () {
    evaluateExpression();
});

// Add the buttons to cells in the first (1) row
let buttonsRow1 = createElements('tr');
let oneCell = createElements('td');
let twoCell = createElements('td');
let threeCell = createElements('td');
let fourCell = createElements('td');

// Add the buttons to cells in the second (2) row
let buttonsRow2 = createElements('tr');
let fiveCell = createElements('td');
let sixCell = createElements('td');
let sevenCell = createElements('td');
let eightCell = createElements('td');

// Add the buttons to cells in the third (3) row
let buttonsRow3 = createElements('tr');
let nineCell = createElements('td');
let tenCell = createElements('td');
let elevenCell = createElements('td');
let tweleCell = createElements('td');

// Add the buttons to cells in the fourth (4) row
let buttonsRow4 = createElements('tr');
let thirteenCell = createElements('td');
let fourteenCell = createElements('td');
let fifteenCell = createElements('td');
let sixteenCell = createElements('td');

// 1-4 cell append the buttons
oneCell.appendChild(nineButton);
twoCell.appendChild(eightButton);
threeCell.appendChild(sevenButton);
fourCell.appendChild(clearButton);

// 5-8 cell append the buttons
fiveCell.appendChild(sixButton);
sixCell.appendChild(fiveButton);
sevenCell.appendChild(fourButton);
eightCell.appendChild(addButton);

// 9-12 cell append the buttons
nineCell.appendChild(threeButton);
tenCell.appendChild(twoButton);
elevenCell.appendChild(oneButton);
tweleCell.appendChild(subtractButton);

// 13-16 cell append the buttons
thirteenCell.appendChild(divideButton);
fourteenCell.appendChild(zeroButton);
fifteenCell.appendChild(equalButton);
sixteenCell.appendChild(multiplyButton);

// 1 row append to the cels
buttonsRow1.appendChild(oneCell);
buttonsRow1.appendChild(twoCell);
buttonsRow1.appendChild(threeCell);
buttonsRow1.appendChild(fourCell);

// 2 row append to the cels
buttonsRow2.appendChild(fiveCell);
buttonsRow2.appendChild(sixCell);
buttonsRow2.appendChild(sevenCell);
buttonsRow2.appendChild(eightCell);

// 3 row append to the cels
buttonsRow3.appendChild(nineCell);
buttonsRow3.appendChild(tenCell);
buttonsRow3.appendChild(elevenCell);
buttonsRow3.appendChild(tweleCell);

// 4 row append to the cels
buttonsRow4.appendChild(thirteenCell);
buttonsRow4.appendChild(fourteenCell);
buttonsRow4.appendChild(fifteenCell);
buttonsRow4.appendChild(sixteenCell);

// append the row to the table
table.appendChild(buttonsRow1);
table.appendChild(buttonsRow2);
table.appendChild(buttonsRow3);
table.appendChild(buttonsRow4);

container.appendChild(table);

document.body.appendChild(container);

// Function to handle button clicks
function handleButtonClick(value) {
 if (display.value === '0' && /[0-9]/.test(value)) {
        display.value = value;
    } else {
        display.value += value;
    }
}

// Event listener for keydown event
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!/[0-9]/.test(key)) {
        // Alert when a non-number key is pressed
        alert('Only numbers are allowed!');
    }
});