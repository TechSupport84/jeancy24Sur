
const Css3Course = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-20 font-sans text-gray-900">
      <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-16">
        Cours Complet CSS3
      </h1>

      {/* Chapitre 1: Introduction à CSS3 */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 1: Introduction à CSS3
        </h2>
        <p className="text-lg leading-relaxed">
          CSS3 est la dernière évolution du langage CSS qui permet de styliser les pages
          web, en définissant la mise en forme, la disposition, les couleurs, les
          animations, et bien plus encore.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Exemple simple de CSS3 */
body {
  background-color: #f9fafb;
  font-family: Arial, sans-serif;
  color: #333;
}

h1 {
  color: #6b46c1;
}`}
        </pre>
      </section>

      {/* Chapitre 2: Sélecteurs CSS */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 2: Sélecteurs CSS
        </h2>
        <p className="text-lg leading-relaxed">
          Les sélecteurs CSS permettent de cibler les éléments HTML à styliser selon
          leur type, classe, identifiant, attributs, et leur position dans la page.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Sélecteur de type */
p {
  color: blue;
}

/* Sélecteur de classe */
.highlight {
  background-color: yellow;
}

/* Sélecteur d'identifiant */
#menu {
  font-weight: bold;
}

/* Sélecteur d'attribut */
input[type="text"] {
  border: 1px solid #ccc;
}`}
        </pre>
      </section>

      {/* Chapitre 3: Modèle de boîte (Box Model) */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 3: Modèle de boîte (Box Model)
        </h2>
        <p className="text-lg leading-relaxed">
          Chaque élément HTML est une boîte composée de marges, bordures, paddings et
          contenu. Comprendre le box model est essentiel pour maîtriser la mise en page.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`div {
  width: 200px;
  padding: 10px;
  border: 5px solid black;
  margin: 20px;
}`}

{/* Cela crée une boîte totale de 250px (200 + 2*10 + 2*5) */}
        </pre>
      </section>

      {/* Chapitre 4: Couleurs et arrière-plans */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 4: Couleurs et arrière-plans
        </h2>
        <p className="text-lg leading-relaxed">
          CSS3 permet d'utiliser des couleurs via noms, hexadécimal, RGB, RGBA (avec
          transparence), et de définir des images ou dégradés en arrière-plan.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Couleur de fond avec transparence */
.box {
  background-color: rgba(255, 0, 0, 0.5);
}

