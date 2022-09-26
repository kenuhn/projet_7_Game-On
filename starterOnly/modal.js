function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg  = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
console.log(modalBtn)
const formData = document.querySelectorAll(".formData");
const croix    = document.querySelector(".close")
const croixFin = document.querySelector(".close2")
const btnClose = document.querySelector(".btn-submit2")
const modalFin = document.querySelector(".bground2")
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// Supprimer le modal 

croix.addEventListener("click", closeModal)
function closeModal(){
  modalbg.style.display = "none";
}

//supprimer le modal de fin 

croixFin.addEventListener("click", closeModalFin)
btnClose.addEventListener("click", closeModalFin)
function closeModalFin (){
  modalFin.style.display = "none";
  modalbg.style.display = "none";
}


///////////// VERIF FORMULAIRE

//  Message d'erreur du DOM

const errorFirst = document.getElementById("errorFirst")
const errorLast = document.getElementById("errorLast")
const errorEmail = document.getElementById("errorEmail")
const errorBirthdate = document.getElementById("errorBirthdate")
const errorQuantity = document.getElementById("errorQuantity")
const errorLocation = document.getElementById("errorLocation")
const errorCheckbox = document.getElementById("errorCheckbox")
// Variable de validation de chaque élement du formulaire
var valideFirstName ;
var valideName;
var valideEmail;
var valideQuantity;
var valideRadio;
var valideCheckbox;

// 1) Prénom


const firstName = document.getElementById("first");
firstName.addEventListener('change', () => { verifFirstName() })
function verifFirstName(){
 if (firstName.value.length < 2) {
    valideFirstName = false;
    errorFirst.style.display = "block";
    errorFirst.innerText = "Vous n'avez pas assez de caractères.";
 } 
  const regexFirstName = new RegExp( 
    /^[a-zA-Z\-]+$/
    )
    const resultat = regexFirstName.test(firstName.value)
    if (resultat == false){
      errorFirst.style.display = "block";
      errorFirst.innerText = " Il y a une erreur dans le nom"
    }
   if (firstName.value.length < 2 && resultat == false) {
      errorFirst.style.display = "block";
      errorFirst.innerText = "Vous n'avez pas assez de caractères. Il y a une erreur dans le nom";
    }  else {
      if(firstName.value.length > 2 && resultat == true){
        valideFirstName = true;
        errorFirst.style.display = "none"
       // affichetrue ()
      }
    }
}

// 2) Nom de famille 

const lastName = document.getElementById("last")
lastName.addEventListener('change', () => { verifLastName()})

function verifLastName () {

  if (lastName.value.length < 2) {
      valideName =  false
      errorLast.style.display = "block";
      errorLast.innerText = "Vous n'avez pas assez de caractères.";
    }
      const regexLastName = new RegExp (/^[a-zA-Z\-]+$/)
      const resultat = regexLastName.test(lastName.value)
    if ( resultat == false){
      valideName =  false
      errorLast.style.display = "block";
      errorLast.innerText = " Il y a une erreur dans le nom";
    } 

  if (lastName.value.length < 2 && resultat == false){
    valideName =  false
    errorLast.style.display = "block";
    errorLast.innerText = "Vous n'avez pas assez de caractères. Il y a une erreur dans le nom";
  } else {
    if (lastName.value.length > 2 && resultat == true) {
      valideName =  true;
      errorLast.style.display = "none";
    // affichetrue ()
    }
  }
}
/// 3) email

const email = document.getElementById("email")
email.addEventListener("change", () => { verifEmail()})

function verifEmail () {
  const regexEmail = new RegExp ('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i')
  const resultat = regexEmail.test(email.value)

  if (resultat == false){
    valideEmail = false
    errorEmail.style.display = "block";
    errorEmail.innerHTML = " l'adresse email n'est pas conforme"
  } else {
    valideEmail = true
    errorEmail.style.display = "none";
   // affichetrue ()
  }
}

// 4) quantité de fois 

let quantity = document.getElementById("quantity")
quantity.addEventListener('change', () =>  { verifQuantity()})

