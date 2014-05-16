function redirect()
{

  window.location.href = "http://august.friskola.nu/testa/"+document.getElementById("testnamn").value

}
		
$("#starta").click(function()
{
  $("#popup").css("top", "30%");
});
  
$("#kryss").click(function()
{
  $("#popup").css("top","-100%");
});
