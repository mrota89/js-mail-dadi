//creo prompt per inserire email utente
var userMail = prompt('Benvenuto nel gioco dei dadi! Inserisci il tuo indirizzo email');
var print = document.getElementById('box');

//creo array indirizzi email registrati
var listaMail = ['marco@email.it', 'giovanni@email.it', 'piero@email.it', 'luigi@email.it'];

//verifico che l'email inserita dall'utente sia presente nell'array
var emailInserita = false;
for(var arrayItem = 0; arrayItem < listaMail.length; arrayItem++) {
  console.log(listaMail[arrayItem]);
  if(userMail === listaMail[arrayItem]) {
    emailInserita = true;
  }
}

//stampo esito verifica
if (emailInserita) {/*se email inserita è true, quindi presente nell'array,
  proseguo con il gioco*/
  print.innerText = 'Benvenuto ' + userMail + '! Iniziamo a giocare.';
  console.log('l\'utente accede');

  //definisco variabili valori dado
  var min = 1;
  var max = 6;

  alert("Premere Invio per lanciare il dado");
  var dadiUser = Math.floor(Math.random() * (max + 1 - min) + min);
  print.append('\nIl tuo lancio è: ' + dadiUser)
  console.log('lancio dadi utente: ' + dadiUser);

  var dadiComputer = Math.floor(Math.random() * (max + 1 - min) + min);
  print.append('\nIl lancio della CPU è: ' + dadiComputer)
  console.log('lancio dadi computer: ' + dadiComputer);

  if(dadiUser > dadiComputer) {
    print.append('\nHai Vinto!')
  } else if(dadiUser === dadiComputer) {
    print.append('\nPari')
  } else{
    print.append('\nHai Perso!')
  }
} else {//se mail inserita non è presente nell'array.
  print.innerText = 'Errore inserimento mail. Controllare e riprovare.';
  console.log('l\'utente non accede');
}
