 $(function(){

 	$(".btn2page,.about").click(function(){
 		$('body,html').animate({scrollTop:$('#blockabout').offset().top}, 800);
 		return false;
 	})

	$(".skill").click(function(){
 		$('body,html').animate({scrollTop:$('#blockskill').offset().top}, 800);
 		return false;
 	})

	$(".contact").click(function(){
 		$('body,html').animate({scrollTop:$('#blockcontact').offset().top}, 800);
 		return false;
 	})	
})  
 