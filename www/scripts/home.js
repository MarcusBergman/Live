function redirect()
{
  var testigera = "";
  
  window.location.href = '"http://august.friskola.nu/'testigera'/"'+document.getElementById("testnamn").value
}
		
$("#starta").click(function()
{
  testigera = "testa";
  
  $("#popup").css("top", "30%");
});

$("#redigera").click(function()
{
  testigera = "redigera";
  
  $("#popup").css("top", "30%");
});
  
$("#kryss").click(function()
{
  $("#popup").css("top","-100%");
});
