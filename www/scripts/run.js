window.onorientationchange = function() { location.reload() };

for (var i=1; i<=bilder.length; i++){
  $('#top').append('<div class="svar" id="svar' +i+ '"></div>');
}
	
function shuffleArray(array) 
{
  for (var i = array.length - 1; i > 0; i--){
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
    
var blandadeBilder = shuffleArray(bilder);

for (var i=0; i<blandadeBilder.length; i++){
	
  $('#bilder').append('<img src="' +bilder[i].file+ '" id="' +bilder[i].id+'" />');

}
  
var bredd =  84/bilder.length;

$(".svar").css("width", bredd +"%");		
$("img").css("width", bredd +"%");
   
$("img").load(function(){
  var hojd = $("img").height();
  $(".svar").css("height", hojd);
});
    
	
$(function() {
  $( "img" ).draggable({ snap: ".svar", snapMode: "inner", containment: "#bakgrund"});
    $( ".svar" ).droppable({
      drop: function( event, ui )
	  {
	    answers [this.id]=ui.draggable.attr("id");
	  }
    });
});
	
var answers = {};
	
$("input[type=submit]").click(function(){
  
  allCorrect = true;
  
  for (question in facit)
    if (facit[question] != answers[question])
    {
      allCorrect = false;
	  $("#"+question).css("outline","2px solid red");
    }
    else
    {
      $("#"+question).css("outline", "2px dashed green");
    }	
 		
	if (allCorrect)
	  $("#resultat").html("Alla svaren stämmer!");
	else
	  $("#resultat").html("Något av svaren stämmer inte.");
	  
});	
