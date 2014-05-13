for (var i=0; i<bilder.length; i++)
{
  $('#bilder').append('<div id="bild'+i+'" class="imagecontainer"><div id="trash'+i+'" class="trashdiv"><img src="/images/delete.png" class="trash" /></div></div>');
  $('#bild'+i).css('background-image', 'url('+bilder[i].file+')');
  eval('$("#trash'+i+'").click(function(){ taBortBild('+i+'); }); ');

  if (i < (bilder.length-1))
  {
    $('#bilder').append('<div class="arrows" id="left'+i+'"></div>');
    $('#left'+i).css('background-image', 'url("/images/arrow2.jpg")');
    eval('$("#left'+i+'").click(function(){ swap('+i+'); }); ');
  }
}
  
var bredd =  72/bilder.length;

$(".imagecontainer").css("width", bredd +"%");
$(".imagecontainer").css("height", $('.imagecontainer').width());
$(".arrows").css("width", bredd/3 +"%");
$(".arrows").css("height", $('.imagecontainer').width());