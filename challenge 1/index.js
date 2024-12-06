function scoreGrade(score){
    if (score >= 0 && score <= 100) {
        if (score > 79) {
            return 'Grade: A';
        } else if (score >= 60 && score <= 79) {
            return 'Grade: B';
        } else if (score >= 50 && score < 60) {  // Changed condition to < 60 to avoid overlap
            return 'Grade: C';
        } else if (score >= 40 && score < 50) {  // Changed condition to < 50 to avoid overlap
            return 'Grade: D';
        } else {
            return 'Grade: E';
        }
    } else {
        console.log('Please enter a valid value.');
    }
  }
  
  console.log(scoreGrade(45));  // Output: Grade: D
  

