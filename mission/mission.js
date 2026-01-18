let selectElem = document.getElementById('themelist');
let bodyElem = document.querySelector('body');
let imgElem = document.querySelector('img');
selectElem.addEventListener('change', changeTheme);
    
function changeTheme() {
    let codeValue = selectElem.value;
    
    if(codeValue == 'Dark')
    {
        imgElem.setAttribute('src', 'byui-logo-white.png');
        bodyElem.classList.toggle('dark')
    }
    else if(codeValue == "Light")
    {
        bodyElem.classList.toggle('dark')
        imgElem.setAttribute('src', 'byui-logo-blue.webp');
    }
}