const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign='center';

 

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType='none';

const basketHeading = document.querySelector('h2');
basketHeading.style.marginLeft = '30px';
basketHeading.style.color='brown';

const fruitItems =document.querySelectorAll('.fruit');
for(let i = 0; i<fruitItems.length; i++){
  fruitItems[i].style.backgroundColor = 'brown';
  fruitItems[i].style.color = 'white';
  fruitItems[i].style.padding='10px';
  fruitItems[i].style.margin='10px';
  fruitItems[i].borderRadius = '5px';
}

const OddFruitItems = document.querySelectorAll('.fruit:nth-child(odd)');
for(let i =0;i<OddFruitItems.length;i++){
  OddFruitItems[i].style.backgroundColor = 'lightgray';
}

