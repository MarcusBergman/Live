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
  $('#drag'+i).css('background-image', 'url(' +bilder[i].file+ ')');
}
  
var bredd =  84/bilder.length;

$(".svar").css({"width": bredd +"%"});
$(".svar").css({"height": $('.svar').width()});
$(".dragbild").css({"width": $('.svar').width(), "height": $('.svar').width()});
  
for (var i=1; i<=bilder.length; i++){

  if ($('#bild'+i).height() > $('#bild'+i).width())
  {
    $('#bild'+i).css({"height": "100%"}); 
    console.log("height");
  }
  else
  {
    $('#bild'+i).css("width", "100%");
    console.log("testar bild "+i+"har höjd: "+$('#bild'+i).height()+", bredd: "+$('#bild'+i).width());
  }
}

for (var i=1; i<=bilder.length; i++){

  if ($('#bild'+i).height() > $('#bild'+i).width())
  {
    $('#bild'+i).css({"height": "100%"}); 
    console.log("height");
  }
  else
  {
    $('#bild'+i).css("width", "100%");
    console.log("testar bild "+i+"har höjd: "+$('#bild'+i).height()+", bredd: "+$('#bild'+i).width());
  }
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