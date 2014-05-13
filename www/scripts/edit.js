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
   
  function swap(i)
  {
    $.ajax({ url:     "/bytBild/<?= $privateID ?>/"+i+"/"+(i+1), 
             type:    "GET",
             success: function()
			 { 
               $('#bild'+i).css('background-image', 'url('+bilder[(i+1)].file+')');
			   $('#bild'+(i+1)).css('background-image', 'url('+bilder[i].file+')');
			   temp = bilder[i];
			   bilder[i] = bilder[(i+1)];
			   bilder[i+1] = temp;
			 },
             error:   function() { alert("Det gick dåligt!"); }
           }
     	  )	  
   }
   
   function taBortBild(i)
   {
     $.ajax({ url:    "/taBortBild/<?= $privateID ?>/"+i, 
              type:    "GET",
              success: function() 
			  { 
			    $('#bild'+i).css("background-image", "none");
                $('#trash'+i).remove();			   
			  },
              error:   function() { alert("Det gick dåligt!"); }
           }
     	  )	  
   }

var polyfilter_scriptpath = '/scripts/filter_polyfill/'; 

blur = function()
{
  $("#popup").css("top", "30%");
	  
  $("#bakgrund").animate({ pixels: 8 },
  {
    step: function(now,fx) 
    {
      $(this).css('polyfilter','blur(' + Math.round(now) + 'px)'); 
    },
      duration: 500
  },'swing');
};
		
$("#add").click(blur);
  
$("#kryss").click(function()
{
  $("#popup").css("top","-100%");
  $("#bakgrund").css("polyfilter",'blur(0px)');
});