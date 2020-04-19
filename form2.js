function validate(){
    var email = document.getElementById("email").value;
    var regexp= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    var mobile = document.getElementById("mobile").value;
    var phoneno =  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var password = document.getElementById("password").value;
    var pass= /^((?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,20})$/;
    
    
  
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
    
   
  
  if(password==""){
    document.getElementById("pwd").innerHTML="** Please fill Password field";
    return false;
  }
  if(!pass.test(password)){
    document.getElementById("pwd").innerHTML="** Password should contain minimum 8 characters,atleast 1 uppercase,1 lowecase,1 number.";
    return false;
  }
  
  
  
 
  
  
  
  }
 
 
  
  