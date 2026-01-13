let title = document.querySelector('h1');
console.log(title);

title.textContent = 'Web Page Components'

let topic = document.getElementById('topics');
topic.style.color = 'green';

let list = document.querySelector('.list');
list.style.border = '3px solid black';

let para = document.querySelector('p');
para.classList.add('background');
// para.style.backgroundColor = '#000';

let image = document.querySelector('img');
image.setAttribute('src', '../mission/byui-logo-blue.webp');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    document.querySelector('#html').style.color = 'red';
})


const newPara = document.createElement('p');
newPara.innerText = 'Added with java script';
document.body.appendChild(newPara);