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
  $('#bilder').append('<div id="'+blandadeBilder[i].id+'" class="dragbild" style="background-image: url('+blandadeBilder[i].file+')"></div>');
  
  if (i < 5)
    $("#"+blandadeBilder[i].id).css("top","0%");
  else if (i >= 5 && i < 10)	
    $("#"+blandadeBilder[i].id).css("top","36%");
  else if (i >= 10 && i < 15)	
    $("#"+blandadeBilder[i].id).css("top","72%");
  else
    $("#"+blandadeBilder[i].id).css("top","108%");  
	
  $("#"+blandadeBilder[i].id).css("left", (i%5)*18+"%")	
}
  
var bredd =  84/bilder.length;

$(".svar").css("width", bredd +"%");
$(".svar").css("height", $('.svar').width());
$(".dragbild").css("height", $('.dragbild').width());
	
$(function()
{
  $(".dragbild" ).draggable({ 
    start: function( event, ui )
  { 
    $("#"+this.id).css({"width": $('.svar').width(),"height": $('.svar').width()});
	$( document ).on( "mousemove", function( event ) {
      $("#"+this.id).offset({left: event.pageX, top: event.pageY});
    });
  }, 
    snap: ".svar", snapMode: "inner", stack: ".dragbild" ,containment: "#bakgrund"});
    $(".svar" ).droppable({
      drop: function( event, ui )
	  {
	    var dragID = ui.draggable.attr("id");
	    $("#"+dragID).css({"width": $('.svar').width(),"height": $('.svar').width()});
	    answers [this.id]=ui.draggable.attr("id");
	  }
    });
});
	
var answers = {};
var count = 0;
	
$("input[type=submit]").click(function(){
  
  count++;
  
  allCorrect = true;
  
  for (question in facit)
    if (facit[question] != answers[question])
    {
      allCorrect = false;
	  $("#"+question).html('<img src="/images/rodkryss.png" class="kryss" />');
    }
    else
    {
	  $("#"+question).html('<img src="/images/gronbock.png" class="bock" />');
	  $("#"+facit[question]).draggable('disable');
    }	
 		
	if (allCorrect)
	  $("#resultat").html("Alla svaren stämmer!");
	else
	  $("#resultat").html("Något av svaren stämmer inte.");
	  
});	
