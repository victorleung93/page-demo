/*
Student Name: Ching Yiu Leung
Student ID: 301221975
Date: 16/10/2022
*/

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

//register 

async function registerUser(event){
    event.preventDefault();
    const firstname = document.getElementById("reg-firstname").value;
    const lastname = document.getElementById("reg-lastname").value;
    const phone = document.getElementById("reg-phone").value;
    const email = document.getElementById("reg-email").value;
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    
    const result = await fetch('/api/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname, lastname, phone, email, username, password
        })
    }).then((res)=> res.json())

    if (result.status == "ok") {
    alert("user created")
    window.location.href = "login";
    }else{
        alert("user is not created")
    }
    
}

//delete
async function delection(id){
  
  const deleted = await fetch('/api/delete',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'id': id
      }}).then((res)=> res.json())

  if (deleted.status != "ok") {
  alert("user is not delete")
  }else{
      alert("user deleted")
  }
  window.location.href = "business";
}

async function update(id){
  

  const phone = document.getElementById("update-phone").value;
  const email = document.getElementById("update-email").value;
  const username = document.getElementById("update-username").value;

  
  const update = await fetch('/api/update',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'id': id
    },
    body: JSON.stringify({
         phone, email, username
    })
}).then((res)=> res.json())

if (update.status != "ok") {
  alert("user is not updated")
  }else{
      alert("user updated")
  }
  window.location.href = "business";
}