// var btnIntro = document.getElementById("intro");
// var videoIntro = document.getElementById("video_intro");
// var introNot = document.getElementById("intro_noticia");	

// function videoPlay(){
// 	btnIntro.remove(this);
// 	introNot.classList.remove("hide");
// }
// btnIntro.addEventListener("click", function(){
// 	videoPlay();
// })
// videoIntro.addEventListener("click", function(){
// 	videoPlay();
// })
$(document).ready(function(){
    $("#intro,#video_intro").click(function(){
        $("#intro").hide();
        $("#intro_noticia").removeClass("hide");
	});
    $("#retro").click(function(){
        $("#intro_noticia").addClass("hide");
    	$("#intro").show();
    })
});
