import React from 'react'; //Permet d'importer le module React, donne accès aux fonctionnalités de React pour la création et la manipulation de composants réutilisables. 

const projects = [
  {
    id: 1,
    title: 'Cabinet Dentaire Qwartz',
    description: 'Le cabinet dentaire Qwartz se trouve dans le centre commercial Qwartz à Villeuve-la-Garenne.',
    intervention: 'Je suis intervenu sur le site du cabinet afin de faire une refonte graphique. En effet, malgré la qualité du contenu, le site présentait des bugs ou des éléments cassés.',
    type: 'Application web',
    image: 'images/dentaire.jpeg'
  },
  {
    id: 2,
    title: 'Fondation FACE',
    description: 'Le Concours S’engager pour les Quartiers a été initié par la Fondation FACE et l’ANRU en 2011.',
    intervention: 'Le Concours, divisé en catégories, récompense chaque année des projets à vocation sociale, économique et environnementale développés dans des quartiers politique de la ville et, dans une moindre mesure, dans les territoires ruraux « fragiles ».',
    type: 'Application web',
    image: 'images/CSPQ.jpeg'
  },
];

function Portfolio() {
  return (
    <div>
      {projects.map(project => (
        <div key={project.id} style={{ display: 'flex' }}>
          <div style={{marginRight: '20px', padding: '100px' }}>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <p className="project-intervention">{project.intervention}</p>
          </div>
          <div>
            <img
              className="project-image"
              width="1024"
              height="682"
              src={project.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;


