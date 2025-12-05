console.error("JS - Condition, boucles, objets et tableaux-1");

// EXO 1 : compter les multiples de 3 et 5
console.warn("Exo 1 - Multiples de 3 et 5");

const multiples = [];
const multiplesoff = [];

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
multiples.push(i);
    } else {
        multiplesoff.push("!" + i)
}
}

console.log(multiples, "il y a ", multiples.length, " nombres");
console.log(multiplesoff);


//  Exercice 2 – Filtrer les notes valides
console.warn("Exo 2 - Filtrer les notes valides");
//  Objectifs : boucle while , condition  && , opérateur ! , méthode   Déclare 
// push
//  const notes = 15, 3, 12, 0, 19, 22, 8 et un tableau vide  valides .
//   Parcours  notes avec une boucle  while (index i ) ; ajoute dans  note strictement comprise entre 0 et 20 (
//  note  0 && note  20 ).   En sortie, log valides et le nombre dʼéléments écartés (notes.length - valides.length).

// FUNCTION AVEC BOUCLE FOR OF

// Je déclare une fonction du nom verifnotes avec comme paramètres un tableau permettant de recevoir plusieurs éléments.
function verifnotes(...notes) {
// je déclare une variable result avec parametre tableau vide qui contiendra les notes valides
    let result = [];
    let resultfalse = [];
    console.log(resultfalse);
// je déclare une boucle for...of qui permet de parcourir chaque valeur du tableau notes.
// à chaque tour index vérifie une note
    for (let note of notes) {
// condition de vérification si index est superieur ou egal à 0 et index inferieur ou egal à 20 alors la note est valide
        if (note >= 0 && note <= 20) {
// si la note est valide je l'ajoute à ma variable result
            result.push(note);
        } else {
            resultfalse.push(note);
        }
    }
// lorsque toutes les valeur ont été vérifiées alors je return le resultat final result
    return result;
}
// je declare une variable avec comme parametre la fonction verifnotes et comme valeur les notes de l'élève par exemple
let julien = verifnotes(15, 3, 20, 12, 0, 19, 22, 8, -5);

console.log(julien);

// BOUCLE WHILE

const notes = [15, 13, -5, 26, 18, 0, 20, 16];
const valides = [];

let i = 0;

while (i < notes.length) {
    const note = notes[i];

    if (note > 0 && note < 20) {
        valides.push(note);
}
i++;
}

console.log("notes valides : ", valides);
console.log("Nombre d'éléments écartés : ", notes.length - valides.length);


// EXO 3 : Parcourir un objet utilisateur :
console.warn("Exo 3 - Filtrer les notes valides");

const users = {
    alice: 18,
    bob: 25,
    charlie: 17,
    dave: 30 
};

let accessValide = 0;

for (let nom in users) {
    const age = users[nom];
    if (age >= 18 && age !== 25) {
    console.log(nom);
    accessValide++;
} else {
    console.log("Accès refusé : " + nom);
}
}

console.log("Total accès accordés :", accessValide);

// EXO 4 : Addition sélective dans un tableau
console.warn("Exo 4 - Addition sélective dans un tableau");

const nombres = [2, 7, 10, 21, 14, 3];
const resultats = [];

let resultat = [];
let somme = 0;

for (let nombre of nombres) {
    if ((nombre % 2 === 0 && nombre > 5) || (nombre % 2 !== 0 && nombre < 10)) {
        somme = somme + nombre; 
        resultat.push(nombre);
    }
}

console.log("les nombres valide sont : ", resultat, "la somme est : ", somme);

// EXO 5 : Inventaire en boucle while
console.warn("Exo 5 - Inventaire boucle while");

const stock = {pommes:4, bananes:0, poires:3, mangues:1};

const rupture = [];

for (let fruit in stock) {
    while (stock[fruit] > 0) {
        stock[fruit]--;
        console.log(`${fruit} : ${stock[fruit]}`);
    }
    if (stock[fruit] === 0 && !rupture.includes(fruit)) {
        rupture.push(fruit);
    }
}

console.log("Fruits en rupture ", rupture);


// EXO 6 : Tableau de nombre aléatoire / Boucle for, push, || et !
console.warn("Exo 6 - Tableau nombre aléatoire");

const nums = [];

for(let i=0; i < 20; i++) {
    let numberAleatoire = Math.floor(Math.random() * 30) +1;
    nums.push(numberAleatoire);
}

console.log(nums);

for(let i=0; i < nums.length; i++) {
    let n = nums[i];
    if(n % 4 === 0 || n % 6 === 0) {
        nums[i] = n * 2;
    } else if(!(n % 2 === 0)) {
        nums[i] = 1;
    }
}

console.log(nums)


// EXO 7 : compter les propriétés d'un objet
console.warn("Exo 7 - Compter les propriétés d'un objet");

const voiture = {
    marque: "toyota",
    année: 1998,
    couleur: "grise",
    age: 42
};

function compterProprietes(objet) {
    let result = 0;
    for(let key in objet) {
        result++;
}
return result;
    }

console.log(compterProprietes(voiture));



