// Code your solution in this file!
const hqLocation = 42;
function distanceFromHqInBlocks(pickupLocation){
    return Math.abs(pickupLocation - hqLocation);
}


function distanceFromHqInFeet(pickupLocation){
   let evaluatedDistanceInBlocks =  distanceFromHqInBlocks(pickupLocation);


//     let evaluatedDistanceInFeet = evaluatedDistanceInBlocks * 264;
    return evaluatedDistanceInBlocks * 264;
 }


 function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
 }

 function calculatesFarePrice(start, destination){
   let evaluatedDistanceTravelledInFeet =  distanceTravelledInFeet(start, destination);
    if (evaluatedDistanceTravelledInFeet<400){
        return 0
    }
   else if (evaluatedDistanceTravelledInFeet >400 && evaluatedDistanceTravelledInFeet <= 2000){
    return (evaluatedDistanceTravelledInFeet -400) * .02
   }
   else if (evaluatedDistanceTravelledInFeet >2000 && evaluatedDistanceTravelledInFeet < 2500){
    return 25
   }
   else {
    return `cannot travel that far`
   }
 }