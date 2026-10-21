/* ==========================================================================
   RÉGLAGES DU SITE — c'est le seul fichier à modifier pour finir le site.
   ========================================================================== */
window.SITE_CONFIG = {
  // Adresse qui reçoit tous les messages
  email: "svalbardcsud@gmail.com",

  // Adresse du « Web App » Google Apps Script (voir apps-script/Code.gs et README.md).
  // C'est elle qui permet d'envoyer les formulaires, d'enregistrer les dons et de mettre
  // la jauge à jour toute seule. Tant qu'elle est vide, les formulaires affichent l'e-mail.
  formEndpoint: "https://script.google.com/macros/s/AKfycbzM26T-9efHlNu3QH6lviOiPpP38ccCTc0KDuFkYfBNwI5cDDK5GgdzCYZ7MoAVdlop/exec",

  // ---- Paiement des dons -------------------------------------------------
  // Compte bancaire de l'association (pour le virement)
  iban: "CH35 8080 8008 9065 6285 1",
  bank: "",                 // facultatif : nom de la banque, affiché sous les coordonnées
  accountHolder: "Association d'étudiants Des Alpes à l'Arctique", // titulaire du compte
  // QR-facture fourni par la banque (image affichée sur ordinateur, à scanner avec l'app de sa banque)
  qrBill: "assets/img/qr-facture.png",
  // Facultatif : lien de paiement par carte / Apple Pay (Payrexx, Stripe…)
  cardLink: "",

  // Collecte : objectif. Le montant réuni est lu automatiquement dans Google Sheets
  // (onglet « Tableau de bord ») dès que formEndpoint est rempli. « raised » ne sert
  // que si on veut forcer un montant à la main (null = automatique / masqué).
  goal: 40000,
  raised: null,
};
