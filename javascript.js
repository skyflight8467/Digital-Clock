//console.log("Hello world");

//welcome box
//alert("Welcome to Analog Clock :)");



//The time

setInterval(() => {
    let d=new Date();
    let current_date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
    document.getElementById("time").innerHTML= current_date;
}, 1000)



//The Date

//Whole week
let weeks = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

//Months
let month = ["January", "February", "March", "April", "May", "June", "July",
 "August", "September", "October", "November", "December"];

//the whole date format
let d=new Date();
let dat = weeks[d.getDay()] + '    ' + d.getDate() + ' ' + month[d.getMonth()]+' '+d.getFullYear();
document.getElementById("date").innerHTML = dat;

//Greetings
let gret;

if(d.getHours()>=0 && d.getHours()<5){
    gret="'Sleep Its Too late! Sir'";
}
if(d.getHours()>=5 && d.getHours()<12){
    gret="'Good Morning Sir :)'";
}
if(d.getHours()>=12 && d.getHours()<16){
    gret="'Good Afternoon Sir :)'";
}
if(d.getHours()>=16 && d.getHours()<21){
    gret="'Good Evening Sir :)'";
}
if(d.getHours()>=21){
    gret="'Have a sweet dreams Sir'";
}

document.getElementById("greet").innerHTML = gret;
