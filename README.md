# FFD

Movie Web App (mobile)

Binnen de movie app is het mogelijk om te bladeren door voorgestelde films. De applicatie geeft naast de naam van de film, ook het jaar, genre en de tijdsduur weer, met een cover-art als achtergrond. De demo beperkt zich tot 3 films, maar het is eenvoudig om meer films toe te voegen. Elke film kan bewaard worden door te klikken op het hartje. De film beland vervolgens in je ‘watchlist’.


Scroll-event

In dit voorbeeld heb ik kennis gemaakt met het scroll-event. Als voorbeeld heb ik een lange pagina met veel images uit mijn portfolio gepakt. De navigatie was alleen toegankelijk aan de bovenkant. Om de terug-functie te gebruiken, moest je dus eerst helemaal naar boven scrollen. Dit heb ik opgelost met een fixed navigatie, die zich toont zodra je voorbij een bepaald punt scrollt. De fixed-navigatie biedt een terug-mogelijkheid, waar je ook bent op de pagina.  Een andere wens was om de plaatjes pas in te laden zodra je deze bereikt hebt tijdens het scrollen. Het laad-gedeelte is niet gelukt, daarentegen tonen ze zich wel pas zodra dat nodig is. Dit maakt het scrollen wat interessanter.

Movie Web App met data

In de derde en laatste opdracht moesten we leren werken met data uit een externe JSON. Onder de genoemde cases viel wederom weer een film applicatie. Ik heb deze gekozen omdat ik een basis had staan van opdracht 1 en daarmee door kon itereren. Het beginnen met die basis gaf mij de mogelijkheid om beter te focussen op de technische kant van de web applicatie. De movie web app toont een aanbod van films die ingeladen worden vanuit een extern JSON-bestand. De applicatie verstrekt informatie zoals een plot, tijdsduur, jaar van uitgave, en een cast met foto’s. De hyperlinks naar de imdbpages van de cast liepen uit op een 404. De functionaliteit werkte, maar voegt niets toe als de links gebroken zijn. Een iteratie die ik heb gemaakt op het design, is het gevoel dat je eerst kunt bladeren door films en niet direct de details op hoeft te vragen. Het initiële idee voor het bladeren was een carousel met werkende swipe interacties.

Het voordeel van de carousel, is dat niet elke film met zijn details direct wordt ingeladen, en dat bespaart data voor de bezoeker. Bij het doorklikken naar een volgende film, wordt de oude film verwijderd, en de nieuwe film ingeladen. Het toevoegen van films aan je watchlist komt ook weer terug. Echter is dit technisch niet functioneel genoeg voor een final-version van de applicatie. Het verwijderen van elke film zorgt er nu voor dat het hartje ook weer opnieuw gegenereerd wordt, en dus standaard ‘unliked’ is, ook wanneer je hem voor die tijd geliked hebt. Het bewaren van de data is zo complex dat dit niet meer toebehoord tot de essentie van het vak frontend voor designers. 