// Write your code below:

const myForm = document.querySelector('form');

    myForm.addEventListener('submit', handleFormSubmit( 
        event.preventDefault();

        const username = myForm.elements['username'].value;
        const email = myForm.elements['email'].value;
        const phone = myForm.elements['phone'].value;

        // Storing data in local storage
        localStorage.setItem('Username', username);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone', phone);

    );