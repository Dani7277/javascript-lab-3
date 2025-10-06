// Step 2: If-else Condition
function checkNumber() {
    let number = 5; // You can change this value to test different numbers
    
    let result = `Checking number: ${number}\n`;
    
    if (number > 0) {
        result += `${number} is a positive number.`;
    } else if (number < 0) {
        result += `${number} is a negative number.`;
    } else {
        result += "The number is zero.";
    }
    
    return result;
}

// Step 3: Switch Statement
function getDayOfWeek() {
    let dayNumber = 3; // You can change this value to test different days (1-7)
    
    let dayName;
    
    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number. Please enter a number between 1 and 7.";
    }
    
    return `Day number ${dayNumber} corresponds to: ${dayName}`;
}

// Step 4: Loops (For, While, Do...While)
function demonstrateLoops() {
    let result = "For Loop (1 to 5): ";
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }
    
    result += "\nWhile Loop (1 to 5): ";
    let i = 1;
    while (i <= 5) {
        result += i + " ";
        i++;
    }
    
    result += "\nDo...While Loop (1 to 5): ";
    let j = 1;
    do {
        result += j + " ";
        j++;
    } while (j <= 5);
    
    return result;
}

// Step 5: Control Flow with break and continue
function demonstrateBreakContinue() {
    let result = "Using break (stops at 3): ";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break; // Exit the loop when i equals 3
        }
        result += i + " ";
    }
    
    result += "\nUsing continue (skips 3): ";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue; // Skip the current iteration when i equals 3
        }
        result += i + " ";
    }
    
    return result;
}

// Step 6: Scope and Context
function demonstrateScope() {
    let globalVar = "I'm global!";
    let result = "";
    
    function scopeExample() {
        let localVar = "I'm local!";
        result += `Inside function:\n`;
        result += `  - Accessing globalVar: ${globalVar}\n`;
        result += `  - Accessing localVar: ${localVar}\n`;
    }
    
    scopeExample();
    
    result += `\nOutside function:\n`;
    result += `  - Accessing globalVar: ${globalVar}\n`;
    result += `  - Trying to access localVar: `;
    
    try {
        result += localVar; // This will cause an error
    } catch (error) {
        result += "Error - localVar is not accessible outside the function!";
    }
    
    return result;
}

// Display all results when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Display if-else condition results
    document.getElementById('ifElseOutput').innerHTML = 
        `<div class="output-box">${checkNumber()}</div>`;
    
    // Display switch statement results
    document.getElementById('switchOutput').innerHTML = 
        `<div class="output-box">${getDayOfWeek()}</div>`;
    
    // Display loops results
    document.getElementById('loopsOutput').innerHTML = 
        `<div class="output-box">${demonstrateLoops()}</div>`;
    
    // Display break and continue results
    document.getElementById('breakContinueOutput').innerHTML = 
        `<div class="output-box">${demonstrateBreakContinue()}</div>`;
    
    // Display scope results
    document.getElementById('scopeOutput').innerHTML = 
        `<div class="output-box">${demonstrateScope()}</div>`;
});