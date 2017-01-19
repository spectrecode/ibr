// window.addEventListener("load",function(){
// 	var btnIntro = document.getElementById("intro");

// 	addEventListener.("click", btnIntro(){

// 	})
// })

var btnIntro = document.getElementById("intro");
var introNot = document.getElementById("intro_noticia");	

btnIntro.addEventListener("click", function(){
	btnIntro.remove(this);
	introNot.classList.remove("hide");
})