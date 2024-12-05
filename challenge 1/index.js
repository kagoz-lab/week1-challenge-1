/*const points = prompt("Enter the student's marks (0 - 100):");
  
const score = (points);
  
//So here you have to give the range of the marks entered by the user not to exceed 100 and not to go below 0
  function scoreEvaluator(){
if (score < 0 || score > 100 || (!score)) {//The second or is for Not a number.
  
    console.log("Invalid input. Please enter a number between 0 and 100.");//If the score is <0 or is >100,it notifies the user that the data entered is invalid and suggests that they enter valid data.
  
  } else if (score > 79) {//If the score is > than 79, it displays the grade "A"
  
    console.log("Grade: A");
  
  } else if (score >= 60) {//If the score is >=60, it displays the grade "B"
  
    console.log("Grade: B");
} else if (score >= 49) {// If the score is >=49, it displays the grade "C"
  
    console.log("Grade: C");
  
  } else if (score >= 40) {// If the score is >=40, it displays the grade "D"
  
    console.log("Grade: D");
  
  } else {
  
    console.log("Grade: E");//If the score is 39 and below, it displays the grade "E"
  
  }
}*/
/*function studentGrade(Number){
    
  if (Number >= 0 && Number <= 100) {
      if (Number > 79) {
          return('Grade: A');
      } else if (Number >= 60 && Number>= 78) {
          return('Grade: B');
      } else if (Number>= 50 && Number>= 59) {
          return('Grade: C');
      } else if (Number>= 40 &&Number >= 49) {
          return('Grade: D');
      } else if (Number<40 && Number>= 0)
          return('Grade: E');
      }
      else {
      console.log(`pls enter valid value`);

      }
    }
console.log(studentGrade(45))*/

function scoreGrade(score){
  if (score >= 0 && score <= 100) {
      if (score > 79) {
          return 'Grade: A';
      } else if (score >= 60 && score <= 79) {
          return 'Grade: B';
      } else if (score >= 50 && score <= 59) {
          return 'Grade: C';
      } else if (score >= 40 && score <= 49) {
          return 'Grade: D';
      } else {
          return 'Grade: E';
      }
  } else {
      console.log('Please enter a valid value.');
  }
}

console.log(scoreGrade(45));  // Output: Grade: D
