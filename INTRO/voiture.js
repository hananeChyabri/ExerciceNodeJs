const voiture1 = {
    fabricant : "fabricant1",
    modele : "modele1",
    annee : "annee1"
}

console.log("voiture1 "+voiture1.fabricant);
console.log("voiture1 "+voiture1.modele);
console.log("voiture1 "+voiture1.annee);

const voiture2 = new Object();

voiture2.fabricant = "fabricant2";
voiture2.modele = "modele2";
voiture2.annee = "annee2";

console.log(voiture2);

function Voiture(_fabricant,_modele,_annee)
{
    this.fabricant = _fabricant;
    this.modele = _modele;
    this.annee = _annee;
}
let voiture3 = new Voiture("fabricant3","modele3",1993)

console.log(voiture3['fabricant']);


