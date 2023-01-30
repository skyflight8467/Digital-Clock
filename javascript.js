//welcome box
//var nam = prompt("Welcome to Digital Clock :)\nWhat is your name?");


if(screen.width <800 || screen.height <700){
    alert("Please opted to window site, for better experince.");
}


//The time
setInterval(() => {
    let d=new Date(); //prefare to use 'let' for declaring variables
    let current_date = d.getHours() + ' : ' + d.getMinutes() + ' : ' + d.getSeconds();
    document.getElementById("time").innerHTML= current_date;
}, 1000)//here 1000 is the 1000 ms in which time interval the
//the function will be updated


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

/*if(d.getHours()>=0 && d.getHours()<5){
    gret="'Sleep Its Too late! " + nam + " ji '";
}*/
if(d.getHours()>=5 && d.getHours()<12){
    gret="'Good Morning'";
}
if(d.getHours()>=12 && d.getHours()<16){
    gret="'Good Afternoon'";
}
if(d.getHours()>=16 && d.getHours()<21){
    gret="'Good Evening'";
}
/*if(d.getHours()>=21){
    gret="'Have a sweet dreams " + nam + " ji '";
}*/

document.getElementById("greet").innerHTML = gret;
