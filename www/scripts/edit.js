window.onorientationchange = function() { location.reload() };

$('#title').on('change keydown paste input', function() 
{
  updateTitle();
})

for (var i=0; i<bilder.length; i++)
{
  $('#bilder').append('<div id="bild'+i+'" class="imagecontainer"><div id="trash'+i+'" class="trashdiv"><img class="lock" src="/images/lock.png" /></div></div>');
  $('#bild'+i).css('background-image', 'url('+bilder[i].file+')');
  eval('$("#trash'+i+'").click(function(){ taBortBild('+i+'); }); ');

  if (i < (bilder.length-1))
  {
    $('#bilder').append('<div class="arrows" id="left'+i+'"></div>');
    $('#left'+i).css('background-image', 'url("/images/swap.png")');
    eval('$("#left'+i+'").click(function(){ swap('+i+'); }); ');
  }
}
  
var bredd =  72/bilder.length;

if (bredd > 24)
{
  bredd = 24;
  $('#bilder').css("left","22%");
}

$(".imagecontainer").css("width", bredd +"%");
$(".imagecontainer").css("height", $('.imagecontainer').width());
$(".arrows").css("width", bredd/3 +"%");
$(".arrows").css("height", $('.imagecontainer').width());

$(document).ready(function() {
  $('#add').on('click', function() {
    $('#fileinput')[0].click();
    });
});

$("#testLink").attr('title', 'Gå till testet');