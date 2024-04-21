// Function to create and append an element with optional class and text content
function createElements(tagName, classes = [], textContents = '') {
    // Create a new element using the provided tag name
    const element = document.createElement(tagName);
    
    // Add the provided classes to the element, if any
    if (classes.length > 0) {
        element.classList.add(...classes);
    }
    
    // Set the text content of the element, if provided
    if (textContents !== '') {
        element.textContent = textContents;
    }
    
    // Return the created element
    return element;
}


// Create a container div element with classes 'container-fluid' and 'p-5'
let container = createElements('div', ['container-fluid', 'p-5']);

// Create a table element
let table = createElements('table');
// Add a class 'calculator-table' to the table for styling
table.classList.add('calculator-table');
// Set border attribute of the table to '1'
table.setAttribute('border', '1');


// Create a display input element with class 'display' and type 'text', and set its initial value to '0'
let display = createElements('input', ['display']);
display.setAttribute('type', 'text');
display.value = '0';

// Create a table cell (<td>) to hold the display and span it across all columns
let displayCell = createElements('td', ['display-cell']);
displayCell.setAttribute('colspan', '4');
// Append the display input to the display cell
displayCell.appendChild(display);

// Create the first row of the table and append the display cell to it
let firstRow = createElements('tr', ['first-row']);
firstRow.appendChild(displayCell);
// Append the first row to the table
table.appendChild(firstRow);

// Define variables for row count, cell count, and button count
let rowCount = 4;
let cellCount = 4;
let buttonCount = 16;

// This array contains the values to be displayed on the calculator buttons.
let cellValue = ['1', '2', '3', '/', '4', '5', '6', '*', '7', '8', '9', '-', 'C', '0', '=', '+',];

// Initialize index for cellValue array
let index = 0; 

// Loop to create rows and cells for buttons
for (let i = 0; i < rowCount; i++) {
    let row = createElements('tr'); // Create a new row
    for (let j = 0; j < cellCount; j++) {
        let cell = createElements('td'); // Create a new cell
        let button = createElements('button', ['btn']); // Create a new button
        button.textContent = cellValue[index]; // Set button text content
        // Add click event listener to the button
        button.addEventListener('click', function () {
            // Call handleButtonClick function with button text content as argument
            handleButtonClick(button.textContent);
        });
        // Append button to the cell
        cell.appendChild(button);
        // Append cell to the row
        row.appendChild(cell);
        index++; // Increment index for cellValue array
    }
    // Append row to the table
    table.appendChild(row);
}


// Append table to the container
container.appendChild(table);

// Append container to the document body
document.body.appendChild(container);

// Function to handle button clicks
function handleButtonClick(value) {
    // If the clicked button is '=', evaluate the expression in the display
    if (value === '=') {
        display.value = eval(display.value);
    } else if (value === 'C') {  // If the clicked button is 'C', reset the display value to '0'
        display.value = '0';
    } else if (display.value === '0' && /[0-9]/.test(value)) { // If the display value is '0' and the clicked button is a number, replace the display value with the clicked number
        display.value = value;
    } else { // Otherwise, append the clicked button value to the display
        display.value += value;
    }
}

// Listen for keyboard events
document.addEventListener('keydown', function (event) {
    const key = event.key;
    // Check if the pressed key is a number
    if (!isNaN(key) && key !== ' ') { // If the pressed key is a number and not a space
        // Allow number input by appending the pressed key to the display value
        display.value += key;
    } else {
        // Display alert for other keys
        alert('Only numbers are allowed!');
    }
});
