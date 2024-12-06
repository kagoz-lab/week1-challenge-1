

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
