// Import des modules et composants nécessaires depuis 'react' et 'react-bootstrap'
import React, { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import ErrorMsg from './ErrorMsg';

// composant fonctionnel appelé 'Projet'.
const Projet = () => {
  // Utilisation du hook useState pour gérer l'état du composant
  const [activeTab, setActiveTab] = useState(0);  // // Déclare une variable d'état 'activeTab' avec une valeur initiale de 0. Cette variable sera utilisée pour suivre l'onglet actif sélectionné dans le composant.
  const [selectedImages, setSelectedImages] = useState([]); // Déclare une variable d'état 'selectedImages' avec une valeur initiale d'un tableau vide. Cette variable sera utilisée pour stocker les images sélectionnées dans le projet.
  const [autreTexte, setAutreTexte] = useState(''); // Déclare une variable d'état 'autreTexte' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker un texte supplémentaire lié au projet. 
  const [firstName, setFirstName] = useState(''); // Déclare une variable d'état 'firstName' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker le prénom d'une personne associée au projet.
  const [lastName, setLastName] = useState(''); // Déclare une variable d'état 'lastName' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker le nom de famille d'une personne associée au projet. 
  const [organization, setOrganization] = useState(''); // Déclare une variable d'état 'organization' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker le nom de l'organisation liée au projet. 
  const [email, setEmail] = useState(''); // Déclare une variable d'état 'email' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker l'adresse e-mail de contact pour le projet.
  const [phone, setPhone] = useState(''); // Déclare une variable d'état 'phone' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker le numéro de téléphone de contact pour le projet.
  const [website, setWebsite] = useState(''); // Déclare une variable d'état 'website' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker l'adresse du site web lié au projet. 
  const [projectDescription, setProjectDescription] = useState(''); // Déclare une variable d'état 'projectDescription' avec une valeur initiale d'une chaîne vide. Cette variable peut être utilisée pour stocker une description du projet. 

  // Fonction pour gérer le changement d'onglet
  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  // Fonction pour gérer le clic sur une image carrée dans l'onglet 1
  const handleImageClick = (index) => {
    const isSelected = selectedImages.includes(index);
    if (isSelected) {
      setSelectedImages(selectedImages.filter((item) => item !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

// Vérifier si le bouton 'Suivant' doit être désactivé (l'onglet 3)
const isNextButtonDisabled = (selectedImages.length === 0 && !autreTexte) || activeTab === 2;

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Effectuez les actions souhaitées avec les données du formulaire
    // Par exemple, vous pouvez envoyer les données au backend ici

    // Réinitialisez les valeurs du formulaire
    setFirstName('');
    setLastName('');
    setOrganization('');
    setEmail('');
    setPhone('');
    setWebsite('');
    setProjectDescription('');

    // Réinitialisez également les sélections des carrés dans le premier onglet
    setSelectedImages([]);
  };

  // Rendu du composant 'Projet'
  return (
    <div className="backProjet">
      <h1 className="h1Projet">Un projet ?</h1>
      <p className="paraProjet">Déterminons votre besoin avec le formulaire ci-dessous</p>
      {/* Composant 'Tabs' pour gérer les onglets */}
      <Tabs activeKey={activeTab} onSelect={handleTabSelect} id="devis-tabs" className="blockInfo">
        {/* Onglet 1 */}
        <Tab eventKey={0} title="Informations sur votre projet">
          {/* Contenu de l'onglet 1 */}
          <p className="paraDemande">Votre demande concerne : <span style={{ color: "red" }}>*</span></p>
          {/* Sélection des images carrées */}
          <div className="containerSquare">
            <div className={`square ${selectedImages.includes(0) ? 'selected' : ''}`} onClick={() => handleImageClick(0)}>
              <img className='imgSquare' src="https://oguzdonmez.com/wp-content/uploads/2021/01/website.jpg" title="Un Site Vitrine" />
              {selectedImages.includes(0) && <span className="checkMark">✓</span>}
              <p className="paraSite1">Un Site Vitrine</p>
            </div>
            <div className={`square ${selectedImages.includes(1) ? 'selected' : ''}`} onClick={() => handleImageClick(1)}>
              <img className='imgSquare' src="https://oguzdonmez.com/wp-content/uploads/2021/04/magasin-carte-credit-coffrets-cadeaux-illustration-acheteurs_1262-18980-1.jpg" title="Un Site e-commerce" />
              {selectedImages.includes(1) && <span className="checkMark">✓</span>}
              <p className="paraSite2">Un Site e-commerce</p>
            </div>
            <div className={`square ${selectedImages.includes(2) ? 'selected' : ''}`} onClick={() => handleImageClick(2)}>
              <img className='imgSquare' src="https://oguzdonmez.com/wp-content/uploads/2021/04/unnamed.png" title="Autre" />
              {selectedImages.includes(2) && <span className="checkMark">✓</span>}
              <p className="paraSite3">Autre</p>
            </div>
          </div>
          {/* Champ de texte pour spécifier la nature du site si 'Autre' est sélectionné */}
          {selectedImages.includes(2) && (
            <div>
              <p className='projetPara'>Veuillez préciser la nature de votre site :</p>
              <div className='champText'>
                <input
                  type="text"
                  value={autreTexte}
                  onChange={(e) => setAutreTexte(e.target.value)}
                  placeholder="Si vous ne savez pas exactement, expliquez votre site en 1 phrase."
                  style={{ height: '50%', width: '50%' }}
                />
              </div>
            </div>
          )}
        </Tab>
        {/* Onglet 2 */}
        <Tab eventKey={1} title="Informations sur votre demande">
          {/* Contenu de l'onglet 2 */}
          <h3 style={{ padding: "10px" }}>
            Vous souhaitez :<span style={{ color: "red" }}>*</span>
          </h3>
          {/* Choix des services demandés avec des cases à cocher */}
          <label style={{ padding: "10px" }}>
            <input type="checkbox" name="service" value="creation-site-internet" />
            <span style={{ marginLeft: "10px" }}>Créer votre site internet</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input type="checkbox" name="service" value="refonte-site-existant" />
            <span style={{ marginLeft: "10px" }}>Faire une refonte d'un site existant</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input type="checkbox" name="service" value="ameliorer-site" />
            <span style={{ marginLeft: "10px" }}>Améliorer votre site</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input type="checkbox" name="service" value="maintenance-site" />
            <span style={{ marginLeft: "10px" }}>Une maintenance de votre site</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input type="checkbox" name="service" value="migration-site" /> 
            <span style={{ marginLeft: "10px" }}>Une migration de votre site</span>
          </label>
          <br />
          <label style={{ padding: "10px" }}>
            <input type="checkbox" name="service" value="logo-site" />
            <span style={{ marginLeft: "10px" }}>Un logo pour votre site</span>
          </label>
          <br />
          <p style={{ padding: "20px", textAlign: "left", color: "green" }}>
            Vous pouvez choisir plusieurs options si vous le souhaitez.
          </p>
        </Tab>
        {/* Onglet 3 */}
        <Tab eventKey={2} title="Informations sur vous">
          {/* Contenu de l'onglet 3 */}
          {/* Composant 'ErrorMsg' pour afficher un message d'erreur */}
          <ErrorMsg />
        </Tab>
      </Tabs>
      {/* Boutons pour naviguer entre les onglets */}
      <div className="buttonProjet">
        <Button disabled={activeTab === 0} onClick={() => setActiveTab((prev) => prev - 1)}>
          Précédent
        </Button>
        <Button disabled={isNextButtonDisabled} onClick={() => setActiveTab((prev) => prev + 1)}>
          Suivant
        </Button>
      </div>
    </div>
  );
};

// Export du composant 'Projet' par défaut
export default Projet;