// BASE 0

// EXO 1 : déclarer variable de différent type :

let nom1 = "Jean";
let age1 = 25;

console.log(age1);

age1 = 30;

console.log(age1);

// EXO 2 : opération mathématique :

let a = 10;
let b = 25;

let somme = a * b;

console.log(somme);

// EXO 3 : conditions de Base

// let n1 = prompt("choisis un nombre ?", 100);
// n1 = Number(n1);

// if(n1 > 10) {
//     console.log("Le nombre est supérieur à 10");
// } else if (n1 <= 10) {
//     console.log("le nombre est inférieur à 10");
// }


// EXO 4 : Pair ou impair

let n4 = 44;

if(n4 % 2 === 0) {
    console.log(n4, "ce nombre est pair");
} else if (n4 % 2 !== 0) {
    console.log(n4, "ce nombre est impair");
}

// EXO 5 : Verification age

// let age5 = prompt("quel age as tu ?", 100);
// age5 = Number(age5);

// if(age5 < 18) {
//     console.log("Tu es mineur");
// } else if (age5 < 65) {
//     console.log("tu es adulte");
// } else {
//     console.log("tu es senior");
// }

// EXO 6 : Boucle For

let n6 = 11;

for(let i = 0; i < n6; i++) {
    console.log("compteur" + i);
}

// EXO 7 : table de multiplication 

// let n7 = prompt("choisi un nombre entre 1 et 9", 10)

// n7 = Number(n7);

// for(let i = 0; i < 10 ; i++) {
//     console.log(`${n7} x ${i} = `, n7 * i);
// }

// EXO 8 : somme des nombres de 1 à 100

let somme8 = 0;

for(let n8 = 1; n8 <= 100; n8++) {
    somme8 = somme8 + n8; 
    // ou somme8 =+ n8 
}

    console.log("somme des nombres de 1 à 100 :", somme8);

// EXO 9 : boucle while

// let n9 = Number(prompt("devine le nombre entre 1 et 10", 10));

// let t9 = Math.floor(Math.random() *10) + 1;

// while(n9 !== t9) {
//     n9 = Number(prompt("Essaye encore !"));
// }

// console.log(`bravo ! ${n9} = ${t9}`);

// EXO 10 : liste des nombre pairs

for(let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
    console.log(i); }
}

// EXO 13 : trouver le plus grand nombres

// const t13 = [12, 56, 89, 118];

// let max = t13[0];

// for(let i = 1; i<t13.length; i++) {
// if (t13[i] > max) {
//     max = t13[i];
// }
// }

// console.log(`le nombre le plus grand est ${max}`);

// EXO 14 : realiser un tirage random de 50 nombres :

let t14 = [];

for (let i = 0; i<50; i++) {
    let n14 = Math.floor(Math.random() * 100) + 1;
    t14.push(n14);
}

console.log(t14);

t14.sort((a, b) => a - b);

console.log(`tableau trié : ${t14}`);

let max = t14[1];

for(let i = 1; i<t14.length; i++) {
    if (t14[i] > max) {
        max = t14[i];
    }
}

console.log(`le nombre le plus grand est ${max}`);