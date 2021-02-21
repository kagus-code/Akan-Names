
 var maleArray = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 var femaleArray =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

/* x is for date of birth g is for gender*/
function myFunction() {
  var x = document.getElementById("DOB").value;
  var g = document.getElementById("gender").value;


 var yy = parseInt( x.charAt(0) + x.charAt(1) + x.charAt(2) + x.charAt(3)) ;
 var mm = parseInt( x.charAt(5) + x.charAt(6)) ;
 var dd = parseInt( x.charAt(8) + x.charAt(9)) ;
 if (mm >= 3) {
  mm -= 2;
} else {
  mm += 10;
}
if ((mm == 11) || (mm == 12)) yy--;
var nCentury = parseInt(yy / 100);
var nYear100 = yy % 100;
var h = 0;    // day of week number
h += parseInt(dd);
h += parseInt((13 / 5) * mm - 0.2);
h += parseInt(nYear100);
h += parseInt(nYear100 / 4);
h += parseInt(nCentury / 4);
h -= parseInt(2 * nCentury);
h %= 7;
if (yy >= 1700 && yy <= 1751) {
  h -= 3;
} else {
  if (yy <= 1699) h -= 4;
}
 /*var calc =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7; alternate formula*/ 
 
 var calD = h;

/*male selectios*/
 if (calD===0 && g==="male"){
  document.getElementById("demo").innerHTML =maleArray[0] ;
 } else if (calD===1 && g==='male'){
  document.getElementById("demo").innerHTML =maleArray[1] ;
 } else if (calD===2 && g==='male'){
  document.getElementById("demo").innerHTML =maleArray[2] ;
 } else if (calD===3 && g==='male'){
  document.getElementById("demo").innerHTML =maleArray[3] ;
 } else if (calD===4 && g==='male'){
  document.getElementById("demo").innerHTML =maleArray[4] ;
 } else if (calD===5 && g==='male'){
  document.getElementById("demo").innerHTML =maleArray[5] ;
 } else if (calD===6 && g==='male'){
  document.getElementById("demo").innerHTML =maleArray[6] ;
 }  
 /*Female selectios*/
else if (calD===0 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[0] ;
 } else if (calD===1 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[1] ;
 } else if (calD===2 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[2] ;
 } else if (calD===3 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[3] ;
 } else if (calD===4 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[4] ;
 } else if (calD===5 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[5] ;
 } else if (calD===6 && g==='female'){
  document.getElementById("demo").innerHTML =femaleArray[6] ;
 }  
 else  {
   alert('INPUT VALID DETAILS')
  document.getElementById("demo").innerHTML ='_ _ _ _ _ _ _ _ ' ;
 }
 

}




