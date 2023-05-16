ACADEMIA DE STUDII ECONOMICE DIN BUCUREȘTI -- CLOUD COMPUTING
 
Aplicație pentru gestiunea jucătorilor din NBA 
 
ROȘCA MARIA-ANDREEA
GRUPA 1121



Introducere
NBA este unul din acei termeni pe care orice persoană, fie că este pasionată de lumea baschetului, fie că nu, cu siguranță l-a întâlnit în discuțiile din ultimii ani. Popularitatea NBA-ului (și prin alianță și a WNBA-ului) a crescut semnificativ prin tinerele talente descoperite, dar și prin spectacolul și competiția de la fiecare meci. Dorindu-mi să analizez acest fenomen, dar fiind în egală măsură și o fană a acestui sport, am ales ca tematica proiectului pentru Cloud Computing să fie lumea baschetului și, în special, starurile lui.
În cele ce urmează, voi prezenta funcționalitățile și interfața aplicației NBA’s Hub App, disponibilă pe:
Git: https://github.com/AndreeaMariaRosca/Project_Cloud_Computing 
Vercel: https://project-cloud-computing-j89uuzsut-andreeamariarosca.vercel.app/ 
Youtube: https://youtu.be/fo8jMKoRhO4 

Descriere problemă
Aplicația dezvoltată se numește NBA's Hub App și are ca temă prezentarea informațiilor utile despre jucătorii de baschet al echipelor ce fac parte din NBA (The National Basketball Association).
Aplicația își propune să furnizeze informații și statistici despre jucătorii din NBA prin intermediul celor trei interfețe: pagina principală, cea de inserare a unui nou jucător în listă și cea a statisticilor.
	În crearea aplicației, am utilizat Next.js, iar stilizarea am realizat-o prin intermediul bibliotecii ChakraUI. Pentru stocarea datelor, am ales baza non-relațională de date MongoDB, facilitând manipularea și reprezentarea datelor JSON în mod nativ la fiecare nivel al aplicației.
	De asemenea, la baza realizării aplicației stau call-urile de API.


Descriere API
Un API (Application Programming Interface) este un set de protocoale utilizat pentru construirea și integrarea aplicațiilor software.
Pentru NBA’s Hub App s-au implementat API-uri pentru adăugare, ștergere, updatare și citire de documente din MongoDB.


Fig. 1. Conținutul fișierului apiMethods.js

De asemenea, toate API-urile integrate în aplicație au fost testate anterior în Postman.
Un alt API integrat este de pe site-ul https://app.balldontlie.io/, de unde se pot extrage informații despre jucători, echipe sau meciuri din NBA. 


Fig. 2. Corpul și apelul metodei fetchData din fișierul PlayersChart.jsx

Figura de mai sus arată modalitatea de extragere a datelor pentru https://www.balldontlie.io/api/v1/players. El a fost integrat în pagina dedicată statisticilor pentru a adăuga și o imagine vizuală informațiilor prezentate, și se dorește ca, în viitoarele versiuni ale aplicației, pagina statisticilor să conțină cât mai multe grafice de interes pentru pasionații NBA.

Flux de date
Exemple de request / response
Așa cum am menționat anterior, metodele GET, POST, PUT și DELETE au fost testate și se regăsesc în cele de urmează.

Fig. 3. GET all players: http://localhost:3000/api/players

Fig. 4. GET one player

Fig. 5. POST one player

Fig. 6. PUT one player

Fig. 7. DELETE one player

Metode HTTP
Funcționalitățile fiecărui request în parte se află în fișierul players.js din  folderul pages.

Fig. 8. Conținut al fișierului players.js
	În cadrul aceluiași fișier, funcția asincronă handler verifică tipul request-ului și apelează funcția CRUD specifică, sau returnează mesajul 'Method not allowed' prin apelul funcției sendMethodNotAllowed.

Fig. 9. Apelul funcțiilor CRUD

Capturi ecran aplicație
Aplicația este structurată pe trei interfețe utilizator cu funcționalitățile proprii, după cum urmează:
MainPage: pagina principală prezintă informații de interes pentru fanii jucătorilor din NBA, organizate sub forma unor carduri

Fig. 10. Pagina principală a aplicației NBA’s Hub App
După cum se poate observa, fiecare card în parte conține informații referitoare la numele jucătorului, numărul de pe tricou, echipa la care joacă în prezent și poziția acestuia, greutatea și țara de proveniență. De asemenea, jucătorii pot fi șterși din listă prin apăsarea butonului Delete asignat fiecărui card.
Butoanele din partea superioară a paginii au rolul de redirecționare: Add new player către pagina de inserare și See some stats către pagina statisticilor.
InsertPage: în cazul în care un jucător nu este prezent în MainPage, utilizatorul poate să adauge informații despre el, completând câmpurile unui formular de adăugare și facilitând, astfel, experiențele viitorilor utilizatori ai aplicației

Fig. 11. Pagina de adăugare a unui jucător a aplicației NBA’s Hub App
Figura 11 prezintă cele șapte câmpuri necesare completării pentru ca jucătorul să poată fi adăugat în lista afișată în MainPage. 

Câmpul de selectare îi permite utilizatorului să aleagă dintr-o listă prestabilită de poziții din cadrul echipei, iar butonul de Return to main page redirecționează către pagina principală a aplicației.
StatsPage: pagina dedicată statisticilor prezintă, la momentul actual, o statistică referitoare la numărul de jucători din NBA care se încadrează pe o anumită poziție în cadrul echipei din care face parte

Fig. 13. Pagina dedicată statisticilor aplicației NBA’s Hub App
    Cu toate că, în prezent, această pagină prezintă doar o statistică sub forma unui BarChart, a fost adăugat în partea inferioară și un link către site-ul https://app.balldontlie.io/, de unde au fost preluate informațiile pentru graficul din figura de mai sus. De asemenea, butonul Return to main page este sugestiv și face legătura cu pagina principală a aplicației.
Pentru realizarea aplicației s-a utilizat o paletă de culori roz-mov, pentru păstrarea unității aplicației și a identității sale vizuale.



Referințe
https://blog.dreamfactory.com/8-api-documentation-examples/
https://www.balldontlie.io/home.html#introduction