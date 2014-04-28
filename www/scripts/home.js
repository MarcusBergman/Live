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
  var form = $("testform");
  
  form.submit(function() {
    if (validateName()) { return true; }	
	  
    else { return false; }

  });
  
  function validateName() {
//validation for empty
    if (name.val() == "") {
      name.addClass("error");
      nameInfo.text("Fältet kan inte vara tomt");
      nameInfo.addClass("error");
      return false;
    } 
    
	else {
      name.removeClass("error");
      nameInfo.text("*");
      nameInfo.removeClass("error");
    }
//if it's NOT valid
    if (name.val().length = 5) {
      name.addClass("error");
      nameInfo.text("Testet måste innehålla 5 bokstäver");
      nameInfo.addClass("error");
      return false;
    }
//if it's valid
    else {
      name.removeClass("error");
      nameInfo.text("*");
      nameInfo.removeClass("error");
    }
// validation only for characters no numbers
    var filter = /^[a-zA-Z]*$/;
  
    if (filter.test(name.val())) {
      name.removeClass("error");
      nameInfo.text("*");
      nameInfo.removeClass("error");
      return true;
    }
  
    else {
      name.addClass("error");
      nameInfo.text("Inga siffror!");
      nameInfo.addClass("error");
      return false;
    }
  }
});
  
});
  