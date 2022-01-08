const indexBtn = document.querySelector('.indexBtn');
indexBtn.addEventListener('click', () =>{
    document.querySelector('.indexWrap').setAttribute('style', 'display:none')
    document.querySelector('.mainWrap').setAttribute('style', 'display:block')
})