/*

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro dateToAttend dovrà scalare fino alle 9:30 di domani mattina!

*/

//Creo variabile per la data odierna
/* !!!! Sbagliato, le variabili vanno in conflitto !!!
const todayDate = new Date();

const second = 1000;

const minute = second * 60;

const hour = minute * 60;

console.log(todayDate);

const todayTime = todayDate.getTime();
console.log(todayTime);




const dateToAttend = new Date (2023, 8, 6, 9, 30)
console.log(dateToAttend);
*/



   //Creo una variabile per selezionare la data in cui il timer deve smettere di funzionare
   const dateToAttend = new Date(2023, 8, 6, 9, 30).getTime();
     
   //Uso setInterval per creare un timer che scala ogni secondo

   const update = setInterval(function () {
  
      // Creo una variabile con l'orario odierno e la data odierna

      const todayDate = new Date().getTime();
    
      //Creo una variabile per il tempo da attendere

      const timeToWait = dateToAttend - todayDate;
    
      //Creo delle variabili per stabilire i valori di secondi, minuti, ore e giorni 
      const seconds = Math.floor((timeToWait % (1000 * 60)) / 1000);

      const minutes = Math.floor((timeToWait % (1000 * 60 * 60)) / (1000 * 60));

      const hours = Math.floor((timeToWait % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); 
     
      const days = Math.floor(timeToWait / (1000 * 60 * 60 * 24)); //controllare perchè non conta i giorni correttamente*
    
      //Stampo in pagina il risultato , se arriva al termine stampa in pagina il messaggio.
      document.getElementById("timer").innerHTML = "Giorni:" + days  + "Ore:" + hours + "Minuti:" + minutes + "Secondi:" + seconds ;
      if (timeToWait < 0) {
         document.getElementById("timer").innerHTML = "E' arrivata l'ora della correzione";
      }
   }, 1000);

