	
function radarDevice(speed) { 
    const velocityLimit = 70; // The legal speed limit is 70 km/h.
    const distancePerPoint = 5; // The distance traveled per point is 5 km.

    if (speed <= velocityLimit) { // Check if the speed is within the legal limit
        console.log("Ok"); // If true, print "Ok"
    } else if (speed > velocityLimit) {
        // If the speed is greater than the limit, calculate points
        let points = (speed - velocityLimit) / distancePerPoint;

        if (points > 12) {
            console.log("License suspended"); // If points exceed 12, suspend the license
        } else {
            console.log(`Points: ${Math.round(points)}`); // Display the points, rounded to the nearest integer
        }
    }
}

// Calling the function with different speeds
radarDevice(80);  // Speed is 80, should show points
radarDevice(280); // Speed is 280, should show "License suspended"
radarDevice(60);  // Speed is 60, should show "Ok"


