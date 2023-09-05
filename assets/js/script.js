/*

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro dateToAttend dovrà scalare fino alle 9:30 di domani mattina!

*/

//Creo variabili per stabilire secondi, minuti, ore e giorni in millisecondi

const secondMs = 1000;

const minuteMs = secondMs * 60;

const hourMs = minuteMs * 60;

const dayMs = hourMs * 24;






   //Creo una variabile per selezionare la data in cui il timer deve smettere di funzionare
   const dateToAttend = new Date(2023, 8, 6, 9, 30).getTime();
     
   //Uso setInterval per creare un timer che scala ogni secondo

   const update = setInterval(function () {
  
      // Creo una variabile con l'orario odierno e la data odierna

      const todayDate = new Date().getTime();
    
      //Creo una variabile per il tempo da attendere

      const timeToWait = dateToAttend - todayDate;
    
      //Creo delle variabili per stabilire i valori di secondi, minuti, ore e giorni in numeri interi tramite math.floor, e divido il tempo rimanente per le variabili in millisecondi per ottenere dei numeri interi decimali
      const seconds = Math.floor((timeToWait % minuteMs) / secondMs);

      const minutes = Math.floor((timeToWait % hourMs) / minuteMs);

      const hours = Math.floor((timeToWait %  dayMs) / hourMs); 
     
      const days = Math.floor(timeToWait / dayMs); 
    
      //Stampo in pagina il risultato , se arriva al termine stampa in pagina il messaggio.
      document.getElementById("timer").innerHTML = "Giorni:" + days  + "Ore:" + hours + "Minuti:" + minutes + "Secondi:" + seconds ;
      if (timeToWait < 0) {
         document.getElementById("timer").innerHTML = "E' arrivata l'ora della correzione";
      }
   }, 1000);

