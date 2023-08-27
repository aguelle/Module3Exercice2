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

function getOlder(a, b) {
  if (a.age > b.age) {
    return `${a.firstName} ${a.lastName}`;
  }
  return `${b.firstName} ${b.lastName}`;
}
console.log(getOlder(user3, user4));

/* ------------------------------------------------------*/

console.info(
  "3/ Implémentez une fonction qui retourne la valeur la plus grande d'un tableau de nombres, quelqu'en soit la taille."
);
let table = [1, 2, 5, 10, 20];
function getMax(array) {
  let max;
  for (let v of array) {
    max = Math.max(v);
  }
  return max;
}
console.log(getMax(table));

/* ------------------------------------------------------*/

console.info(
  "4/ Implémentez une fonction qui prend en paramètre un texte et retourne un objet comptant le nombre d'occurence de chaque mot."
);
let texte = "ceci est un texte";

function getObjectInstance(string) {
  let Counter = {};
  //     let texte ="ceci est un texte";
  // let string = "lorem lorem lorem lorem lorem";
  // function getWordNumber(texte){
  //   return texte.split(' ').length
  // }

  // console.log(getWordNumber(string));
  return;
}

// console.log(getObjectInstance(string));

/* ------------------------------------------------------*/

console.info(
  "5/ Implémentez une fonction qui retourne une valeur entière alétoire comprise entre 2 valeurs passées en paramètres."
);
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
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
console.log();
