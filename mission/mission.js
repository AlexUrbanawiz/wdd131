let selectElem = document.getElementById('themelist');
let bodyElem = document.querySelector('body');
let imgElem = document.querySelector('img');
selectElem.addEventListener('change', changeTheme);
    
function changeTheme() {
    let codeValue = selectElem.value;
    
    if(codeValue == 'Dark')
    {
        bodyElem.style.backgroundColor = '#333333';
        bodyElem.style.color = '#fff';
        imgElem.setAttribute('src', 'byui-logo-white.png');
    }
    else if(codeValue == "Light")
    {
        bodyElem.style.backgroundColor = "#fff"
        bodyElem.style.color = '#000';
        imgElem.setAttribute('src', 'byui-logo-blue.webp');
    }
}