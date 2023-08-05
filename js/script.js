
let h1Element = document.getElementById('heading');
h1Element.firstChild.nodeValue = "The Get Method (DOM)";
h1Element.style.color = 'yellow';

let pElements = document.getElementsByTagName('p'); // HTML COLLECTION
for(let pElement of pElements){
  pElement.style.color = 'green';
}

let customDiv = document.getElementsByClassName('custom-bg');
for(let element of customDiv){
  element.style.backgroundColor = 'dimgrey';
}