
function validate(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var regexp= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  var mobile = document.getElementById("mobile").value;
  var phoneno =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm").value;
  var pass= /^((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20})$/;
  
  if(name==""){
  document.getElementById("nam").innerHTML="** Please fill Name field";
  return false;
}
if((name.length<=2)||(name.length>20)){
  document.getElementById("nam").innerHTML="** Name length should be between 2 and 20 characters.";
    return false;
}
if(!isNaN(name)){
  document.getElementById("nam").innerHTML="** Numbers are not allowed";
  return false;

}

if(!regexp.test(email)){
  document.getElementById("mail").innerHTML="** Enter Valid Email Address";
return false;
}

 
if(mobile==""){
  document.getElementById("number").innerHTML="** Please fill Mobile Number field";
  return false;
}



if(!mobile.match(phoneno)){
  document.getElementById("number").innerHTML="** Enter Valid Mobile Number";
  return false;
  }
  
 
if(username==""){
  document.getElementById("user").innerHTML="** Please fill Username field";
  return false;
}
if((username.length<=2)||(username.length>20)){
  document.getElementById("user").innerHTML="** Name length should be between 2 and 20 characters.";
  return false;
}
if(!isNaN(username)){
  document.getElementById("user").innerHTML="** Numbers are not allowed";
  return false;

}
if(password==""){
  document.getElementById("pwd").innerHTML="** Please fill Password field";
  return false;
}
if(!pass.test(password)){
  document.getElementById("pwd").innerHTML="** Password should contain minimum 8 characters,atleast 1 uppercase,1 lowecase,1 number.";
  return false;
}



if(confirm==""){
  document.getElementById("cpwd").innerHTML="** Please fill Confirm Password field";
  return false;
}
if(password!=confirm){
  document.getElementById("cpwd").innerHTML="** Passwords are not matching";
  return false;

}




}
password.addEventListener('keyup',function(){
  strength();
})
function strength(){
  var val= document.getElementById("password").value;
  var status= document.getElementById("length");
  var counter=0;
  if (val!="")
  {
    if(val.length<=5)
    counter=1;
    if(val.length>5 && val.length<=10)
    counter=2;
    if(val.length>10 && val.length<=15)
    counter=3;
    if(counter==1){
      status.innerHTML="WEAK";
      status.style.background="#FF0000";
      status.style.color="#ffffff";
    }
    if(counter==2){
      status.innerHTML="GOOD";
      status.style.background="#FF5733";
      status.style.color="#ffffff";
    }
    if(counter==3){
      status.innerHTML="STRONG";
      status.style.background="#00FF00";
      status.style.color="#ffffff";
    }
    

  }
}
