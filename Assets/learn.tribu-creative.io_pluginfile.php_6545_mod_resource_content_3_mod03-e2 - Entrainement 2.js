// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.info(
  "1/ Implémentez une fonction qui prend en paramètre les dimensions de 2 côtés d'un triangle rectangle et retourne la dimension de l'hypoténuse."
);
// let sides = [5, 6];
// Hypoténuse = racine carré de somme des deux côtés.

function getHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

console.log(getHypotenuse(3, 4));

function getHypot(a, b) {
  return Math.hypot(a, b);
}
console.log(getHypot(3, 4));

/* ------------------------------------------------------*/

console.info(
  "2/ Implémentez une fonction qui retourne le nom et le prénom du plus âgé de 2 utilisateurs passés en paramètres parmi les 4 ci-dessous."
);

const user1 = { firstName: "Paul", lastName: "Rick", age: 35 };
const user2 = { firstName: "Samir", lastName: "Ah", age: 22 };
const user3 = { firstName: "Loanne", lastName: "Bourdin", age: 28 };
const user4 = { firstName: "Abdel", lastName: "Dems", age: 44 };

function getOldestUserName(a, b) {
  if (a.age > b.age) {
    return `${a.firstName} ${a.lastName}`;
  }
  return `${b.firstName} ${b.lastName}`;
}
console.log(getOldestUserName(user3, user4));

function getOldestUserName1(a, b) {
  return getFullName(a.age > b.age ? a : b);
}
function getFullName(user) {
  return user.firstName + " " + user.lastName;
}

console.log(getOldestUserName1(user1, user2));

/* ------------------------------------------------------*/

console.info(
  "3/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau de nombres, quelqu'en soit la taille."
);
let table = [30, 2, 5, 10];
function getMax(array) {
  let max;
  for (let v of array) {
    if (max < v) {
      max = v;
    }
    return max;
  }
}
console.log(getMax(table));

/* ------------------------------------------------------*/

console.info(
  "4/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot."
);
// function getObjectInstance(string) {
//   const Counter = {};
// for(const word of string.split(' ')){
//   if (word in)
//
// console.log(getObjectInstance(string));

/* ------------------------------------------------------*/

console.info(
  "5/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres."
);
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomValue(100, 560));

/* ------------------------------------------------------*/

console.info(
  "6/ Implémentez une fonction qui retourne une chaîne de caractère aléatoire composée de chiffres et de lettres en majuscule et minuscule, de la taille passée en paramètre."
);

const ars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function getArs(lenght) {
  let newSentence = [];
  for (let i = 0; i < lenght; i++) {
    // let randomIndex = Math.floor(Math.random() * ars.length);
    const randomIndex = Math.floor(Math.random() * ars.length);
    const randomSentence = ars.charAt(randomIndex);
    newSentence.push(randomSentence);
  }
  return newSentence;
}
console.log(getArs(9));

/* ------------------------------------------------------*/

console.info(
  "Pour les questions suivantes enrichissez l'objet 'newbie' ci-dessous."
);

const newbie = {
  firstName: "Paul",
  lastName: "Bismuth",
  birthdate: "1995-02-14",
  job: "web developer",
  city: "Detroit",
  skills: ["HTML", "CSS"],
  getAge: function () {
    return new Date(Date.now() - new Date(this.birthdate)).getFullYear() - 1970;
  },
  getSkills: function () {
    let skillsPaul = `les compétences de ${this.firstName} ${this.lastName} sont ${this.skills} `;
    return skillsPaul;
  },
  getSkillsJavascript(newskill) {
    return this.skills.push(newskill);
  },
  talk: function () {
    console.log(
      `my name is ${this.firstName} ${this.lastName}, my birthdate is ${this.birthdate}, i am ${this.job}, i live in ${this.city} and my skylls are ${this.skills} `
    );
  },
};

/* ------------------------------------------------------*/

console.info("7/ Implémentez une méthode retournant l'âge de Paul.");

console.log(newbie.getAge());

/* ------------------------------------------------------*/

console.info(
  "8/ Implémentez une méthode retournant un texte listant les compétences de Paul séparées par des virgules."
);

console.log(newbie.getSkills());

/* ------------------------------------------------------*/

console.info(
  "9/ Implémentez une méthode qui ajoute à Paul une compétence passée en paramètre."
);

console.info(
  "Ajoutez la compétence Javascript et utilisez la méthode précédente pour vous assurer du résultat."
);
newbie.getSkillsJavascript("Javascript");
console.log(newbie.skills);

/* ------------------------------------------------------*/

console.info(
  "10/ Implémentez une méthode qui fait parler Paul pour qu'il se présente avec toutes ses caractéristiques. (Nom, prénom, âge, où il vit, son métier, ...)"
);
newbie.talk();
console.log();
