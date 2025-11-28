// EX 01 : Déclaration et modif variable

let nom = "Jean";
let age = 25;

console.log(age, age=30);

// EX 02 : Opérations mathématiques

let a = 10;
let b = 20;
let somme = a + b;

console.log(somme, a * b)

// EX 03 : Conditions de Base

// let n3 = prompt ("choisir un nombre", 100);

// if (n3 > 10) {
//     console.log("Plus grand que 10")
// } else if (n3 <= 10) {
//     console.log("Plus petit ou égal à 10")
// } else {
//     console.log("Mauvais nombre")
// }

// EX 04 : Pair ou impair

// let n4 = 11;

// if (n4 % 2 === 0) {
//     console.log("Ce nombre est pair")
// } else {
//     console.log("Ce nombre est impair")
// }

// EX 05 : Vérification âge

// let age5 = prompt ("quel age as-tu ?", 100);

// if (age5 < 18) {
//     console.log("Tu es mineur")
// } else if (age5 <=65) {
//     console.log("tu es adulte")
// } else {
//     console.log("tu es senior")
// }

// EX 06 : Boucle for

for (let n6=0; n6<=10; n6=n6+1) {
    console.log("compteur", n6) 
}

// EX 07 Table de multiplication

// Solution 1

// let n7 = prompt ("choisis un nombre entre 1 et 9", 9);

// console.log(n7, "x 0 =", n7 * 0);
// console.log(n7, "x 1 =", n7 * 1);
// console.log(n7, "x 2 =", n7 * 2);
// console.log(n7, "x 3 =", n7 * 3);
// console.log(n7, "x 4 =", n7 * 4);
// console.log(n7, "x 5 =", n7 * 5);
// console.log(n7, "x 6 =", n7 * 6);
// console.log(n7, "x 7 =", n7 * 7);
// console.log(n7, "x 8 =", n7 * 8);
// console.log(n7, "x 9 =", n7 * 9);
// console.log(n7, "x 10 =", n7 * 10);

// solution 2

// let n7 = prompt ("choisis un nombre entre 1 et 9", 9)

// for(let i = 0; i<=10; i++) {
//     const result = i * n7;
//     console.log(n7 + "x" + i + "=" + result)
// }

// EX 08 Somme des nombres

let suite = [];
for(let n8=1;n8<=100;n8=n8+1) {
    suite.push(n8);
}

console.log("suite de nombres de 1 à 100", suite);

let somme8 = suite.reduce((acc, val) => acc + val, 0);

console.log("somme des nombres de 1 à 100 :", somme8);

// EX 09 Boucle While

// let tirage9 = Math.floor(Math.random() * 10) + 1;
// let n9 = Number(prompt("devine un nombre entre 1 et 10", 10));

// while(n9 !== tirage9) {
//     n9 = Number(prompt("Essaye encore !")); }
    
// console.log("bravo !")

// EXO 10 Liste des nombres pairs

for(let n10=2;n10<=50;n10+2) {
    console.log(n10);
}

for(let n10=1;n10<=50;n10++) {
    if(n10 % 2 === 0) {
        console.log(n10);
    }
}

// EXO 11 Compte à rebours

for(let n11=10;n11>=0;n11=n11-1) {
    console.log(n11);
}

console.log(n11=0, "C'est terminé !");

// EXO 12 Mini calculatrice

// let n12 = prompt("insère une opération de ton choix: ex 4+5");
// let resultat = eval(n12);

// console.log("résultat : " + resultat);


// EXO 13 Trouver le plus grand nombre

const n13 = [12124, 56, 35, 2956, 22, 2020];

let max = n13[0];

for (let i=1; i<n13.length;i++) {
    if (n13[i] > max) {
        max = n13[i];
    }
}

console.log(max);

// for (let index = 0; index < n13.length; index++) {
// console.log(n13[index]);
// }

// for (let index = 0; index < n13.length; index++) {
// n13[index] = n13[index] + 1;
// }

// console.log(n13)

// if(demo[0]>demo[1];)

// console.log(eleves[i]);