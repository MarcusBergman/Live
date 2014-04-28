var polyfilter_scriptpath = '/scripts/filter_polyfill/'; 

blur = function()
{
  $("#popup").css("top", "30%");
  $("#popup").animate({opacity: "1"},500);
	  
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
