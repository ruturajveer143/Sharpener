// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();

  let myObj = {
    username: event.target.username.value,
    email: event.target.email.value,
    phone: event.target.phone.value
  };

  let myObj_serial = JSON.stringify(myObj);

  localStorage.setItem(myObj.email, myObj_serial);

  const string = myObj.username + "-" + myObj.email + "-" + myObj.phone;
  const newLi = document.createElement('li');

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
   
    localStorage.removeItem(myObj.email);
    
    newLi.remove();
  });


  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', function () {
    
    localStorage.removeItem(myObj.email);
  
    newLi.remove();
  
    document.getElementById('username').value = myObj.username;
    document.getElementById('email').value = myObj.email;
    document.getElementById('phone').value = myObj.phone;
  });

  const newLiText = document.createTextNode(string);
  newLi.appendChild(newLiText);
  newLi.appendChild(deleteBtn);
  newLi.appendChild(editBtn);

  
  const list = document.querySelector("ul");
  list.appendChild(newLi);

 
  document.getElementById('username').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}

module.exports = handleFormSubmit;