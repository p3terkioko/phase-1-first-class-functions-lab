// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => arr.slice(0, 2)

let returnLastTwoDrivers = (arr) => arr.slice(arr.length-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = (multiply) => ((fare) => fare * multiply)

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);


function selectDifferentDrivers(arr, func){
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arr)
    }else if(func === returnLastTwoDrivers){
        return returnLastTwoDrivers(arr)
    }
}