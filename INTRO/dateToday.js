//exercice 2

// format : « Nous somme le 11/01/2023 et il est 18:12 »

const date = new Date();

var jour = date.getDate()<10 ? "0"+date.getDate() : date.getDate();
var mois = date.getMonth() + 1 <10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
var annee = date.getFullYear();
var heure = date.getHours();
var minute = date.getMinutes();

console.log('Nous somme le '+jour + '/'+mois+'/'+annee+' et il est '+ heure+":"+minute);

//difference entre 2 date

const date1 = new Date(15/2/2024);
const date2 = new Date(13/3/2024);
 dif = date1-date2;
console.log(dif.days);