import React from 'react'; // Importation du module React pour créer des composants
import * as Yup from 'yup'; // Importe toutes les fonctionnalités du module Yup (bibliothèque)
import { yupResolver } from '@hookform/resolvers/yup'; // Importe la fonction yupResolver depuis le module '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'; // Importation du hook useForm pour gérer le formulaire


export default function ErrorMsg() {  // Définit une fonction nommée ErrorMsg et l'exporte en tant que fonction par défaut.
  const yupValidation = Yup.object().shape({ // "Yup.object()" crée un schéma de validation pour un objet. La méthode "shape({})" indique que l'objet doit respecter un certain schéma spécifié à l'intérieur des accolades.
    firstName: Yup.string().required('Veuillez entrer votre prénom.').min(4, 'Le prénom doit contenir au moins 4 caractères.'), // méthode de Yup indique que la valeur de la propriété "firstName" doit être une chaîne de caractères. Si la propriété "firstName" est vide, une erreur sera renvoyée avec le message "Veuillez entrer votre prénom." 
    lastName: Yup.string().required('Veuillez entrer votre nom.').min(4, 'Le nom doit contenir au moins 4 caractères.'),
    organization: Yup.string().required('Veuillez entrer le nom de votre entreprise/organisation.').min(4, 'Le nom de l\'entreprise/organisation doit contenir au moins 4 caractères.'),
    email: Yup.string().required('L\'identifiant de messagerie est obligatoire.')
      .email("Veuillez entrer une adresse e-mail valide."),  // Vérifie si la valeur du champ correspond à un format d'adresse e-mail.
    phone: Yup.string().required('Veuillez entrer votre numéro de téléphone.').min(10, 'Le numéro de téléphone doit contenir au moins 10 caractères.'),
    website: Yup.string()
      .required('Veuillez entrer l\'URL de votre site.')
      .url("Veuillez entrer une URL valide."),   // Vérifie si la valeur du champ correspond à un format d'URL
    projectDescription: Yup.string().required('Veuillez nous parler de votre projet.').min(8, 'La description du projet doit contenir au moins 8 caractères.'),
  });


  const formOptions = { resolver: yupResolver(yupValidation) }; // Définit les options du formulaire avec une propriété "resolver" qui utilise la validation Yup.
  const { register, handleSubmit, reset, formState } = useForm(formOptions);  // Utilise la fonction useForm avec les options du formulaire pour obtenir les méthodes. Destructure les propriétés register, handleSubmit, reset et formState de l'objet retourné.
  const { errors } = formState; // Destructure la propriété errors de l'objet formState, qui contient les erreurs de validation du formulaire.


  // envoi du formulaire via L'API
  async function onSubmit(data) {
    try {
      const response = await fetch('https://example.com/submit', {  // Envoie d'une requête POST à l'API
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'  // Définition du type de contenu de la requête comme JSON
        },
        body: JSON.stringify(data)  // Conversion des données en JSON et envoi dans le corps de la requête
      });
  
      if (response.ok) {
        console.log('Formulaire envoyé avec succès!');  // Affiche un message si la réponse est réussie
      } else {
        console.log('Une erreur s\'est produite lors de l\'envoi du formulaire.');  // Affiche un message si la réponse est une erreur
      }
    } catch (error) { // Si une erreur se produit lors de l'envoi de la requête, capture l'erreur et l'affiche dans la console
      console.log('Une erreur s\'est produite lors de l\'envoi du formulaire:', error);
    }
  }


  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(onSubmit)}> {/* Lorsqu'il est soumis, la fonction handleSubmit(onSubmit) sera appelée. */}
        <div className="form-group" style={{ width: '500px' }}>
          <label>Prénom</label>
          <input
            name="firstName"
            type="text"
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}  // Le code suivant utilise une notation de template string en JavaScript pour créer une classe dynamique pour un élément de formulaire en fonction de la présence d'erreurs sur le champ "firstName".
            {...register('firstName')}  // Lie le champ de saisie au formulaire en utilisant la méthode register 
          />
          <div className="invalid-feedback">{errors.firstName?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Nom</label>
          <input
            name="lastName"
            type="text"
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
            {...register('lastName')}
          />
          <div className="invalid-feedback">{errors.lastName?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Entreprise / Organisation</label>
          <input
            name="organization"
            type="text"
            className={`form-control ${errors.organization ? 'is-invalid' : ''}`}
            {...register('organization')}
          />
          <div className="invalid-feedback">{errors.organization?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Email</label>
          <input
            name="email"
            type="text"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Téléphone</label>
          <input
            name="phone"
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone')}
          />
          <div className="invalid-feedback">{errors.phone?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Site / URL</label>
          <input
            name="website"
            type="text"
            className={`form-control ${errors.website ? 'is-invalid' : ''}`}
            {...register('website')}
          />
          <div className="invalid-feedback">{errors.website?.message}</div>
        </div>
        <div className="form-group" style={{ width: '500px' }}>
          <label>Parlez-nous de votre projet</label>
          <textarea
            name="projectDescription"
            className={`form-control ${errors.projectDescription ? 'is-invalid' : ''}`} style={{ height: '150px' }}
            {...register('projectDescription')}
          />
          <div className="invalid-feedback">{errors.projectDescription?.message}</div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary"> Envoyer </button> {/* l'attribut type="submit" indique que le bouton est utilisé pour soumettre un formulaire */}
        </div>
      </form>
    </div>
  );
}