function verifQuantity () {
  const regexQuantity = new RegExp( /^[0-9]+$/)
  const resultat  = regexQuantity.test(quantity.value)

  if ( quantity.value > 99){
    valideQuantity = false
    errorQuantity.style.display = "block";
    errorQuantity.innerText = "Votre nombre est trop grand.";
  }

  if ( resultat == false) {
    valideQuantity = false
    errorQuantity.style.display = "block";
    errorQuantity.innerHTML = " Seul les chiffres et les nombres sont aceptés.";
  }

  if (quantity.value > 99 && resultat == false){
    valideQuantity = false
    errorQuantity.style.display = "block";
    errorQuantity.innerHTML = "Votre nombre est trop grand. Seul les chiffres et les nombres sont aceptés";
  } else {
    if (quantity.value < 99 && resultat == true) {
      valideQuantity = true;
    errorQuantity.style.display = "none";
  //  affichetrue ()

    }
  }
}

const checkbox = document.querySelectorAll(".checkbox")
console.log(Array.from(checkbox))
const SanFrancisco = document.getElementById("location2")
console.log(SanFrancisco.value)
checkbox.forEach((box) => box.addEventListener('change', () => townSelected))
function verifRadio (e) {
 
  if (checkbox.checked == undefined){
    valideRadio = false
    errorLocation.innerText = "vous devez sélectionné au moins une ville."
   // errorLocation.style.display = "block"
   // errorLocation.innerText = " vous devez choisir un élément "
  } else {
    valideRadio = true;
    errorLocation.innerText = ""
    //affichetrue ()
  }
}

function townSelected () {
   let radioBox = Array.from(checkbox).find(c  => c.checked)
   if(radioBox == undefined){
    valideRadio = false
     errorLocation.style.display ="block";
    errorLocation.innerText = "vous devez sélectionné au moins une ville."
    return false
   }else {
    valideRadio = true;
    console.log(radioBox.value)
   }
   return radioBox.value
}

const selectCheckbox = document.querySelectorAll(".checkbox-end")
selectCheckbox.forEach((check) => check.addEventListener('change', () => selectionCheckbox ))
const checkbox1 = document.getElementById("checkbox1")
const checkbox2 = document.getElementById("checkbox2")
function selectionCheckbox () {
  let tabCheckbox = Array.from(selectCheckbox).every(c => c.checked)
   if(selectCheckbox[0].checked == false){
    errorCheckbox.style.display ="block";
    errorCheckbox.innerText = "vous devez cochez la première case"
    return valideCheckbox = false
   }else {
    if(tabCheckbox == true){
      valideCheckbox = true;
      var checkedbox =  "requis: coché & non-requis coché"
      return checkedbox
    }
     if(selectCheckbox[0].checked == true){
      valideCheckbox = true;
      var checkedrequis = "requis: coché"
      console.log("checkbox2 sélectionné")
      console.log(tabCheckbox)
      return  checkedrequis
     }
   }

     // affichetrue ()
  }


 // Condition pour valider le formulaire et envoyé le message de validation 

 const form = document.getElementById("submit")
 form.addEventListener('submit', (e) => { 
   e.preventDefault()
   verifFirstName()
   verifLastName()
   verifEmail ()
   verifQuantity ()
   let town = townSelected()
   let check = selectionCheckbox ()
   if (valideFirstName && valideName && valideEmail && valideQuantity && valideRadio && valideCheckbox){
      modalFin.style.display = "block"
      console.log("validefirstname ==> ", firstName.value)
      console.log("valideName ==> ", lastName.value)
      console.log("valideEmail ==> ", email.value)
      console.log("valideQuantity ==> ", quantity.value)
      console.log("valideRadio ==> ", town)
      console.log("valideCheckbox ==>", check)
    }
 })
croixFin.addEventListener('click', () => {
  form.reset()
})
 /*
 function affichetrue (){
  console.log("validefirstname ==> ", valideFirstName)
  console.log("valideName ==> ", valideName)
  console.log("valideEmail ==> ", valideEmail)
  console.log("valideQuantity ==> ", valideQuantity)
  if (valideFirstName == true && valideName == true && valideEmail == true && valideQuantity == true){
    form.addEventListener('submit', (e) => { 
      e.preventDefault()
      modalFin.style.display = "block"
    })
  }
  
 }

/* function submitInput() {
  console.log("validefirstname ==> ", valideFirstName)
  console.log("valideName ==> ", valideName)
  console.log("valideEmail ==> ", valideEmail)
  console.log("valideQuantity ==> ", valideQuantity)
  console.log("valideRadio ==> ", valideRadio)
   if (valideFirstName = true && valideName == true && valideEmail == true && valideQuantity == true && valideRadio == true && valideCheckbox == true) {
    modalFin.style.display = "block"
   }
 }*/