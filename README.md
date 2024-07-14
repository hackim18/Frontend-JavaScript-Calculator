# JavaScript Calculator

A simple web application built with React and Vite that functions similarly to this calculator.

## Calculator Demo

You can view a live demo of the JavaScript Calculator [here](https://javascript-calculator.hackimtech.com/).

## Features

- Performs basic arithmetic operations: addition, subtraction, multiplication, and division.
- Supports decimal input and multi-step calculations.
- Clears input and output with the AC button.
- Displays the current calculation and result in the display area.
- Handles edge cases like consecutive operators and multiple decimal points.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/hackim18/Frontend-JavaScript-Calculator
   cd Frontend-JavaScript-Calculator
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to http://localhost:3000.

## Usage

The calculator contains buttons for digits 0-9, decimal point, and operators +, -, \*, /.
Click AC to clear the input and reset the calculator.
Click = to evaluate the current expression and display the result.
Perform multiple calculations sequentially by clicking operators after =.

## Technologies Used

- React
- Vite
- JavaScript
- HTML/CSS

## Calculator Logic

The calculator follows formula logic to respect the order of operations. It handles various user stories as outlined in the FreeCodeCamp project requirements.

## User Stories

### 1. Display and Equals Button

The calculator should have a clickable element with = (equal sign) with id="equals".

### 2. Number Buttons

There should be 10 clickable elements, each representing numbers 0-9 with corresponding IDs: id="zero", id="one", id="two", ..., id="nine".

### 3. Operator Buttons

There should be 4 clickable elements, each representing a primary mathematical operator (+, -, \*, /) with corresponding IDs: id="add", id="subtract", id="multiply", id="divide".

### 4. Decimal Button

There should be a clickable element with a ., representing the decimal point, with id="decimal".

### 5. Clear Button

There should be a clickable element with id="clear" to clear input and output values.

### 6. Display Element

There should be an element with id="display" to display values and results.

### 7. Clear Functionality

Pressing the clear button (AC) clears the input and output values, resetting the calculator to its initialized state (0 shown in the display).

### 8. Input Display

As numbers are inputted, they should be displayed in the element with id="display".

### 9. Arithmetic Operations

The calculator should perform addition, subtraction, multiplication, and division on chains of numbers, and upon pressing =, display the correct result in the element with id="display".

### 10. Number Input Validation

The calculator should not allow numbers to start with multiple zeros.

### 11. Decimal Point Input

Pressing the decimal point button (.) should append . to the currently displayed value, and ensure only one decimal point is allowed per number.

### 12. Decimal Point Precision

The calculator should handle calculations involving decimal points with several decimal places of precision, rounding as necessary.

### 13. Operator Sequence Handling

If two or more operators (+, -, \*, /) are entered consecutively, the calculator should perform the operation of the last entered operator (excluding negative signs).

### 14. Continued Calculations

Pressing an operator immediately following = should start a new calculation based on the result of the previous evaluation.

### 15. Order of Operations

The calculator should adhere to the formula/logic order of operations, ensuring calculations follow standard mathematical precedence.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
