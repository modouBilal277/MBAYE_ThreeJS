# MBAYE_ThreeJS

Une démonstration interactive en **Three.js** permettant de manipuler un cube 3D : vous pouvez modifier sa couleur et sa taille en temps réel !

## Structure du projet

```
MBAYE_ThreeJS/
├── node_modules/         # Modules Node.js
├── cube.png              # Image d'aperçu ou illustration
├── index.html            # Page HTML principale
├── main.js               # Script JavaScript principal
├── package.json          # Dépendances et métadonnées du projet
├── README.md             # Ce fichier de documentation
└── yarn.lock             # Fichier de verrouillage Yarn
```

### Pré-requis

- Navigateur moderne (Chrome, Firefox, Edge...)
- Node.js et npm installés

#### Installation des dépendances

```bash
npm install
```

##### Lancement

1. Clone le dépôt ou télécharge les fichiers :

```bash
git clone <url_du_repo>
cd MBAYE_ThreeJS
```

2. Lance le serveur local avec Vite :

```bash
npx vite
```

3. Ouvre ton navigateur à l'adresse `http://localhost:5173/`

## Utilisation

- **Changer la couleur :** cliquez sur le carré du sélecteur de couleur en haut à gauche et choisissez votre teinte.
- **Changer la taille :** déplacez le curseur “Taille” pour ajuster l’échelle du cube en temps réel.

## 🔧 Technologies utilisées

- [Three.js](https://threejs.org/) — Bibliothèque JavaScript 3D
- [Vite](https://vitejs.dev/) — Serveur de développement rapide

## Auteurs

Projet développé par **Mamadou MBAYE**.
