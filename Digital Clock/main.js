const time = document.querySelector(".time");
const date = document.querySelector(".date");


setInterval( ()=>{
    today();
},1000);

function today(){
    let today = new Date();

//LIST OF  DAYS ARRAY
const DaysList = ["Sun", "Mon", "Tues", "Wed", "Thris", "Fri", "Sat"];

//LIST OF MONTHS
const MonthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Augs", "Sep", "Oct", "Nov", "Dec"];

let CurrentTime = ` ${today.getHours() <= 9 ? '0' + today.getHours() : today.getHours()} : ${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()} : ${today.getSeconds() <= 9 ? '0' + today.getSeconds() : today.getSeconds()} `;

let CurrentDate = `${DaysList[today.getDay()]} ${today.getDate()}  ${MonthsList[today.getMonth()]} ${today.getFullYear()}`;

time.innerHTML= CurrentTime;
date.innerHTML= CurrentDate;

}

