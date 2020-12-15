//creo prompt per inserire email utente
var userMail = prompt('Benvenuto nel gioco dei dadi! Inserisci il tuo indirizzo email');
var print = document.getElementById('box');
//creo array indirizzi email registrati
var listaMail = ['marco@email.it', 'giovanni@email.it', 'piero@email.it', 'luigi@email.it'];

var emailInserita = false;
for(var arrayItem = 0; arrayItem < listaMail.length; arrayItem++) {
  //verifico che l'email inserita dall'utente sia presente nell'array
  console.log(listaMail[arrayItem]);
  if(userMail === listaMail[arrayItem]) {
    emailInserita = true;
  }
}

//stampo esito verifica
if (emailInserita) {//se emailInserita è true
  print.innerText = 'Benvenuto ' + userMail + '! Iniziamo a giocare.';
  console.log('l\'utente accede');
} else {
  print.innerText = 'Errore inserimento mail. Controllare e riprovare.';
  console.log('l\'utente non accede');
}

var min = 1;
var max = 6;

var lancioDadiUser = alert("Premere Invio per lanciare i dadi");
var dadiUser = Math.floor(Math.random() * (max + 1 - min) + min);
print.append('\nIl tuo lancio è: ' + dadiUser)
console.log('lancio dati utente: ' + dadiUser);

var dadiComputer = Math.floor(Math.random() * 6) + 1;
print.append('\nIl lancio del pc è: ' + dadiUser)
console.log('lancio dati computer: ' + dadiUser);









// alert('Errore. Controllare i dati inseriti e riprovare');
// console.log('errore inserimento mail');
