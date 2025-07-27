function HomePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        <button className="border-2 border-sky-700 px-5 py-2 rounded-2xl hover:bg-sky-900 hover:text-white transition duration-300">
          JavaScript
        </button>
        <button className="border-2 border-green-700 px-5 py-2 rounded-2xl hover:bg-green-900 hover:text-white transition duration-300">
          Python
        </button>
        <button className="border-2 border-orange-500 px-5 py-2 rounded-2xl hover:bg-orange-700 hover:text-white transition duration-300">
          Html5
        </button>
        <button className="border-2 border-blue-500 px-5 py-2 rounded-2xl hover:bg-blue-800 hover:text-white transition duration-300">
          CSS5
        </button>
        <button className="border-2 border-purple-700 px-5 py-2 rounded-2xl hover:bg-purple-900 hover:text-white transition duration-300">
          Reactjs
        </button>
      </div>

      {/* Lesson Section */}
      <div className="text-left">
        <h2 className="text-3xl font-bold underline mb-4 text-center">JavaScript Basics</h2>

        {/* Hello World */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">1. Hello World</h3>
        <p>La toute première ligne de code :</p>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`console.log("Hello World");`}
        </pre>

        {/* Variables */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">2. Variables</h3>
        <p>Créer des variables avec <code>let</code> et <code>const</code> :</p>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`let name = "Jeancy";
const age = 25;
console.log(name + " a " + age + " ans.");`}
        </pre>

        {/* Data Types */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">3. Types de données</h3>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`let number = 10;
let text = "Bonjour";
let isAlive = true;
let empty = null;
let nothing;

console.log(typeof number, typeof text, typeof isAlive);`}
        </pre>

        {/* Functions */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">4. Fonctions</h3>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`function greet(name) {
  return "Bonjour, " + name + "!";
}
console.log(greet("Jeancy"));`}
        </pre>

        {/* If / Else */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">5. If / Else</h3>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`let age = 18;
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}`}
        </pre>

        {/* Loops */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">6. Boucles</h3>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`for (let i = 1; i <= 5; i++) {
  console.log("Compteur: " + i);
}`}
        </pre>

        {/* Objects */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">7. Objets</h3>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`const person = {
  name: "Jeancy",
  age: 26,
  greet() {
    return "Salut, je suis " + this.name;
  }
};
console.log(person.greet());`}
        </pre>

        {/* Arrays */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">8. Tableaux (Arrays)</h3>
        <pre className="bg-gray-100 p-3 rounded mb-4">
{`const fruits = ["Pomme", "Mangue", "Banane"];
fruits.push("Orange");
console.log(fruits);`}
        </pre>

        {/* Classes */}
        <h3 className="text-2xl font-semibold mb-2 text-sky-800">9. Classes</h3>
        <pre className="bg-gray-100 p-3 rounded mb-6">
{`class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " fait un bruit.";
  }
}

const chien = new Animal("Rex");
console.log(chien.speak());`}
        </pre>

        {/* Simple Project */}
        <h2 className="text-3xl font-bold underline mb-4 text-center">Mini Projet : Liste de Tâches</h2>
        <p>Un petit projet JavaScript qui utilise des fonctions et classes :</p>
        <pre className="bg-gray-100 p-3 rounded mb-4 text-sm overflow-x-auto">
{`class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
    console.log("Tâche ajoutée :", task);
  }

  showTasks() {
    console.log("Mes Tâches:");
    this.tasks.forEach((task, index) => {
      console.log(index + 1 + ". " + task);
    });
  }
}

const maListe = new TodoList();
maListe.addTask("Étudier JavaScript");
maListe.addTask("Créer un projet");
maListe.showTasks();`}
        </pre>
      </div>
    </div>
  );
}

export default HomePage;
