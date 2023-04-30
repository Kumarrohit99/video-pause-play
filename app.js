

const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');



btn.addEventListener('click',function(){
    if(btn.classList.contains('pause-play-switch')){
        btn.classList.remove('pause-play-switch');
        video.play();
    }else{
        btn.classList.add('pause-play-switch');
        video.pause();
    }
})

window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader');
});