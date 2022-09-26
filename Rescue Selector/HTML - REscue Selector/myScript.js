'use strict';

///////////////////TMS///////////////////////
const alejandroL = 'Alex L';
const alejandroV = 'Alejandro V';
const alexR = 'Ritter';
const anaG = 'Ana';
const audreyH = 'Audrey';
const brianH = 'Brian';
const chandaO = 'Chanda';
const christineD = 'Chris D';
const chrisP = 'Chris P';
const clarissaS = 'Clarissa';
const deniellW = 'Deniell';
const emilyW = 'Emily';
const ericA = 'Eric';
const gabriellaL = 'Gabriella';
const guilianaA = 'Guliana';
const joetteV = 'Joette';
const joseM = 'Jose';
const joshS = 'Josh';
const kylahC = 'Kylah';
const lisetteB = 'Lisette';
const loriH = 'Lori';
const marisaG = 'Marisa';
const mayaS = 'Maya';
const monicaB = 'Monica B';
const monicaR = 'Monica R';
const naiyaR = 'Naiya';
const nickE = 'Nick';
const sherrieB = 'Sherrie';
const sienaC = 'Siena';
const sofiaP = 'Sofia';
const tavianG = 'Tavian';
const tiffL = 'Tiff';
const zenithC = 'Zenith';
const fabiolaP = 'Fabiola';
const nancyG = 'Nancy';

///////////BASE TM ARRAY////////////////
let tmList = [
  chrisP,
  joshS,
  guilianaA,
  gabriellaL,
  naiyaR,
  alejandroL,
  alejandroV,
  alexR,
  anaG,
  audreyH,
  brianH,
  chandaO,
  christineD,
  clarissaS,
  deniellW,
  emilyW,
  ericA,
  joetteV,
  joseM,
  kylahC,
  lisetteB,
  loriH,
  marisaG,
  mayaS,
  monicaB,
  monicaR,
  nickE,
  sherrieB,
  sienaC,
  sofiaP,
  tavianG,
  tiffL,
  zenithC,
  fabiolaP,
  nancyG,
];

////////////SELECTING TMS//////////////////

/////////////////ARRAY///////////////////

let tmList2 = [];
let tmList3 = [];
let tmList4 = [];

///////////////////////TM BUTTONS//////////////////

// select the container div for the buttons
const shopperDiv = document.querySelector('.shoppers');

// loop through tmList array with the forEach method
// i named the value of each name in the array 'shopper' by passing that as the argument in the forEach method
// this name could be anything you want
tmList.forEach((shopper) => {
  // for each shopper in the array we create a button element where the innerText is equal to the value of the shopper in the array
  const shopperButton = document.createElement('button');
  shopperButton.innerText = shopper;

  // we append each button to the container div
  shopperDiv.appendChild(shopperButton);

  // then we add an event listening for the click event and pass the value of the event.target.innerText as the argument for the addShopper function
  shopperButton.addEventListener('click', (event) => {
    addShopper(event.target.innerText);
  });
});

// function to add a shopper to the tmList2 as well as creating the element to appened to the selected shoppers container
// this removes the need to have a function for each shopper in the array and instead we just need this one function
function addShopper(shopper) {
  console.log(shopper);
  tmList2.push(shopper);

  let node = document.createElement('li');
  node.appendChild(document.createTextNode(shopper));
  document.querySelector('ul').appendChild(node);
}

////////////////GENERATE SHOPPER BUTTON////////////////////

const buttonRescueGenerate = document.querySelector('.button-rescue-generate');
// const buttonDropoffGenerate = document.querySelector('.button-dropoff-generate');
let selectedRescueTM = document.querySelector('.selected1');
let selectedDropoffTM = document.querySelector('.selected2');
const showImage = () => {
  document.getElementById('fireworks').style.display = 'block';
};
const showImage2 = () => {
  document.getElementById('fire').style.display = 'block';
};
buttonRescueGenerate.addEventListener('click', function () {
  function check(list) {
    if (tmList.length > 13) {
      tmList.length = 13;
      Array.prototype.push.apply(tmList3, tmList);
      tmList4 = tmList2.filter((element) => tmList3.includes(element));
      showImage();
    }
  }
  check(tmList2);
  if (tmList4.length > 0) {
    let random = Math.floor(Math.random() * tmList4.length);
    selectedRescueTM.textContent = tmList4[random];
    function remove(list) {
      const index = tmList4.indexOf(tmList4[random]);
      if (index > -1) {
        tmList4.splice(index, 1);
      }
    }
    function remove2(list) {
      const index = tmList4.indexOf(tmList2[random]);
      if (index > -1) {
        tmList2.splice(index, 1);
      }
    }
    remove2(tmList2[random]);
    remove(tmList4[random]);
  } else {
    let random = Math.floor(Math.random() * tmList2.length);
    selectedRescueTM.textContent = tmList2[random];
    function remove(list) {
      const index = tmList2.indexOf(tmList2[random]);
      if (index > -1) {
        tmList2.splice(index, 1);
      }
    }
    remove(tmList2[random]);
  }
  // dropoff();
  //  function dropoff(){
  //   showImage2();
  //   if (tmList4.length > 0) {
  //   let random = Math.floor(Math.random() * tmList4.length);
  //   selectedDropoffTM.textContent = (tmList4[random]);
  // }else {
  //     let random = Math.floor(Math.random() * tmList2.length);
  //     selectedDropoffTM.textContent = (tmList2[random]);
  //     console.log(tmList2);
  // }
  // }
});
/////////////////MOVE SELECTION TO THE BOTTOM////////////////

// // tmList.push(tmList.splice(tmList.indexOf(alejandroV),1)[0]);
// // console.log(tmList);
