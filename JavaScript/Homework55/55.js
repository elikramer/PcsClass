'use strict'


const daysOfWeek = (function () {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    function getDayName(index) {
        return days[index - 1];
    }

    function getDayNumber(name) {
        for(let i = 0; i < days.length; i++){
            if(days[i] === name){
                return i + 1;
            }
        }

        return 'invalid day';
    }

    return {
        getDayName: getDayName,
        getDayNumber: getDayNumber
    };

}());

console.log("5th day of the week is: " + daysOfWeek.getDayName(5) + ";  Saturday is day number " + daysOfWeek.getDayNumber("Saturday"))


const interestCalculator = (function () {

    function getYears(years){
        return years;
    }
    
    function getInterestRate(rate){
        return rate;
    }

    return {

        setYears : getYears,
        setRate : getInterestRate,

        

    }

}())


