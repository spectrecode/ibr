var btnIntro = document.getElementById("intro");
var videoIntro = document.getElementById("video_intro");
var introNot = document.getElementById("intro_noticia");	

function videoPlay(){
	btnIntro.remove(this);
	introNot.classList.remove("hide");
}
btnIntro.addEventListener("click", function(){
	videoPlay();
})
videoIntro.addEventListener("click", function(){
	videoPlay();
})