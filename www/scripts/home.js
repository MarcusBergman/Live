function redirect()
{

  window.location.href = "http://august.friskola.nu/testa/"+document.getElementById("testnamn").value

}

var polyfilter_scriptpath = '/scripts/filter_polyfill/'; 

blur = function()
{
  $("#popup").css({"top": "30%", "opacity" : "1" });
	  
  $("#main").animate({ pixels: 8 },
  {
    step: function(now,fx) 
    {
      $(this).css('polyfilter','blur(' + Math.round(now) + 'px)'); 
    },
      duration: 500
  },'swing');
};
		
$("#starta").click(blur);
  
$("#kryss").click(function()
{
  $("#popup").css("top","-100%");
  $("#main").css("polyfilter",'blur(0px)');
});
