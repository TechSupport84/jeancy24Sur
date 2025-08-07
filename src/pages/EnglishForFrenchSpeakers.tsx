

const EnglishForFrenchSpeakers = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 space-y-20 font-sans text-gray-900">

      {/* Main Title */}
      <h1 className="text-6xl font-extrabold text-center text-blue-800 mb-20">
        Cours d'Anglais Complet pour Francophones
      </h1>

      {/* Chapitre 1 : Introduction à l'anglais */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 1 : Introduction à l'anglais
        </h2>
        <p className="text-lg leading-relaxed">
          Ce cours s'adresse aux francophones souhaitant apprendre l'anglais pas à pas, avec des explications claires, des exemples concrets, des exercices pratiques, et des ressources multimédias.
          L'anglais est une langue internationale essentielle dans le monde professionnel et personnel.
        </p>

        <p className="italic text-gray-700">Exemple simple :</p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`Hello! My name is Jeancy. I am learning English.`}
        </pre>
      </section>

      {/* Chapitre 2 : Alphabet, Prononciation et Sons de base */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 2 : Alphabet, Prononciation et Sons de base
        </h2>
        <p className="text-lg leading-relaxed">
          Familiarisez-vous avec l'alphabet anglais, les sons particuliers, et les différences avec le français.
        </p>

        <h3 className="text-2xl font-semibold mt-6">Alphabet anglais</h3>
        <p>
          L'alphabet anglais comporte 26 lettres, identique au français, mais la prononciation diffère pour plusieurs lettres.
        </p>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm font-mono">
{`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">Sons difficiles pour un francophone</h3>
        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          <li><strong>th</strong> : comme dans <em>think</em> (souffler la langue entre les dents)</li>
          <li><strong>r</strong> roulé différemment du français, plus doux</li>
          <li><strong>h</strong> aspiré, pas muet comme en français</li>
          <li><strong>v</strong> sonore, similaire mais souvent confondu avec <em>w</em></li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">Exemples de prononciation</h3>
        <pre className="bg-gray-100 p-4 rounded overflow-x-auto text-sm font-mono">
{`think   (θɪŋk)  
red     (rɛd)  
hat     (hæt)  
very    (ˈvɛri)`}
        </pre>
      </section>

      {/* Chapitre 3 : Vocabulaire de base */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 3 : Vocabulaire de base
        </h2>
        <p>Voici un vocabulaire courant indispensable pour démarrer :</p>
        <ul className="grid grid-cols-2 gap-x-20 gap-y-3 list-disc pl-8 text-gray-700">
          <li>Hello - Bonjour</li>
          <li>Goodbye - Au revoir</li>
          <li>Thank you - Merci</li>
          <li>Please - S'il vous plaît</li>
          <li>Yes - Oui</li>
          <li>No - Non</li>
          <li>Friend - Ami</li>
          <li>Family - Famille</li>
          <li>Food - Nourriture</li>
          <li>Water - Eau</li>
          <li>House - Maison</li>
          <li>Car - Voiture</li>
          <li>Work - Travail</li>
          <li>School - École</li>
          <li>Book - Livre</li>
          <li>Music - Musique</li>
        </ul>
      </section>

      {/* Chapitre 4 : Verbes de base et conjugaison */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 4 : Verbes de base et conjugaison
        </h2>
        <p>
          Les verbes sont essentiels en anglais. Voici les verbes les plus utilisés, avec leur traduction et conjugaison au présent simple.
        </p>

        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 px-4 py-2">Verbe (Base)</th>
              <th className="border border-gray-300 px-4 py-2">Traduction</th>
              <th className="border border-gray-300 px-4 py-2">Présent simple (I)</th>
              <th className="border border-gray-300 px-4 py-2">Présent simple (He/She/It)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">To be</td>
              <td className="border border-gray-300 px-4 py-2">Être</td>
              <td className="border border-gray-300 px-4 py-2">I am</td>
              <td className="border border-gray-300 px-4 py-2">He/She/It is</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">To have</td>
              <td className="border border-gray-300 px-4 py-2">Avoir</td>
              <td className="border border-gray-300 px-4 py-2">I have</td>
              <td className="border border-gray-300 px-4 py-2">He/She/It has</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">To go</td>
              <td className="border border-gray-300 px-4 py-2">Aller</td>
              <td className="border border-gray-300 px-4 py-2">I go</td>
              <td className="border border-gray-300 px-4 py-2">He/She/It goes</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">To eat</td>
              <td className="border border-gray-300 px-4 py-2">Manger</td>
              <td className="border border-gray-300 px-4 py-2">I eat</td>
              <td className="border border-gray-300 px-4 py-2">He/She/It eats</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-2xl font-semibold mt-8">Conjugaison des verbes réguliers au présent simple</h3>
        <p>
          Pour la plupart des verbes, ajoutez un <code className="bg-blue-100 rounded px-1 py-0.5 font-mono">-s</code> à la 3e personne du singulier.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`I work  
You work  
He/She/It works  
We work  
They work`}
        </pre>
      </section>

      {/* Chapitre 5 : Structures de phrases et conditions */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 5 : Structures de phrases et conditions
        </h2>
        <p>
          Apprenez à construire des phrases affirmatives, négatives, interrogatives, ainsi que des phrases conditionnelles simples.
        </p>

        <h3 className="text-2xl font-semibold mt-6">Phrases affirmatives</h3>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`I like coffee.  
She plays football.  
We study English.`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">Phrases négatives</h3>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`I do not like coffee.  
She does not play football.  
We do not study English.`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">Phrases interrogatives</h3>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`Do you like coffee?  
Does she play football?  
Do we study English?`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">Conditions - If (si)</h3>
        <p>
          Exemple d’une phrase conditionnelle simple:
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`If it rains, I stay home.  
If she studies, she passes the test.`}
        </pre>
      </section>

      {/* Chapitre 6 : Listes et vocabulaire avancé */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 6 : Listes et vocabulaire avancé
        </h2>
        <p>Voici quelques listes de mots importants à connaître :</p>

        <h3 className="text-2xl font-semibold mt-4">Les couleurs</h3>
        <ul className="list-disc pl-8 text-gray-700 space-y-1">
          <li>Red - Rouge</li>
          <li>Blue - Bleu</li>
          <li>Green - Vert</li>
          <li>Yellow - Jaune</li>
          <li>Black - Noir</li>
          <li>White - Blanc</li>
          <li>Orange - Orange</li>
          <li>Pink - Rose</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6">Les nombres</h3>
        <ul className="list-disc pl-8 text-gray-700 space-y-1">
          <li>One - Un</li>
          <li>Two - Deux</li>
          <li>Three - Trois</li>
          <li>Four - Quatre</li>
          <li>Five - Cinq</li>
          <li>Six - Six</li>
          <li>Seven - Sept</li>
          <li>Eight - Huit</li>
          <li>Nine - Neuf</li>
          <li>Ten - Dix</li>
        </ul>
      </section>

      {/* Chapitre 7 : Dictionnaires, Tableaux et Structures */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 7 : Dictionnaires, Tableaux et Structures (en anglais)
        </h2>
        <p>
          En anglais, on utilise souvent des listes (<em>lists</em>) et des dictionnaires (<em>dictionaries</em>) pour organiser les données. Voici des exemples simples en anglais d’utilisation dans la vie quotidienne.
        </p>

        <h3 className="text-2xl font-semibold mt-6">Liste (List)</h3>
        <p>Une liste d’objets ou d’idées :</p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`My shopping list:  
- Apples  
- Bread  
- Milk  
- Eggs`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">Dictionnaire (Dictionary)</h3>
        <p>Un dictionnaire associant des clés et des valeurs :</p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`My phone contacts:  
"John": "555-1234"  
"Sarah": "555-5678"  
"Mike": "555-8765"`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">Tableau (Table)</h3>
        <p>Exemple d’un tableau simple :</p>
        <table className="table-auto w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 px-4 py-2">Nom</th>
              <th className="border border-gray-300 px-4 py-2">Âge</th>
              <th className="border border-gray-300 px-4 py-2">Ville</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Alice</td>
              <td className="border border-gray-300 px-4 py-2">25</td>
              <td className="border border-gray-300 px-4 py-2">Paris</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">Bob</td>
              <td className="border border-gray-300 px-4 py-2">30</td>
              <td className="border border-gray-300 px-4 py-2">Lyon</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Chapitre 8 : Boucles - While / For en anglais simple */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 8 : Boucles - While et For en anglais simple
        </h2>
        <p>En anglais, il est utile de comprendre comment exprimer des répétitions et actions continues.</p>

        <h3 className="text-2xl font-semibold mt-6">While (Tant que)</h3>
        <p>Exemple simple :</p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`While I am tired, I keep working.  
While it rains, we stay inside.`}
        </pre>

        <h3 className="text-2xl font-semibold mt-6">For (Pour / Pendant)</h3>
        <p>Exemple :</p>
        <pre className="bg-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`I study English for two hours every day.  
She works for a big company.`}
        </pre>
      </section>

      {/* Chapitre 9 : Expressions courantes et idiomes */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 9 : Expressions courantes et idiomes anglais
        </h2>
        <p>Les expressions idiomatiques sont importantes pour paraître naturel en anglais.</p>

        <ul className="list-disc pl-8 text-gray-700 space-y-2">
          <li><strong>Break a leg</strong> - Bonne chance</li>
          <li><strong>Piece of cake</strong> - C’est facile</li>
          <li><strong>Hit the books</strong> - Étudier dur</li>
          <li><strong>Under the weather</strong> - Ne pas se sentir bien</li>
          <li><strong>Once in a blue moon</strong> - Très rarement</li>
        </ul>
      </section>

      {/* Chapitre 10 : Projets pratiques */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 10 : Projets pratiques en anglais
        </h2>
        <p>
          Mettez en pratique ce que vous avez appris avec ces projets simples :
        </p>

        {/* Projet 1 */}
        <article className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">
            Projet 1 : Présentez-vous en anglais
          </h3>
          <p className="mb-4 text-gray-700">
            Écrivez un paragraphe ou une courte présentation orale en anglais avec votre nom, âge, métier, hobbies et famille.
          </p>
          <pre className="bg-white p-4 rounded border border-blue-300 text-sm font-mono overflow-x-auto">
{`Hello, my name is Jeancy. I am 26 years old. I work as a web developer. I like football and music. I have a big family.`}
          </pre>
        </article>

        {/* Projet 2 */}
        <article className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">
            Projet 2 : Créez une liste de courses en anglais
          </h3>
          <p className="mb-4 text-gray-700">
            Faites une liste d’achats typique avec des noms d’objets en anglais.
          </p>
          <pre className="bg-white p-4 rounded border border-blue-300 text-sm font-mono overflow-x-auto">
{`Shopping list:  
- Bread  
- Milk  
- Cheese  
- Apples  
- Eggs`}
          </pre>
        </article>

        {/* Projet 3 */}
        <article className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow">
          <h3 className="text-2xl font-semibold mb-3 text-blue-700">
            Projet 3 : Écrivez une courte histoire
          </h3>
          <p className="mb-4 text-gray-700">
            Rédigez une petite histoire simple en anglais en utilisant les verbes et vocabulaire appris.
          </p>
          <pre className="bg-white p-4 rounded border border-blue-300 text-sm font-mono overflow-x-auto">
{`Once upon a time, there was a little cat named Mimi. Mimi liked to play in the garden. One day, she found a ball.`}
          </pre>
        </article>
      </section>

      {/* Chapitre 11 : Vidéos et ressources */}
      <section className="space-y-10">
        <h2 className="text-4xl font-bold border-b-4 border-blue-700 pb-3">
          Chapitre 11 : Vidéos et ressources pour apprendre l'anglais
        </h2>

        <p>
          Voici quelques vidéos YouTube pour renforcer votre apprentissage avec des explications et exercices en français et anglais :
        </p>

        {/* Video 1 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/ybTSQ7cePE8"
            title="Learn English for French Speakers - Basic Course"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/UCOw8lZvGSA"
            title="English Grammar for French Speakers"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/m_VJCVfpEjE"
            title="Vocabulary Building for French Speakers"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        <p className="mt-4 text-gray-700 italic">
          Sources complémentaires :
          <ul className="list-disc pl-6 mt-2">
            <li>
              <a href="https://www.bbc.co.uk/learningenglish" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">
                BBC Learning English
              </a>
            </li>
            <li>
              <a href="https://learnenglish.britishcouncil.org/" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">
                British Council Learn English
              </a>
            </li>
            <li>
              <a href="https://www.cambridge.org/fr/english" target="_blank" rel="noreferrer" className="text-blue-600 underline hover:text-blue-800">
                Cambridge English
              </a>
            </li>
          </ul>
        </p>
      </section>

    </div>
  );
};

export default EnglishForFrenchSpeakers;
