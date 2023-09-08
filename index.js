


// we create a function to get the current day of the week
const currentDate = new Date()
function getCurrentDay() {
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const getTodayDate = currentDate.getUTCDay()
    return daysInWeek[getTodayDate];
}

// function to get the UTC time in milliseconds
function getCurrentUTCTime() {
    return currentDate.getTime();
}
var currentUTCTSelector = document.querySelectorAll('[data-testid="currentUTCTime"]')
var currentDaySelectorID = document.querySelectorAll('[data-testid="currentDayOfTheWeek"]')

currentDaySelectorID.textContent = getCurrentDay();
currentUTCTSelector.textContent = getCurrentUTCTime();


var a = getCurrentDay();
console.log(getCurrentDay());
console.log(new Date());