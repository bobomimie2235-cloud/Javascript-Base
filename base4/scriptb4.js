// EXO 1 : Base tableau

const n1 = [1, 2, 3, 4, 5];

for(let index =0; index < n1.length; index++) {
    console.log(n1[index]);
}

// EXO 2 : Calculer la somme des elements d'un tableau

const n2 = [10, 22, 33, 44, 55];
let total = 0;

for (let i =0;i < n2.length;i++) {
    total += n2[i]
}
console.log(total);

// avec reduce 

// const total2 = n2.reduce((acc, value) => acc + value, 0);

// console.log(total2);


// for of : montrer tous les elements d'un tableau
for(const el of n2) {
    console.log(el)
}

// EXO 3 : Trouver le mot le plus long dans un tableau

const tableauMots = ["journée", "soleil", "zen", "paix", "saperlipopette"]

let motPlusLong = "";

for (let i=0; i < tableauMots.length; i++) {
    if (tableauMots[i].length > motPlusLong.length) {
        motPlusLong = tableauMots[i];
    }
}

console.log("Le mot le plus long est :", motPlusLong);

// EXO 4 : Inverser une chaine de caractere

// TRI ORDRE ALPHABETIQUE

// const tableau4 = ["debut", "milieux", "fin", "nuit"]

// let inverserChaine = "";

// tableau4.sort();

// console.log(tableau4);

function inverserChaine(chaine) {
    let resultat = "";
    
    for( let i = chaine.length - 1; i >= 0; i--) {
        resultat += chaine[i];
    }

    return resultat;
}

console.log(inverserChaine("stade"));


// for(let i =tableau4.length;i>0; i++) {
//     console.log(tableau4[i]);
// }

// EXO 5 : Compter le nombre de voyelle dans une chaine

function compterVoyelles(chaine5) {
    let compteur5 = "";
    const voyelles = "aeiouyAEIOUY";

    for (let i=0; i < chaine5.length; i++) {
        if (voyelles.includes(chaine5[i])) {
            compteur5++;
        }
    }
    return compteur5;
}

console.log(compterVoyelles("Saperlotte Informatique"));

// EXO 6 : Filtrer les nombres pair d'un tableau

function nombresPairs(tableau) {
    let resultat6 = [];

    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
            resultat6.push(tableau[i])
    }
}
return resultat6; }

console.log(nombresPairs([42, 56, 45, 23, 1, 2, 3, 4, 5]));

// EXO 7 : Compter les propriétés d'un tableau

function compterProprietes(objet) {
    let compteur7 = 0;

    for(let cle in objet) {
        compteur7++;
    }
    return compteur7;
}

const objet1 = {
    nom: "table",
    nombre: 42,
    utile: true,
};

console.log(compterProprietes(objet1));

// EXO 8 : Convertir un tableau d'objets en un tableau de valeurs

let produits = [
    {nom: "stylo", prix: 2},
    {nom: "cahier", prix: 5},
    {nom: "Gomme", prix: 1}
];

function extraireNoms(produits) {
    let nom8= [];

    for(let index in produits) {
        nom8.push(produits[index].nom);
    }
    return nom8;
}

console.log(extraireNoms(produits));

// EXO 9 : Calculer la factorielle d'un nombre

// Version boucle FOR

function factorielle(n) {
let resultat9= 1;

    for(let i = 1; i <= n; i++) {
        resultat9 *= i;
    }
    return resultat9;

}

console.log(factorielle(5));

// version boucle WHILE

function factorielle(n) {
    let resultat91 = 1;
    let i = 1;

    while (i <= n) {
        resultat91 *= i;
        i++;
    }
    return resultat91;
}

console.log(factorielle(6));

// Version récursive

function factorielle(n) {
    if (n ===0) return 1;
    return n * factorielle(n-1);
}

console.log(factorielle(4));

// EXO 10 : Verifier si un tableau est trié en ordre croissant

