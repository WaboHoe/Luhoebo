//Scrolling effect
window.addEventListener('scroll',()=>{
    var content=document.querySelector('.ABOUT');
    var contentPlace=content.getBoundingClientRect().top;
    var screenPosition=window.innerHeight /3;

    if(contentPlace<screenPosition){
        content.classList.add('active');
    }
    else{
        content.classList.remove('active');
    }

});



