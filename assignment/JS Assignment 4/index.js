var submit = 0;

function validation() {
  submit = 0;
  checkFname();
  checkLname();
  checkAddress();
  checkCity();
  checkPostal();
  checkProvince();
  checkAge();
  checkPassword();
  checkEmail();

  formSubmit();
}
//using regex to validate name,city, address
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
function checkAddress(){
  var address = document.getElementById('address').value;
  var regex = new RegExp('(?=.*[a-zA-Z0-9,])');
  if(regex.test(address)){
    document.getElementById('addressalert').innerHTML = "";
    return submit += 1;
  }else {
    document.getElementById('addressalert').innerHTML = "Address format invalid";
    return submit = 0;
  }
}
function checkCity(){
  var city = document.getElementById('city').value;
  var regex = new RegExp('(?=.*[a-zA-Z])');
  if(regex.test(city)){
    document.getElementById('cityalert').innerHTML = "";
    return submit += 1;
  }else {
    document.getElementById('cityalert').innerHTML = "Address format invalid";
    return submit = 0;
  }
}

//using regex to validate postal code
function checkPostal() {
    var code = document.getElementById('pcode').value;
    var regex = new RegExp(/^([a-zA-Z]\d[a-zA-Z]( )?\d[a-zA-Z]\d$)+/);

    if(regex.test(code)){
      document.getElementById('pcodealert').innerHTML = "";
      return submit += 1;
    }else {
      document.getElementById('pcodealert').innerHTML = "Postal Code Format invalid";
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
//using multiple case to validate province
function checkProvince() {
  var province = document.getElementById('province').value.toUpperCase();
  switch (province) {
    case "QC":
    case "ON":
    case "MN":
    case "SK":
    case "AB":
    case "BC":
      document.getElementById('provincealert').innerHTML = "";
      return submit += 1;
      break;
    default:
      document.getElementById('provincealert').innerHTML = "Province invalid";
      return submit = 0;
  }
}
//validate age by make sure it is greater than 18
function checkAge() {
  var age = document.getElementById('age').value;
  if (age < 18) {
    document.getElementById('agealert').innerHTML = "Kid, you are too young for this!";
    return submit = 0;
  }else {
    document.getElementById('agealert').innerHTML = "";
    return submit += 1;
  }
}
//validate password and re-confirm the same input
function checkPassword() {
  var password = document.getElementById('password').value;
  var confirm = document.getElementById('confirm').value;

  var lowercase = new RegExp('(?=.*[a-z])');
  var uppercase = new RegExp('(?=.*[A-Z])');
  var number = new RegExp('(?=.*[0-9])');

  if (password.length < 6) {
    document.getElementById('passwordalert').innerHTML = "Your password is too short, it must be longer than 6 characters";
    return submit = false;
  }else if (password.length > 18 ) {
    document.getElementById('passwordalert').innerHTML = "Your password is too long, you can't remember it.";
    return submit = 0;
  }else if (password.toUpperCase() == "PASSWORD"){
    document.getElementById('passwordalert').innerHTML = "Your password is 'password'! Try again, Genius.";
    return submit = 0;
  }else if (lowercase.test(password) == false) {
    document.getElementById('passwordalert').innerHTML = "Password should contain at least one lower-case character.";
    return submit = 0;
  }else if (uppercase.test(password) == false) {
    document.getElementById('passwordalert').innerHTML = "Password should contain at least one upper-case character."
    return submit = 0;
  }else if (number.test(password) == false) {
    document.getElementById('passwordalert').innerHTML = "Password should contain at least one number.";
    return submit = 0;
  }else{
    document.getElementById('passwordalert').innerHTML = "";
    if (password != confirm) {
      document.getElementById('confirmalert').innerHTML = "Please re-confirm your password."
      return submit = 0;
    }else{
      document.getElementById('confirmalert').innerHTML = "";
      return submit += 1;
    }
  }
//confirm the same

}
function formSubmit() {
document.getElementById('testing').innerHTML = "Welcome to the club, remember the first rule.";
  if (submit >= 9){
    alert("Welcome to the club, remember the first rule.");
  }
}

function clearAlert(){
  document.getElementById('fnamealert').innerHTML = "";
  document.getElementById('lnamealert').innerHTML = "";
  document.getElementById('addressalert').innerHTML = "";
  document.getElementById('cityalert').innerHTML = "";
  document.getElementById('pcodealert').innerHTML = "";
  document.getElementById('passwordalert').innerHTML = "";
  document.getElementById('confirmalert').innerHTML = "";
  document.getElementById('emailalert').innerHTML = "";
  document.getElementById('agealert').innerHTML = "";
  document.getElementById('provincealert').innerHTML = "";

}
