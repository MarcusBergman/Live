window.onorientationchange = function() { location.reload() };

for (var i=1; i<=bilder.length; i++)
{
  $('#top').append('<div class="svar" id="svar' +i+ '"></div>');
}
	
function shuffleArray(array) 
{
  for (var i = array.length - 1; i > 0; i--)
  {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
    
var blandadeBilder = shuffleArray(bilder);

for (var i=0; i<blandadeBilder.length; i++)
{	
  $('#top').append('<div id="'+blandadeBilder[i].id+'" class="dragbild" style="background-image: url('+blandadeBilder[i].file+')"></div>');
 
  $("#"+blandadeBilder[i].id).css("left", (i%5)*18+"%")	
}

var bredd =  84/bilder.length;

if (bredd > 18)
{
  bredd = 18;
  $(".svar").css({position: "relative","left": "8%"});
}

$(".svar").css("width", bredd +"%");
$(".svar").css("height", $('.svar').width());
$(".dragbild").css("height", $('.dragbild').width());  

heightCorr = $('.dragbild').width();
svarHeight = $('.svar').width()

for (var i=0; i<blandadeBilder.length; i++)
{	

  if (i < 5)
    $("#"+blandadeBilder[i].id).css("top", svarHeight);
  else if (i >= 5 && i < 10)	
    $("#"+blandadeBilder[i].id).css("top", heightCorr + svarHeight);
  else if (i >= 10 && i < 15)	
    $("#"+blandadeBilder[i].id).css("top", heightCorr*2 + svarHeight);
  else
    $("#"+blandadeBilder[i].id).css("top", heightCorr*3 + svarHeight);  
}
	
$(function()
{
  $(".dragbild" ).draggable({ 
    start: function( event, ui )
  { 
    $("#"+this.id).css({"width": $('.svar').width(),"height": $('.svar').width()});
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
	
$("#rätta").click(function()
{
  
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
	{
	  $("#resultat").html("Alla svaren stämmer!");
	  $("#reload").css("display","initial");
	}
	
	else
	  $("#resultat").html("Något av svaren stämmer inte.");
	  
});	

$("#reload").click(function()
{
  location.reload();
});
