function LearnPython() {
  const lessons = [
    {
      title: "1. Introduction à Python",
      description: "Découverte de Python, son histoire, ses avantages et où l'utiliser.",
      example: `print("Bonjour, Python !")`
    },
    {
      title: "2. Variables et types de données",
      description: "Apprenez à créer et manipuler des variables, nombres, chaînes, booléens.",
      example: `nom = "Alice"\nage = 25\nprint(nom, age)`
    },
    {
      title: "3. Opérateurs",
      description: "Utilisation des opérateurs mathématiques, logiques et de comparaison.",
      example: `a = 10\nb = 3\nprint(a + b, a > b)`
    },
    {
      title: "4. Structures conditionnelles",
      description: "Prenez des décisions avec if, elif, else.",
      example: `age = 18\nif age >= 18:\n    print("Majeur")\nelse:\n    print("Mineur")`
    },
    {
      title: "5. Boucles (for, while)",
      description: "Répétez des actions avec les boucles for et while.",
      example: `for i in range(3):\n    print("Tour", i)`
    },
    {
      title: "6. Fonctions",
      description: "Créez des blocs de code réutilisables avec les fonctions.",
      example: `def dire_bonjour(nom):\n    print("Bonjour", nom)\ndire_bonjour("Alice")`
    },
    {
      title: "7. Listes, tuples et dictionnaires",
      description: "Structures pour stocker plusieurs données ensemble.",
      example: `fruits = ["pomme", "banane"]\nprint(fruits[0])`
    },
    {
      title: "8. Gestion des erreurs",
      description: "Utilisez try/except pour éviter les plantages.",
      example: `try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Division par zéro!")`
    },
    {
      title: "9. Modules et packages",
      description: "Réutilisez du code avec les modules intégrés ou personnalisés.",
      example: `import math\nprint(math.sqrt(16))`
    },
    {
      title: "10. Programmation orientée objet",
      description: "Organisez votre code avec des classes et objets.",
      example: `class Personne:\n    def __init__(self, nom):\n        self.nom = nom\n\np = Personne("Jean")\nprint(p.nom)`
    },
    {
      title: "11. Fichiers en Python",
      description: "Lire et écrire des fichiers avec open().",
      example: `with open("fichier.txt", "w") as f:\n    f.write("Bonjour fichier")`
    },
    {
      title: "12. Compréhensions de listes",
      description: "Créez des listes rapidement avec une syntaxe élégante.",
      example: `carrés = [x**2 for x in range(5)]\nprint(carrés)`
    },
    {
      title: "13. Expressions lambda",
      description: "Fonctions anonymes utiles pour des actions simples.",
      example: `addition = lambda x, y: x + y\nprint(addition(2, 3))`
    },
    {
      title: "14. Modules intégrés importants",
      description: "Apprenez à utiliser des modules puissants comme datetime, os, etc.",
      example: `import datetime\nprint(datetime.datetime.now())`
    },
    {
      title: "15. Installation de bibliothèques avec pip",
      description: "Ajoutez des bibliothèques externes avec pip.",
      example: `# Dans le terminal :\npip install requests`
    },
    {
      title: "16. Projets pratiques simples",
      description: "Appliquez vos connaissances dans des petits projets.",
      example: `# Exemple : mini-calculatrice\nx = int(input("x: "))\ny = int(input("y: "))\nprint("Somme:", x + y)`
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold text-indigo-700">Cours de base Python</h2>
        <p className="text-gray-600 text-lg">Débutez avec Python grâce à ce parcours structuré.</p>
      </header>

      <section className="space-y-6">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">{lesson.title}</h3>
            <p className="text-gray-700 mb-3">{lesson.description}</p>
            <pre className="bg-gray-100 text-gray-800 p-4 rounded text-sm overflow-x-auto">
              <code>{lesson.example}</code>
            </pre>
          </div>
        ))}
      </section>
    </div>
  );
}

export default LearnPython;
