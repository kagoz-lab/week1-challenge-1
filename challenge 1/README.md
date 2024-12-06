# Score Grade Function

## Overview

The `scoreGrade` function is a simple JavaScript function that takes a score as input (from 0 to 100) and returns a corresponding grade based on predefined score ranges. The function is designed to help categorize a score into a grade (A, B, C, D, E).

## Function Description

The `scoreGrade` function checks the value of the score and returns a grade:

- **Grade A** for scores greater than 79.
- **Grade B** for scores between 60 and 79 (inclusive).
- **Grade C** for scores between 50 and 59 (inclusive).
- **Grade D** for scores between 40 and 49 (inclusive).
- **Grade E** for scores below 40.

If the score is outside the valid range (0–100), the function will return an error message prompting the user to enter a valid score.

## Code

```javascript
function scoreGrade(score) {
    if (score >= 0 && score <= 100) {
        if (score > 79) {
            return 'Grade: A';
        } else if (score >= 60) {
            return 'Grade: B';
        } else if (score >= 50) {
            return 'Grade: C';
        } else if (score >= 40) {
            return 'Grade: D';
        } else {
            return 'Grade: E';
        }
    } else {
        return 'Please enter a valid value.';
    }
}
## Usage

**Copy the scoreGrade function into your JavaScript file.
**Call the function by passing a numerical score as an argument.

##Example


/*console.log(scoreGrade(85));  // Output: Grade: A
console.log(scoreGrade(70));  // Output: Grade: B
console.log(scoreGrade(55));  // Output: Grade: C
console.log(scoreGrade(45));  // Output: Grade: D
console.log(scoreGrade(30));  // Output: Grade: E
console.log(scoreGrade(110)); */

## Notes

Ensure the input score is a number between 0 and 100. The function will only work within this range.

If an invalid score (outside 0–100) is provided, the function returns a message prompting the user to enter a valid value.