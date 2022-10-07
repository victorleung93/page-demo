var submit = 0;
function submitForm() {
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    submit = 0;
    
    checkFname();
    checkLname();
    checkEmail();

    if(submit>=3){
        alert("Hi " + firstName + ", thank you for you message. I will get back you soon!");
        window.location.href = "index";
    }
    
    
}
function checkFname() {
    var fname = document.getElementById('fname').value;
    var regex = new RegExp('(?=.*[a-zA-Z])');
  
    if(regex.test(fname)){
      document.getElementById('fnamealert').innerHTML = "";
      return submit += 1;
    }else {
      document.getElementById('fnamealert').innerHTML = "First Name format invalid";
      return submit = 0;
    }
  }
  function checkLname(){
    var lname = document.getElementById('lname').value;
    var regex = new RegExp('(?=.*[a-zA-Z])');
    if(regex.test(lname)){
      document.getElementById('lnamealert').innerHTML = "";
      return submit += 1;
    }else {
      document.getElementById('lnamealert').innerHTML = "Last Name format invalid";
      return submit = 0;
    }
  }
  //using regex to validate email
function checkEmail() {
    var email = document.getElementById('email').value;
    var regex = new RegExp(/^([a-zA-Z0-9\\\-\_]+(\.[a-zA-Z0-9\\\-\_]+)*@[a-zA-Z0-9\\\-\_]+(\.[a-zA-Z0-9\\\-\_]+)*(\.[a-z]{2,6})$)+/);
    var result = regex.test(email);
    if(result == true){
      document.getElementById('emailalert').innerHTML = "";
      return submit += 1;
    }else {
      document.getElementById('emailalert').innerHTML = "Email Format invalid";
      return submit = 0;
    }
}
function clearAlert(){
    document.getElementById('fnamealert').innerHTML = "";
    document.getElementById('lnamealert').innerHTML = "";
    document.getElementById('emailalert').innerHTML = "";
}