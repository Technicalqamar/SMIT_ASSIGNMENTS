
 var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" , "Friday", "Saturday"];
 var monthsName = ["January", "February", "March", "April","May", "June", "July", "August", "September", "October", "November", "December"];
function updateClock(){
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var date = now.getDate();
    var months = now.getMonth();
    var years = now.getFullYear();
    var daysName = now.getDay();

    var daysIndex = dayName[daysName];
    var monthsIndex = monthsName[months];

    var ampm;

    if(hours >= 12){
        ampm = "PM";
    } else {
        ampm = "AM";
    };

    
    hours = hours % 12;
    if(hours === 0){
        hours = 12;
    };

    
    if(hours < 10){
        hours = "0" + hours
    };
    if(minutes < 10){
        minutes = "0" + minutes
    };
    if(seconds < 10){
        seconds = "0" + seconds
    };
    if(date < 10){
         date = "0" + date
    };

document.getElementById("h2-1").innerText = hours;
document.getElementById("h2-2").innerText = minutes;
document.getElementById("h2-3").innerText = seconds;
document.getElementById("h2-4").innerText = date;
document.getElementById("daysName").innerText = daysIndex;
document.getElementById("h2-5").innerText = monthsIndex;
document.getElementById("h2-6").innerText = years;
document.getElementById("AMPM").innerText = ampm;
document.getElementById("AMPM").innerText = ampm;
}


setInterval(updateClock, 1000);
updateClock();