// Write your code below:
function handleFormSubmit(event){
  event.preventDefault();
  let username=event.target.username.value;
 let email = event.target.email.value;
 let phone= event.target.phone.value;
 
var myObj={
 'username':username,
 'email':email,
 'phone':phone
}
localStorage.setItem(email,JSON.stringify(myObj));

showUserScreen(myObj);
 
}
function showUserScreen(obj){
  let ul = document.querySelector('ul');
let li= document.createElement('li');

li.textContent=obj.username+'-'+obj.email+'-'+obj.phone;

ul.appendChild(li);
}
module.exports = handleFormSubmit;