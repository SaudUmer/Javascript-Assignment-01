// <<<<<<<<<<<<<<<<<<<   01    >>>>>>>>>>>>>>>>>>>>>

var boy = "My Name is Saud"
alert(boy);

// <<<<<<<<<<<<<<<<<<<   02    >>>>>>>>>>>>>>>>>>>>>

var Originalnum = 50;
var Newnumber = Originalnum + 160;

alert(Newnumber);

// <<<<<<<<<<<<<<<<<<<   03    >>>>>>>>>>>>>>>>>>>>>

var x = 45;
var y = 55;
var z = 65;
var xyz = x + y * z;

alert(xyz)
// << or >>
console.log(xyz)

// <<<<<<<<<<<<<<<<<<<   04    >>>>>>>>>>>>>>>>>>>>>

var num1 = 40;
var num2 = 30;

alert(num1 * num2)
// << or >>
console.log(num1 * num2)

// <<<<<<<<<<<<<<<<<<<   05    >>>>>>>>>>>>>>>>>>>>>

var a = 95;
var b = 25;
var ab = a + b;

alert(ab)
// << or >>
console.log(ab)

// <<<<<<<<<<<<<<<<<<<   06    >>>>>>>>>>>>>>>>>>>>>

var message = "Thanks for your support"
var space = " "
var banger = "!";

alert(message + space + banger);

alert("10 + 10 equals to " + 2 + 0 )

// <<<<<<<<<<<<<<<<<<<   07    >>>>>>>>>>>>>>>>>>>>>

var java = 20;
java++;
java--;
++java;
--java;

console.log(java)

// <<<<<<<<<<<<<<<<<<<   08    >>>>>>>>>>>>>>>>>>>>>

var increment = 35;

var postinc = increment++;
var postdec = ++increment;
var preinc = increment--;
var predec = --increment;

console.log(predec)

// <<<<<<<<<<<<<<<<<<<   09    >>>>>>>>>>>>>>>>>>>>>

var Name = prompt("Enter Your Name");
var CNIC_No = prompt("Enter Your CNIC Number");
var Age = prompt("Enter Your Age");
var City = prompt("Enter Your Current City");
var City = prompt("Enter Your Current City", "Karachi");
var Email = prompt("Enter Your Email Address");

console.log(" My Name is " + Name + " , " + " " + " CNIC No is " + CNIC_No + " , " + " " + " My age is " + Age + " , " + " " + " From " + City + " , " + " " + " My Email Address is " + Email);

// <<<<<<<<<<<<<<<<<<<   10    >>>>>>>>>>>>>>>>>>>>>

var ifels = true;

if (ifels == true){
    console.log("Tomorrow is Eid")
}else{
    console.log("Tomorrow is last Roza")
}

// <<<<<<<<<<<<<<<<<<<   11    >>>>>>>>>>>>>>>>>>>>>

var x = prompt("Where does the Hannan live?");
if (x === "Australia") {
alert("Correct!");
}
if (x !== "Australia") {
alert("Wrong answer");
}

// <<<<<<<<<<<<<<<<<<<   12    >>>>>>>>>>>>>>>>>>>>>

// <<< "==" >>>

var firstnum = 45; 
var secondnum = "45";

if (firstnum == secondnum) {
    console.log("Equal")
}else{
    console.log("Not Equal")
}

// <<< "===" >>>

var firstnum = 45; 
var secondnum = "55";

if (firstnum === secondnum) {
    console.log("Equal")
}else{
    console.log("Not Equal")
}
