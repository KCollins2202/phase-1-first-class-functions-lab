// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
     return drivers.slice(0,2);
};
const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
    return function(fare) {
       return fare*multiplier;
    }
}
const fareDoubler = function(fare){
    return 2*fare;
}
const fareTripler = function(fare){
    return 3*fare;
}
const selectDifferentDrivers = function(drivers,choice) {
    return choice(drivers);
}