function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center font-sans">
      {/* Boutons de navigation vers différentes technologies */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button className="border-2 border-sky-700 px-5 py-2 rounded-2xl hover:bg-sky-900 hover:text-white transition duration-300">
          JavaScript
        </button>
        <button className="border-2 border-green-700 px-5 py-2 rounded-2xl hover:bg-green-900 hover:text-white transition duration-300">
          Python
        </button>
        <button className="border-2 border-orange-500 px-5 py-2 rounded-2xl hover:bg-orange-700 hover:text-white transition duration-300">
          HTML5
        </button>
        <button className="border-2 border-blue-500 px-5 py-2 rounded-2xl hover:bg-blue-800 hover:text-white transition duration-300">
          CSS3
        </button>
        <button className="border-2 border-purple-700 px-5 py-2 rounded-2xl hover:bg-purple-900 hover:text-white transition duration-300">
          ReactJS
        </button>
      </div>

      {/* Section des cours JavaScript */}
      <div className="text-left">
        <h2 className="text-3xl font-bold underline mb-4 text-center text-sky-900">Cours de Base JavaScript</h2>
      <div className="mt-4 text-center">
        <a 
          href="/Tout-sur-le-Javascript.pdf" 
          download 
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Téléchargez le Syllabus
        </a>
      </div>

        {/* 1. Hello World */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">1. Hello World</h3>
        <p className="mb-2 text-gray-700">
          La première chose à apprendre est comment afficher un message dans la console.
        </p>
        <pre className="bg-gray-100 text-left p-3 rounded mb-4 text-gray-800">
{`// Affiche "Hello World" dans la console
console.log("Hello World");`}
        </pre>

        {/* 2. Variables */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">2. Variables</h3>
        <p className="mb-2 text-gray-700">
          Les variables permettent de stocker des valeurs. <code>let</code> est utilisé pour des valeurs modifiables, <code>const</code> pour des constantes.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`let nom = "Jeancy";
const age = 25;
console.log(nom + " a " + age + " ans.");`}
        </pre>

        {/* 3. Types de données */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">3. Types de données</h3>
        <p className="mb-2 text-gray-700">
          JavaScript gère plusieurs types de données : nombres, chaînes de caractères, booléens, null, undefined.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`let number = 10;             // Nombre
let text = "Bonjour";         // Texte
let isAlive = true;           // Booléen
let empty = null;             // Null
let nothing;                  // Undefined

console.log(typeof number, typeof text, typeof isAlive);`}
        </pre>

        {/* 4. Fonctions */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">4. Fonctions</h3>
        <p className="mb-2 text-gray-700">
          Une fonction est un bloc de code réutilisable.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`function saluer(nom) {
  return "Bonjour, " + nom + "!";
}
console.log(saluer("Jeancy"));`}
        </pre>

        {/* 5. If / Else */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">5. Conditions (if / else)</h3>
        <p className="mb-2 text-gray-700">
          Les conditions permettent de faire des choix dans le code.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`let age = 18;
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}`}
        </pre>

        {/* 6. Boucles */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">6. Boucles</h3>
        <p className="mb-2 text-gray-700">
          Les boucles permettent de répéter une action plusieurs fois.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`for (let i = 1; i <= 5; i++) {
  console.log("Compteur: " + i);
}`}
        </pre>

        {/* 7. Objets */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">7. Objets</h3>
        <p className="mb-2 text-gray-700">
          Un objet regroupe des données (propriétés) et des fonctions (méthodes).
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`const personne = {
  nom: "Jeancy",
  age: 26,
  saluer() {
    return "Salut, je suis " + this.nom;
  }
};
console.log(personne.saluer());`}
        </pre>

        {/* 8. Tableaux */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">8. Tableaux</h3>
        <p className="mb-2 text-gray-700">
          Un tableau permet de stocker plusieurs valeurs dans une seule variable.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-gray-800">
{`const fruits = ["Pomme", "Mangue", "Banane"];
fruits.push("Orange"); // Ajoute un fruit
console.log(fruits);`}
        </pre>

        {/* 9. Classes */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">9. Classes</h3>
        <p className="mb-2 text-gray-700">
          Les classes permettent de créer des objets avec un modèle (template).
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-6 text-gray-800">
{`class Animal {
  constructor(nom) {
    this.nom = nom;
  }

  parler() {
    return this.nom + " fait un bruit.";
  }
}

const chien = new Animal("Rex");
console.log(chien.parler());`}
        </pre>

        {/* Mini Projet */}
        <h2 className="text-3xl font-bold underline mb-4 text-center text-green-800">Mini Projet : Liste de Tâches</h2>
        <p className="mb-2 text-gray-700">
          Un petit projet utilisant une classe pour gérer des tâches.
        </p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-sm overflow-x-auto text-gray-800">
{`class ListeTaches {
  constructor() {
    this.taches = [];
  }

  ajouterTache(tache) {
    this.taches.push(tache);
    console.log("Tâche ajoutée :", tache);
  }

  afficherTaches() {
    console.log("Mes Tâches:");
    this.taches.forEach((tache, index) => {
      console.log(index + 1 + ". " + tache);
    });
  }
}

const maListe = new ListeTaches();
maListe.ajouterTache("Étudier JavaScript");
maListe.ajouterTache("Créer un projet");
maListe.afficherTaches();`}
        </pre>
      </div>
    </div>
  );
}

export default HomePage;
