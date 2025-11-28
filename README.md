Webb servern fungerar ungefär så här:

*Klienten skriver in URL:n till våran sida med start addressen, vi använder en port address och sedan vilken sökväg eller vad man kallar det som vi vill till, i vårt fall "/".
*Servern börjar med att hämta all JSON data, libraries och routern (från express libraryt).
*Routern börjar med att hämta "/" sidan, i vårt fall är det startsidan.
*Efter routern har hämtat "/" sidan så RESPONDAR den till klienten med att RENDERA index.njk och vi skickar även storyData JSON filen som har all data om våran story till index.njk
så den kan loopa igenom datan och visa upp alla kapitel som länkar.

*Om vi vill hämta ett specifikt sidonummer så hämtar routern "/:id", för oss är id:t kapitel numret + sidan i kapitlet så sökvägen blir då t.ex "/1.1", "/2.13", "/100.32"
*Routern får id:t igenom req.params
*Routern hittar rätt sida genom att söka igenom JSON filen med id:t
*Ifall sidan finns så RESPONDAR routern med att RENDERA storypage.njk som är ett templat som ska kunna rendera alla slags boksidor med våran JSON
*Vi skickar även vad vi vill titeln ska vara med page.title, page är nu det specifika kapitlet som vi sökte efter så det blir kapitel titeln
*Sedan skickar vi hela page till storypage.njk så att den kan loopa igenom saker eller använda sig av all data som finns i det kapitlet och rendera det.


I 11:ty så använder i oss av include och content blocks för att kunna skapa templat till sidor så man slipper ändra tusen talls sidor ifall man kommer på att start knappen var för liten eller något sånt.
Användaren kan skriva in en sökväg och då skickas allting som står i filerna till klienten och sidan renderas utifrån koden som står där.
Med express så skickar klienten en förfrågan till servern, till exempel vilken sida de vill se och vilket id sidan har och då svarar 
servern om sökvägen finns med att rendera den sidan till oss och den kan välja hur mycket data från en JSON fil som ska skickas till sidan för att användas.
Klienten får inte läsa vilken sida de vill utan måste fråga servern att visa upp den.

Mina routes är "/" och "/:id", "/" är startsidan och "/:id" leder till den specifika boksidan, id:t kan alltid bytas ut så den leder till olika sidor.

Jag har gjort så att startsidan låter dig läsa allt från början eller välja ett kapitel du vill läsa, när du klickar på en av länkarna, t.ex kapitel 1.3 så blir din nya sökväg "/1.3" och du ber servern om att få se den sidan.
När du har börjat läsa finns det ingen knapp tillbaks till starten om du inte läser klart hela storyn eller själv går bakåt ett snäpp i browsern.
Varje länk du klickar byter din sökväg och varje gång din sökväg ändras ber du servern om att få se den specifika sidan. Om den finns så renderas den för dig.
