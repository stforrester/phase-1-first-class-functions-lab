// Code your solution in this file!

const returnFirstTwoDrivers = driverNames => driverNames.slice(0,2);

const returnLastTwoDrivers = driverNames => driverNames.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
    return selectorFunction(arrayOfDrivers);
}

