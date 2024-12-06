# Radar Speed Detection

## Description

The `radarDevice` function simulates a radar speed detection system. It checks the speed of a vehicle against a legal speed limit and calculates how many "points" the driver should accumulate based on how much the speed exceeds the legal limit. If the accumulated points exceed a certain threshold, the driver's license will be suspended.

### Key Features:
- The legal speed limit is set to 70 km/h.
- For every 5 km/h above the speed limit, 1 point is accumulated.
- If the driver exceeds 12 points, their license is suspended.
- The function provides feedback based on the driver's speed:
  - "Ok" if the speed is within the legal limit.
  - "Points: X" if points are accumulated but the license is not suspended.
  - "License suspended" if points exceed 12.

## Code

```javascript
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

// Example Calls
radarDevice(80);  // Speed is 80, should show points
radarDevice(280); // Speed is 280, should show "License suspended"
radarDevice(60);  // Speed is 60, should show "Ok"


##How to Use

**Copy the radarDevice function into your JavaScript file or run it in your browser's developer console.
**Call the function by passing a speed value as an argument.

##Example

##javascript
##Copy code
radarDevice(80);  // Output: Points: 2
radarDevice(280); // Output: License suspended
radarDevice(60);  // Output: Ok

##Parameters
**speed: A number representing the speed of the vehicle in km/h.

###Notes
The legal speed limit is 70 km/h.
Points are calculated based on the distance per point: for every 5 km/h above the limit, 1 point is awarded.
If the accumulated points exceed 12, the driver will have their license suspended.
Points are rounded to the nearest integer for display purposes.
