// Task 1:

const h3 = document.createElement('h3');
h3.textContent = 'Buy high quality organic fruits online';

const mainHeading = document.getElementById('main-heading');
mainHeading.parentNode.insertBefore(h3, mainHeading.nextSibling);

// Task 2:
h3.style.fontStyle = 'italic';

// Task 3:
const para = document.createElement('p');
para.textContent = 'Total fruits: 4';

// Task 4: On this paragraph tag, set an id of "fruits-total".
para.id = 'fruits-total';
const secondDiv = document.querySelector('div:nth-child(2)');

const urlist = secondDiv.querySelector('ul');
secondDiv.insertBefore(para, urlist);
