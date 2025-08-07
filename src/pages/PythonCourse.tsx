import React from "react";

const PythonCourse = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-20 font-sans text-gray-900">
      <h1 className="text-5xl font-extrabold text-center text-green-700 mb-16">
        Cours Complet Python
      </h1>

      {/* Chapitre 1: Introduction à Python */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 1: Introduction à Python
        </h2>
        <p className="text-lg leading-relaxed">
          Python est un langage de programmation interprété, facile à apprendre et
          polyvalent, utilisé pour de nombreux domaines comme le développement web,
          l'automatisation, la science des données, etc.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`# Affiche un message à l'écran
print("Bonjour le monde")`}
        </pre>
      </section>

      {/* Chapitre 2: Variables et types de données */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 2: Variables et types de données
        </h2>
        <p className="text-lg leading-relaxed">
          Les variables servent à stocker des données, comme des nombres, des chaînes
          de caractères, des booléens, des listes ou des dictionnaires.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`nombre = 42           # entier (int)
pi = 3.1416           # nombre flottant (float)
nom = "Jeancy"        # chaîne de caractères (str)
est_actif = True      # booléen (bool)
fruits = ["pomme", "banane", "cerise"]  # liste (list)
infos = {"nom": "Jeancy", "age": 26}    # dictionnaire (dict)`}
        </pre>
      </section>

      {/* Chapitre 3: Conditions (if, else, elif) */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 3: Conditions (if, else, elif)
        </h2>
        <p className="text-lg leading-relaxed">
          Les conditions permettent d’exécuter du code selon que certaines conditions
          soient vraies ou fausses.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`age = 18

if age < 18:
    print("Mineur")
elif age == 18:
    print("Juste majeur")
else:
    print("Adulte")`}
        </pre>
      </section>

      {/* Chapitre 4: Listes */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 4: Listes
        </h2>
        <p className="text-lg leading-relaxed">
          Les listes sont des collections ordonnées modifiables d’éléments.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`fruits = ["pomme", "banane", "cerise"]

print(fruits[0])  # affiche "pomme"

fruits.append("orange")  # ajoute un élément
print(fruits)

fruits.remove("banane")  # supprime un élément
print(fruits)`}
        </pre>
      </section>

      {/* Chapitre 5: Dictionnaires */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 5: Dictionnaires
        </h2>
        <p className="text-lg leading-relaxed">
          Les dictionnaires stockent des paires clé-valeur, utiles pour représenter
          des objets avec des attributs.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`personne = {
  "nom": "Jeancy",
  "age": 26,
  "ville": "Kinshasa"
}

print(personne["nom"])  # affiche "Jeancy"

personne["email"] = "jeancy@example.com"  # ajoute une nouvelle clé-valeur
print(personne)`}
        </pre>
      </section>

      {/* Chapitre 6: Boucles for */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 6: Boucles for
        </h2>
        <p className="text-lg leading-relaxed">
          La boucle for permet d’itérer sur des listes, chaînes, ou toute autre séquence.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`fruits = ["pomme", "banane", "cerise"]

for fruit in fruits:
    print(fruit)

# Itérer avec index
for i, fruit in enumerate(fruits):
    print(f"{i} - {fruit}")`}
        </pre>
      </section>

      {/* Chapitre 7: Boucle while */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 7: Boucle while
        </h2>
        <p className="text-lg leading-relaxed">
          La boucle while répète tant qu’une condition est vraie.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`compteur = 0

while compteur < 5:
    print("Compteur:", compteur)
    compteur += 1
`}
        </pre>
      </section>

      {/* Chapitre 8: Affichage formaté en table */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 8: Affichage formaté en table
        </h2>
        <p className="text-lg leading-relaxed">
          Vous pouvez afficher des données sous forme de tableau avec des formats
          alignés pour plus de lisibilité.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`donnees = [
    {"nom": "Alice", "age": 30},
    {"nom": "Bob", "age": 25},
    {"nom": "Claire", "age": 28}
]

print(f"{'Nom':<10} {'Age':>3}")
print("-" * 15)

for personne in donnees:
    print(f"{personne['nom']:<10} {personne['age']:>3}")`}
        </pre>
      </section>

      {/* Chapitre 9: Fonctions */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 9: Fonctions
        </h2>
        <p className="text-lg leading-relaxed">
          Les fonctions encapsulent des blocs de code réutilisables.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`def saluer(nom):
    print(f"Bonjour, {nom} !")

saluer("Jeancy")`}
        </pre>
      </section>

      {/* Chapitre 10: Classes et objets */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Chapitre 10: Classes et objets
        </h2>
        <p className="text-lg leading-relaxed">
          La programmation orientée objet vous permet de modéliser des entités avec
          des attributs et des comportements.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`class Personne:
    def __init__(self, nom, age):
        self.nom = nom
        self.age = age

    def se_presenter(self):
        print(f"Je m'appelle {self.nom} et j'ai {self.age} ans.")

p = Personne("Jeancy", 26)
p.se_presenter()`}
        </pre>
      </section>

      {/* Section Projets */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold border-b-4 border-green-700 pb-2 text-green-800">
          Projets Python
        </h2>
        <p className="text-lg leading-relaxed">
          Ces projets vous aideront à mettre en pratique les notions apprises :
        </p>

        {/* Projet 1: Calculatrice simple */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            Projet 1 : Calculatrice simple
          </h3>
          <p className="mb-4 text-gray-700">
            Créez un programme qui prend deux nombres et affiche les résultats des
            opérations de base : addition, soustraction, multiplication, division.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-green-200">
{`def addition(a, b):
    return a + b

def soustraction(a, b):
    return a - b

def multiplication(a, b):
    return a * b

def division(a, b):
    if b != 0:
        return a / b
    else:
        return "Division par zéro impossible"

x = float(input("Entrez le premier nombre: "))
y = float(input("Entrez le deuxième nombre: "))

print("Addition:", addition(x, y))
print("Soustraction:", soustraction(x, y))
print("Multiplication:", multiplication(x, y))
print("Division:", division(x, y))`}
          </pre>
        </article>

        {/* Projet 2: Gestionnaire de contacts */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            Projet 2 : Gestionnaire de contacts
          </h3>
          <p className="mb-4 text-gray-700">
            Créez une classe Contact avec nom et téléphone, puis gérez une liste de
            contacts avec affichage.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-green-200">
{`class Contact:
    def __init__(self, nom, telephone):
        self.nom = nom
        self.telephone = telephone

    def afficher(self):
        print(f"{self.nom} - {self.telephone}")

contacts = []
contacts.append(Contact("Alice", "0123456789"))
contacts.append(Contact("Bob", "0987654321"))

for contact in contacts:
    contact.afficher()`}
          </pre>
        </article>

        {/* Projet 3: Jeu de devinette */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-green-100">
          <h3 className="text-2xl font-semibold mb-3 text-green-600">
            Projet 3 : Jeu de devinette
          </h3>
          <p className="mb-4 text-gray-700">
            Programme un jeu où l’utilisateur doit deviner un nombre entre 1 et 20.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-green-200">
{`import random

nombre_secret = random.randint(1, 20)
essais = 0
trouve = False

while not trouve:
    essai = int(input("Devinez le nombre (1-20): "))
    essais += 1

    if essai == nombre_secret:
        print(f"Bravo ! Vous avez deviné en {essais} essais.")
        trouve = True
    elif essai < nombre_secret:
        print("Trop bas !")
    else:
        print("Trop haut !")`}
          </pre>
        </article>
      </section>

      {/* Chapitre final: Projet final */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-4 border-green-500 pb-2">
          Projet Final
        </h2>
        <p className="text-lg leading-relaxed">
          Développez une application Python intégrant classes, fonctions, conditions,
          boucles, listes et dictionnaires. Par exemple, un gestionnaire de tâches ou
          un carnet d'adresses complet.
        </p>
        <p className="text-lg font-semibold">
          Ce projet final consolidera toutes vos compétences en Python.
        </p>
      </section>
    </div>
  );
};

export default PythonCourse;
