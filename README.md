# Frontend for Designers - Readme #

## 01 Movie Web App (mobile) ##

### Introductie ###
Binnen de movie app is het mogelijk om te bladeren door voorgestelde films. De applicatie geeft naast de naam van de film, ook het jaar, genre en de tijdsduur weer, met een cover-art als achtergrond. De demo beperkt zich tot 3 films, maar het is eenvoudig om meer films toe te voegen. Elke film kan bewaard worden door te klikken op het hartje. De film beland vervolgens in je ‘watchlist’.

### Toegepaste UI Principles ###
04 Keep users in control
11 Strong visual hierarchies work best

Het uitgelijnde hartje laat blijken dat er op geklikt kan worden. Door een hetzelfde icoon toe te passen op de films en op de fixed-menubalk zorg ik voor een relatie tussen het bewaren van films en het bekijken van de opgeslagen films. De interface geeft feedback op de input van de gebruiker door middel van een minimalistische bounce op het notificatieballonnetje. Door de animatie wordt de aandacht van de gebruiker verplaatst naar de navigatie. Zo maak ik duidelijk waar de gebruiker de opgeslagen film terug kan vinden. 

### User Test ###
Uit de gebruikerstest is naar voren gekomen dat het onduidelijk was hoe je naar de volgende film kon gaan. De films zijn onder elkaar weergegeven en zijn ingesteld op 100vh. De interface ondersteunt geen 'next' button of 'scroll-down' button. De iteratie hierop is te zien in Opdracht 03. 

Ook wil de gebruiker meer weten over een film, voordat ze hem toevoegen aan een watchlist.




## 02 Scroll-event (Desktop) ##

### Introductie ###
In dit voorbeeld heb ik kennis gemaakt met het scroll-event. Als voorbeeld heb ik een lange pagina met veel images uit mijn portfolio gepakt. De navigatie scrollde niet mee. Om bijvoorbeeld de terug-functie te gebruiken, moest je eerst helemaal naar boven scrollen. Dit heb ik opgelost met een fixed navigatie, die zich toont zodra je voorbij een bepaald punt scrollt. De fixed-navigatie biedt een terug-mogelijkheid, waar je je ook bevind op de pagina.

### Toegepaste UI Principles ###
06 One primary action per screen
08 Provide a natural next step

Scrollend kijken (06) en in 1 keer doorklikken (08). 

### User Test ###
Een wens uit de test op mijn portfolio was om de plaatjes pas in te laden zodra je deze bereikt hebt tijdens het scrollen. Het laad-gedeelte is niet gelukt, daarentegen tonen ze zich wel pas zodra dat nodig is. Dit maakt het scrollen wat interessanter.

Tijdens de test kwam naar voren dat het irritant was om steeds terug te gaan naar het projectoverzicht op de homepage. Ik heb de feedback (UI principe 08) meegenomen in het herontwerp van mijn portfolio. Na het scrollen door een project, worden er al andere projecten als suggestie gegeven. 



## 03 Movie Web App met data (mobile) ##
### Introductie ###
In de derde en laatste opdracht moesten we leren werken met data uit een externe JSON. Onder de genoemde cases viel wederom weer een film applicatie. Ik heb deze gekozen omdat ik een basis had staan van opdracht 1 en daarmee door kon itereren. Het beginnen met die basis gaf mij de mogelijkheid om beter te focussen op de technische kant van de web applicatie. De movie web app toont een aanbod van films die ingeladen worden vanuit een extern JSON-bestand. De applicatie verstrekt informatie zoals een plot, tijdsduur, jaar van uitgave, en een cast met foto’s. De hyperlinks naar de imdbpages van de cast liepen uit op een 404. De functionaliteit werkte, maar voegt niets toe als de links gebroken zijn. Een iteratie die ik heb gemaakt op het design, is het gevoel dat je eerst kunt bladeren door films en niet direct de details op hoeft te vragen. Het initiële idee voor het bladeren was een carousel met werkende swipe interacties.

Het voordeel van de carousel, is dat niet elke film met zijn details direct wordt ingeladen, en dat bespaart data voor de bezoeker. Bij het doorklikken naar een volgende film, wordt de oude film verwijderd, en de nieuwe film ingeladen. Het toevoegen van films aan je watchlist komt ook weer terug. Echter is dit technisch niet functioneel genoeg voor een final-version van de applicatie. Het verwijderen van elke film zorgt er nu voor dat het hartje ook weer opnieuw gegenereerd wordt, en dus standaard ‘unliked’ is, ook wanneer je hem voor die tijd geliked hebt. Het bewaren van de data is zo complex dat dit niet meer toebehoord tot de essentie van het vak frontend voor designers. 

### Toegepaste UI Principles ###
04 Keep users in control
09 Appearance follows behavior
11 Strong visual hierarchies work best

Onderbouwing bij opdracht 01

### User Test ###
Uit de gebruikerstest kwam naar voren dat een swipe-functionaliteit verwacht werd om door de films te kunnen bladeren. Naar onder scrollem om meer te weten te komen is een logische design overweging.