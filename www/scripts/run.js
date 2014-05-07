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
  $('#bilder').append('<div id="drag'+i+'" class="dragbild"></div>');
  $('#drag'+i).append('<img src="' +bilder[i].file+ '" id="' +bilder[i].id+'" />');
}
  
var bredd =  84/bilder.length;

$(".svar").css("width", bredd +"%").css("height", bredd +"%");
$(".dragbild").css("width", bredd +"%").css("height", bredd +"%");
  
for (var i=1; i<=bilder.length; i++){

  if ($('#drag'+i).height() > $('#drag'+i).width())
    $('#bild'+i).css({"height": "100%"}); 
  else
    $('#bild'+i).css("width", "100%");
}

// $("img").load(function(){
  // var hojd = $(".dragbild").height();
  // var image = $("img");
  // $(".svar").css("height", hojd);
  // if (image.height() > image.width()) 
    // $("img").css("height","40%");		
// });
    
	
$(function() {
  $( ".dragbild" ).draggable({ snap: ".svar", snapMode: "inner", containment: "#bakgrund"});
    $( ".svar" ).droppable({
      drop: function( event, ui )
	  {
	    answers [this.id]=ui.draggable.children().attr("id");
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
	  $("#"+question).html('<img src="/images/rodkryss.png" class="kryss" />')
    }
    else
    {
	  $("#"+question).html('<img src="/images/gronbock.png" class="bock" />')
    }	
 		
	if (allCorrect)
	  $("#resultat").html("Alla svaren stämmer!");
	else
	  $("#resultat").html("Något av svaren stämmer inte.");
	  
});	
