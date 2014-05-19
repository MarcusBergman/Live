var testigera = "";

function redirect()
{
  window.location.href = 'http://august.friskola.nu/'+testigera+'/'+document.getElementById("testnamn").value
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
  
$("#skapa").click(function()
{
  window.location.href = 'http://august.friskola.nu/nytt'
});  
  
$("#kryss").click(function()
{
  $("#popup").css("top","-100%");
});
