document.querySelector('.banner button').addEventListener('click',()=>{
    document.querySelector('.banner').style.display='none';
    document.querySelector('.slideshow-wrapper').style.cssText='opacity:1;visibility:visible';
    document.querySelector('.slide-show').style.cssText=' animation: slideShow 24s infinite;'
})
