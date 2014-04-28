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


$(document).ready(function() {
  var name = $("#testnamn");
  var nameInfo = $("#infotext");
  
  $(“#testform”).submit(function() {
    form.submit(function() {
      if (validateName()) { return true; }	
	  
	  else { return false; }

    });
  });
  
  if (name.val() == "") {
      name.addClass("error"); // adding css error class to the control
      nameInfo.text("Names cannot be empty!");//filling up error message
      nameInfo.addClass("error");//add error class to info span
      return false;
  } 
  
  else {
      name.removeClass("error");
      nameInfo.text("*");
      nameInfo.removeClass("error");
  }
  
});
  