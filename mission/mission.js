let selectElem = document.getElementById('themelist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    
    if(codeValue == 'Dark')
    {
        document.querySelector('body').style.backgroundColor = 'darkgrey';
    }
})