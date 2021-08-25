function myfun(){
  var who = document.getElementById("inp").value;

var guestArray= ["g1","g2","g3","g4","g5","g6","g7","g8","g9","g10"];

document.write("<br>");

var found = 0;
for(var i=0;i<10;i++){
  if(who==guestArray[i]){
found=1+i;
break;
  }
else{
found=0;
 }   
}
document.body.style.backgroundColor = 'rgba(12, 3, 0, 0.89)';
document.body.style.fontSize = '25px';
document.body.style.color = 'white'; 
document.body.style.fontFamily = 'Gill Sans', 'Gill Sans MT';

document.body.style.paddingTop = '20%';
document.body.style.textAlign = 'center';


if(found!=0)
document.write("Hello Guest, You Are Most Welcome In This House");
else
var msg = document.write("Sorry to Say You Were Not Invited In This House");
}


