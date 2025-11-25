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
else if (heure < 20) {
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
else {
    (choix === 4)
    console.log("Ce choix n'existe pas");
}

// EX 06 : expression conditionnelle

let nombre = 30;

if (nombre % 5 === 0 || nombre % 3 === 0) {
    console.log("ce nombre est divisible par 3 ou 5");
}
else {
    (nombre)
    console.log("ce nombre n'est pas divisible par 3 ou 5");
}

// EX 07 : Boucle

// for(let departement=44000; departement < 44999;departement=departement+1) {
//     console.log("departement",departement)
// }

// EX 08 : Valeur afficher et incrémenter

for (let age = 0; age <= 20; age = age + 2) {
    console.log("j'ai", age)
}

// EX 09 : Suite logique pair et impair

// const x = Math.floor(Math.random() * 10);
// let found = false
// let a;
// let b;
// let c;

// console.log(x);
// while (found === false) {
//     if (x % 2 === 0) {
//         console.log(x % 2 === 0)
//     }

// }

// while (x<= 20) {
//     if (x % 2 === 0) {
//         console.log(x + " est pair");
//     } else {
//         console.log(x + " est impair");
//     }
// x++;
// }

// let n9 = Math.floor(Math.random() * 10);

// if (n9 % 2 === 0) {
//     console.log(n9 + " ce nombre est pair");
// } else {
//     console.log(n9 + " ce nombre est impair")
// }

function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// la fonction nombreAleatoire sert à générer un nombre entier aléatoire entre min et max.
// Math.floor : convertit en entier
// Math.random : génère un nombre entre 0 et 1

function tirageAleatoire(min, max) {
    const tirages = [];

    // tirages est un tableau qui stocke les nombres tirés

    while (true) {
        const n = nombreAleatoire(min, max);
        tirages.push(n);

        // la boucle tourne tant que la condition n'est pas respecté. 
        // La boucle : on tire un nombre n et on l'ajoute au tirages.

        const len = tirages.length;

        if (
            len >= 3 &&
            tirages[len - 3] % 2 === 0 &&
            tirages[len - 2] % 2 !== 0 &&
            tirages[len - 1] % 2 !== 0
        ) {
            break;
        }

// len >= 3 : verifie que s'il y a 3 nombres
// tirages[len - 3] : avant dernier nombre en partant de la finally
// % 2 === 0 : nombre pair
// % 2 !== 0 : nombre impair
// Donc : si les 3 derniers nombres sont pair, immpair et impair alors break (sortir de la boucle)

    }
    return tirages;

// return : retourner les tirages, soit renvoie la liste complète jusqu'à obtention de la condition while

}

console.log(tirageAleatoire(1, 100));

// Résumé :
// 1 : on tire un nombre aléatoire
// 2 : on le stocke dans un tableau
// 3 : on regarde si les derniers tirages font la condition
// 4 : si oui on stop avec break
// 5 : on renvoie toute la série dans le tableau  tirages.


// EXO 10 : tirages aléatoires / Compter le nombre de tirage pour obtenir condition / Arrêter tirage / Afficher nombre de coups

// Script avec for :

let n10 = prompt("choisir un nombre de 3 chiffres ?", 100)











// COURS SUR LES FONCTIONS ET RETURN

// function sayHello(name, firstname, age) {
//     return `Bonjour ${name} ${firstname} tu as ${age}`
// }

// console.log(sayHello("bonnier", "julien", 40));