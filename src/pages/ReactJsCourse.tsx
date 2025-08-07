import React from "react";

const ReactJsCourse = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-20 font-sans text-gray-900">
      <h1 className="text-5xl font-extrabold text-center text-blue-600 mb-16">
        Cours Complet ReactJS
      </h1>

      {/* Chapitre 1: Introduction à ReactJS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 1: Introduction à ReactJS
        </h2>
        <p className="text-lg leading-relaxed">
          ReactJS est une bibliothèque JavaScript pour construire des interfaces utilisateur.  
          Elle utilise des composants pour créer des UI réutilisables et efficaces.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`// Exemple simple de composant React
import React from 'react';

function Bonjour() {
  return <h1>Bonjour le monde!</h1>;
}

export default Bonjour;`}
        </pre>
      </section>

      {/* Chapitre 2: JSX */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 2: JSX
        </h2>
        <p className="text-lg leading-relaxed">
          JSX est une extension syntaxique qui ressemble à du HTML mais s’intègre dans le JavaScript.  
          Il permet de décrire l’interface utilisateur de façon déclarative.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`const element = <h1 className="titre">Bonjour, JSX!</h1>;

function App() {
  return element;
}`}
        </pre>
      </section>

      {/* Chapitre 3: Composants et Props */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 3: Composants et Props
        </h2>
        <p className="text-lg leading-relaxed">
          Les composants React sont des fonctions ou classes qui retournent des éléments JSX.  
          Les <code>props</code> sont des paramètres passés aux composants pour personnaliser leur contenu.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`function Bienvenue(props) {
  return <h2>Bienvenue, {props.nom}!</h2>;
}

function App() {
  return <Bienvenue nom="Jeancy" />;
}`}
        </pre>
      </section>

      {/* Chapitre 4: State et gestion d’état */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 4: State et gestion d’état
        </h2>
        <p className="text-lg leading-relaxed">
          Le state est un objet local à un composant qui peut changer au fil du temps et déclencher un re-render.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`import React, { useState } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
    </>
  );
}

export default Compteur;`}
        </pre>
      </section>

      {/* Chapitre 5: Événements et gestion des événements */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 5: Événements et gestion des événements
        </h2>
        <p className="text-lg leading-relaxed">
          React gère les événements comme en JavaScript mais avec une syntaxe camelCase.  
          On peut passer des fonctions pour gérer les interactions utilisateur.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`function Bouton() {
  function handleClick() {
    alert('Bouton cliqué !');
  }

  return <button onClick={handleClick}>Cliquez-moi</button>;
}`}
        </pre>
      </section>

      {/* Chapitre 6: Listes et clés */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 6: Listes et clés
        </h2>
        <p className="text-lg leading-relaxed">
          On peut afficher des listes dynamiques en React avec la méthode <code>map()</code>.  
          Chaque élément doit avoir une clé unique pour optimiser le rendu.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`const noms = ['Alice', 'Bob', 'Charlie'];

function Liste() {
  return (
    <ul>
      {noms.map((nom, index) => (
        <li key={index}>{nom}</li>
      ))}
    </ul>
  );
}`}
        </pre>
      </section>

      {/* Chapitre 7: Effets de bord avec useEffect */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 7: Effets de bord avec useEffect
        </h2>
        <p className="text-lg leading-relaxed">
          Le hook <code>useEffect</code> permet d’exécuter du code lors du montage, mise à jour, ou démontage d’un composant (ex: récupération de données).
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`import React, { useState, useEffect } from 'react';

function Donnees() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Chargement...</p>;

  return <div>{JSON.stringify(data)}</div>;
}`}
        </pre>
      </section>

      {/* Chapitre 8: Formulaires */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 8: Formulaires
        </h2>
        <p className="text-lg leading-relaxed">
          React permet de gérer les formulaires de façon contrôlée en liant les valeurs aux états.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`import React, { useState } from 'react';

function Formulaire() {
  const [texte, setTexte] = useState('');

  function handleChange(event) {
    setTexte(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert('Texte soumis : ' + texte);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={texte} onChange={handleChange} />
      <button type="submit">Envoyer</button>
    </form>
  );
}`}
        </pre>
      </section>

      {/* Chapitre 9: Routing avec React Router (concept de base) */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2">
          Chapitre 9: Routing avec React Router
        </h2>
        <p className="text-lg leading-relaxed">
          React Router permet de gérer la navigation entre différentes pages dans une application React.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Accueil() {
  return <h2>Page d'accueil</h2>;
}

function Contact() {
  return <h2>Page Contact</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}`}
        </pre>
      </section>

      {/* Section Projets */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-700 pb-2 text-blue-800">
          Projets ReactJS
        </h2>
        <p className="text-lg leading-relaxed">
          Voici des projets pour mettre en pratique vos connaissances ReactJS :
        </p>

        {/* Projet 1: Compteur interactif */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">
            Projet 1 : Compteur interactif
          </h3>
          <p className="mb-4 text-gray-700">
            Créez un composant compteur avec des boutons pour incrémenter et décrémenter.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-blue-200">
{`function Compteur() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
}`}
          </pre>
        </article>

        {/* Projet 2: Liste de tâches */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">
            Projet 2 : Liste de tâches (To-Do List)
          </h3>
          <p className="mb-4 text-gray-700">
            Créez une application pour ajouter, afficher et supprimer des tâches.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-blue-200">
{`function TodoList() {
  const [tasks, setTasks] = React.useState([]);
  const [input, setInput] = React.useState('');

  function addTask() {
    if(input.trim()) {
      setTasks([...tasks, input.trim()]);
      setInput('');
    }
  }

  function removeTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task} <button onClick={() => removeTask(i)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </>
  );
}`}
          </pre>
        </article>

        {/* Projet 3: Mini blog avec routing */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-blue-100">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">
            Projet 3 : Mini blog avec React Router
          </h3>
          <p className="mb-4 text-gray-700">
            Créez une application avec plusieurs pages : accueil, articles, et contact.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-blue-200">
{`import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Accueil() {
  return <h2>Accueil du blog</h2>;
}

function Articles() {
  return <h2>Liste des articles</h2>;
}

function Contact() {
  return <h2>Contactez-nous</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Accueil</Link> | <Link to="/articles">Articles</Link> | <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}`}
          </pre>
        </article>
      </section>

      {/* Chapitre final: Projet final */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-4 border-blue-600 pb-2">
          Projet Final
        </h2>
        <p className="text-lg leading-relaxed">
          Créez une application React complète incluant un gestionnaire de tâches, navigation avec React Router, et un design responsive.
        </p>
        <p className="text-lg font-semibold">
          Ce projet vous permettra de mettre en pratique toutes les notions apprises.
        </p>
      </section>
    </div>
  );
};

export default ReactJsCourse;
