 alert("hi")
function calc(){
var bill= document.getElementById("bill").value

var number= document.getElementById("no.ofpeople").value
var service= document.getElementById("values").value

var result= (bill*service)/(number*100)


// console.log(result)
document.getElementById("tip").innerHTML=result



}