/* Dégradé linéaire */
.gradient {
  background: linear-gradient(to right, #6b46c1, #b794f4);
}

/* Image de fond */
.header {
  background-image: url('image.jpg');
  background-size: cover;
  background-position: center;
}`}
        </pre>
      </section>

      {/* Chapitre 5: Texte et polices */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 5: Texte et polices
        </h2>
        <p className="text-lg leading-relaxed">
          CSS3 offre des propriétés pour personnaliser les polices, tailles, espacements,
          alignements et décorations du texte.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`p {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #2d3748;
  text-align: justify;
  letter-spacing: 0.05em;
  text-decoration: underline;
}`}
        </pre>
      </section>

      {/* Chapitre 6: Flexbox */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 6: Flexbox
        </h2>
        <p className="text-lg leading-relaxed">
          Flexbox est un module puissant pour créer des mises en page flexibles et
          adaptatives, en alignant et distribuant l'espace entre les éléments.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Conteneur flex */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Élément flex */
.item {
  flex-grow: 1; /* prend l'espace disponible */
  margin: 10px;
}`}
        </pre>
      </section>

      {/* Chapitre 7: Grilles CSS (CSS Grid) */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 7: Grilles CSS (CSS Grid)
        </h2>
        <p className="text-lg leading-relaxed">
          CSS Grid permet de créer des mises en page complexes en définissant des lignes
          et colonnes dans un conteneur.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Conteneur grille */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Élément de grille */
.grid-item {
  background-color: #f7fafc;
  padding: 20px;
  border: 1px solid #ddd;
}`}
        </pre>
      </section>

      {/* Chapitre 8: Transitions et animations */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 8: Transitions et animations
        </h2>
        <p className="text-lg leading-relaxed">
          CSS3 permet d'animer les propriétés CSS pour des effets dynamiques et
          agréables.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Transition simple */
button {
  background-color: #6b46c1;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #553c9a;
}

/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 2s ease forwards;
}`}
        </pre>
      </section>

      {/* Chapitre 9: Responsive Design */}
      <section className="space-y-8">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Chapitre 9: Responsive Design
        </h2>
        <p className="text-lg leading-relaxed">
          Le responsive design adapte l'affichage aux différentes tailles d'écran avec
          les media queries.
        </p>
        <pre className="bg-gray-100 p-6 rounded-lg shadow-inner overflow-x-auto text-sm font-mono">
{`/* Styles pour écran large */
.container {
  width: 80%;
  margin: auto;
}

/* Styles pour écran mobile */
@media (max-width: 600px) {
  .container {
    width: 100%;
    padding: 10px;
  }
}`}
        </pre>
      </section>

      {/* Section Projets */}
      <section className="space-y-12">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-700 pb-2 text-purple-800">
          Projets CSS3
        </h2>
        <p className="text-lg leading-relaxed">
          Ces projets vous permettront de pratiquer vos compétences en CSS3 :
        </p>

        {/* Projet 1: Page Portfolio Responsive */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
          <h3 className="text-2xl font-semibold mb-3 text-purple-600">
            Projet 1 : Page Portfolio Responsive
          </h3>
          <p className="mb-4 text-gray-700">
            Créez une page portfolio qui s’adapte aux écrans mobiles et desktop, avec
            un menu de navigation, une galerie d’images, et une section à propos.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-purple-200">
{`/* Exemple menu responsive */
nav {
  display: flex;
  justify-content: space-around;
  background-color: #6b46c1;
  padding: 1rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

@media (max-width: 600px) {
  nav {
    flex-direction: column;
    align-items: center;
  }
}`}
          </pre>
        </article>

        {/* Projet 2: Carte de produit stylisée */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
          <h3 className="text-2xl font-semibold mb-3 text-purple-600">
            Projet 2 : Carte de produit stylisée
          </h3>
          <p className="mb-4 text-gray-700">
            Concevez une carte de produit avec image, description, prix, et bouton
            stylisé avec hover et transitions.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-purple-200">
{`.product-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 4px 15px rgba(107, 70, 193, 0.4);
}

.product-image {
  width: 100%;
  border-radius: 8px;
}

.product-price {
  color: #6b46c1;
  font-weight: bold;
}`}
          </pre>
        </article>

        {/* Projet 3: Animation bouton */}
        <article className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
          <h3 className="text-2xl font-semibold mb-3 text-purple-600">
            Projet 3 : Animation bouton
          </h3>
          <p className="mb-4 text-gray-700">
            Créez un bouton avec une animation au passage de la souris utilisant
            keyframes et transitions CSS.
          </p>
          <pre className="bg-gray-50 p-5 rounded-lg overflow-x-auto text-sm font-mono border border-purple-200">
{`button {
  background-color: #6b46c1;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

button::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.3);
  transition: top 0.3s ease;
}

button:hover {
  background-color: #553c9a;
}

button:hover::after {
  top: 0;
}`}
          </pre>
        </article>
      </section>

      {/* Chapitre final: Projet final */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold border-b-4 border-purple-500 pb-2">
          Projet Final
        </h2>
        <p className="text-lg leading-relaxed">
          Réalisez un site web complet et responsive intégrant un menu de navigation,
          une galerie d’images, des animations CSS3, et une mise en page fluide avec
          Flexbox ou Grid.
        </p>
        <p className="text-lg font-semibold">
          Ce projet consolidera toutes vos connaissances en CSS3.
        </p>
      </section>
    </div>
  );
};

export default Css3Course;
