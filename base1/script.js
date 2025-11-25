// EX 01 Définir variable

let nom = "Martin";
let anneeNaissance = 2000;

console.log(("Bonjour Mr"), (nom), ("vous avez"), (anneeNaissance), ("ans"));

// EX 02 Variable Note

let note_maths = 15;
let note_français = 12;
let note_HG = 9;

console.log(("la moyenne est de"), ((note_maths + note_français + note_HG) / 3), ("/20"));

// EX 03 : variable sexe

let sexe = "M";

if (sexe === "M") {
    console.log("cette personne est un homme");
}
else { 
    console.log("cette personne est une femme"); 
}

// EX 04 : Definir matin ou soir

let heure = 8;

if (heure < 12) {
    console.log("nous sommes le matin");
}
else if (heure <20) {
    console.log("nous ommes l'après midi");
}
else {
    console.log("nous sommes le soir");
}

// EX 05 : variable choix

let choix = 2;

if (choix === 1) {
    console.log("Insérez");
}
else if (choix === 2) {
    console.log("Supprimer");
}
else if (choix === 3) {
    console.log("Afficher");
}
else {(choix === 4) 
    console.log("Ce choix n'existe pas");
}

// EX 06 : expression conditionnelle

let nombre = 30;

if (nombre % 5 === 0 || nombre % 3 === 0) {
    console.log("ce nombre est divisible par 3 ou 5");
}
else {(nombre)
    console.log("ce nombre n'est pas divisible par 3 ou 5");
}

// EX 07 : Boucle

// for(let departement=44000; departement < 44999;departement=departement+1) {
//     console.log("departement",departement)
// }

// EX 08 : Valeur afficher et incrémenter

for (let age=0; age<=20;age=age+2) {
    console.log("j'ai",age)
}

// EX 09 : pair ou impair

const x = Math.floor(Math.random() * 10);
let found = false
let a;
let b;
let c;

console.log(x);
while (found === false) {
    if (x % 2 === 0) {
        console.log(x % 2 === 0)
    }

}




// while (x<= 20) {
//     if (x % 2 === 0) {
//         console.log(x + " est pair");
//     } else {
//         console.log(x + " est impair");
//     }
// x++;
// }



