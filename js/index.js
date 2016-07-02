/**
 * Created by hp on 2016/6/28.
 */
(function(){
    var winW = document.documentElement.clientWidth;
    if(winW>=750){
        document.documentElement.style.fontSize = winW/768*100+"px";
        return;
    }
    document.documentElement.style.fontSize = winW/750*100+"px";
})();

new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlidePrevEnd:changeEnd,
    onSlideNextEnd: changeEnd
});

function changeEnd(swiper){
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    [].forEach.call(slideAry,function(slide,index){
        if(index == n){
            if(n==1||n==6){
                slide.id = "page1";
                return;
            }else if(n==0||n==5){
                slide.id = "page5";
                return;
            }else{
                slide.id = "page"+index;
                return;
            }

        }
        slide.id = null;
    })
}

(function(){
    var music = document.getElementById("music"),
        musicAudio = document.getElementById("musicAudio");
    window.setTimeout(function () {
        musicAudio.play();
        musicAudio.addEventListener("canplay", function () {
            music.style.display = "block";
            music.className = "music move";
        }, false);
    }, 1000);
    music.addEventListener("click", function () {
        if (musicAudio.paused) {
            musicAudio.play();
            music.className = "music move";
            return;
        }
        musicAudio.pause();
        music.className = "music";
    }, false);
})()

