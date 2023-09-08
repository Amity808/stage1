let currentDate;
let currentUTCTSelector;
let currentDaySelectorID;

document.addEventListener('DOMContentLoaded', function() {
    // Create a function to get the current day of the week
    currentDate = new Date();
  
    function getCurrentDay() {
      const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const getTodayDate = currentDate.getUTCDay();
      return daysInWeek[getTodayDate];
    }
  
    // Function to get the UTC time in milliseconds
    function getCurrentUTCTime() {
      return currentDate.getTime();
    }
  
    currentUTCTSelector = document.querySelector('[data-testid="currentUTCTime"]');
    currentDaySelectorID = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  
    currentDaySelectorID.textContent = getCurrentDay();
    currentUTCTSelector.textContent = getCurrentUTCTime();
  
    var a = getCurrentDay();
    console.log(getCurrentUTCTime());
    console.log(getCurrentDay());
    console.log(new Date());
  });
  
