
 var maleArray = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
 var femaleArray =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function myFunction() {
  var x = document.getElementById("DOB").value;
  var g = document.getElementById("gender").value;
 var y =x.toString(x);
 var cc = parseInt( x.charAt(0) + x.charAt(1)) ;
 var yy = parseInt( x.charAt(2) + x.charAt(3)) ;
 var mm = parseInt( x.charAt(5) + x.charAt(6)) ;
 var dd = parseInt( x.charAt(8) + x.charAt(9)) ;
 var calc =  ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd) % 7;
 var calD =Math.trunc(calc);

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
 

 

 
 /*document.getElementById("demo2").innerHTML = g;*/

}













/*var calculate = function(CC, YY, MM, DD){
  return  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) 

  }
          
  var CC= parseInt(prompt('Enter a CC '));
  var YY= parseInt(prompt('Enter YY '));
  var MM= parseInt(prompt('Enter MM '));
  var DD= parseInt(prompt('Enter DD '));


var result = calculate(CC, YY, MM, DD);
  alert(result);*/