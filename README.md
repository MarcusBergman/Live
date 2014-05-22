# August

###AUtomatisk GraderingsUtensil för Seriella Teckningar

August kommer att vara ett system ämnat för lärare och elever på högstadiet.

I AUGUST kommer man att kunna skapa enkla övningar där målet är att lägga ett
antal bilder i rätt ordning genom att dra och släppa dem i rätt boxar.
När man är nöjd kan man välja Rätta och då se vilka bilder som ligger rätt och
vilka som ligger fel. Man kan då flytta om de felaktiga, och välja att rätta igen,
tills ordningen stämmer.


I www katalogen ligger allt som servas på nätet. Vi har inte så många filer i www katalogen eftersom det är högre säkerhet att ha så lites om möjligt som servas på nätet. I www ligger själva designen på hemsidan styles, images och scripts. Men också index.php och .htacces.

Vår .htacces redirectar dig till index.php eller anpassad feldokumentsida (404 error page).

index.php redirectar dig till de olika vyerna beroende på vad du skriver i URL:n.

Vi använder databasen "the Berkeley Database" (DB4). Som erbjuder en inbyggda databasen stöd för både traditionella och klient / server-applikationer. 

Application det som styr hemsidan själva intelligensen. Här ligger alla vyer, controllers och vår databas.

Man har tre alternativ på main sidan. Du kan skapa ett test, redigera ett befintligt test eller starta ett test. Väljer du att skapa test kommer du in på på http://august.friskola.nu/redigera/"RandomPrivatID". Testet skapar också ett publikt ID. På redigerar sidan kan man lägga upp bilder och sortera dom i den ordning man önskar.
Det privata ID använder du när du ska redigera ditt test och det publika ID används till användare som ska starta testet.


