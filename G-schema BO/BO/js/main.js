const gevoel_links_typevak = document.getElementById("gevoel_links_typevak");
const gevoel_rechts_typevak = document.getElementById("gevoel_rechts_typevak");
const gedrag_links_typevak = document.getElementById("gedrag_links_typevak");
const gedrag_rechts_typevak = document.getElementById("gedrag_rechts_typevak");
const wolk_links_typevak = document.getElementById("wolk_links_typevak");
const wolk_rechts_typevak = document.getElementById("wolk_rechts_typevak");
const gebeurtenis__typevak = document.getElementById("gebeurtenis__typevak");

gevoel_links_typevak.addEventListener("input", function () {
  localStorage.setItem("gevoel_links_typevak", gevoel_links_typevak.value);
});

gevoel_rechts_typevak.addEventListener("input", function () {
  localStorage.setItem("gevoel_rechts_typevak", gevoel_rechts_typevak.value);
});

gedrag_links_typevak.addEventListener("input", function () {
  localStorage.setItem("gedrag_links_typevak", gedrag_links_typevak.value);
});

gedrag_rechts_typevak.addEventListener("input", function () {
  localStorage.setItem("gedrag_rechts_typevak", gedrag_rechts_typevak.value);
});

wolk_links_typevak.addEventListener("input", function () {
  localStorage.setItem("wolk_links_typevak", wolk_links_typevak.value);
});

wolk_rechts_typevak.addEventListener("input", function () {
  localStorage.setItem("wolk_rechts_typevak", wolk_rechts_typevak.value);
});

gebeurtenis__typevak.addEventListener("input", function () {
  localStorage.setItem("gebeurtenis__typevak", gebeurtenis__typevak.value);
});


window.onload = function () {
  if (localStorage.getItem("gevoel_links_typevak")) {
    gevoel_links_typevak.value = localStorage.getItem("gevoel_links_typevak");
  }
  if (localStorage.getItem("gevoel_rechts_typevak")) {
    gevoel_rechts_typevak.value = localStorage.getItem("gevoel_rechts_typevak");
  }
  if (localStorage.getItem("gedrag_links_typevak")) {
    gedrag_links_typevak.value = localStorage.getItem("gedrag_links_typevak");
  }
  if (localStorage.getItem("gedrag_rechts_typevak")) {
    gedrag_rechts_typevak.value = localStorage.getItem("gedrag_rechts_typevak");
  }
  if (localStorage.getItem("wolk_links_typevak")) {
    wolk_links_typevak.value = localStorage.getItem("wolk_links_typevak");
  }
  if (localStorage.getItem("wolk_rechts_typevak")) {
    wolk_rechts_typevak.value = localStorage.getItem("wolk_rechts_typevak");
  }
  if (localStorage.getItem("gebeurtenis__typevak")) {
    gebeurtenis__typevak.value = localStorage.getItem("gebeurtenis__typevak");
  }

};

// DOM:

//Gebeurtenisnaam
var gebeurtenisnaamTabel = document.createElement('div');
gebeurtenisnaamTabel.className = 'gebeurtenisnaam__tabel';

var h2Gebeurtenisnaam = document.createElement('h2');
h2Gebeurtenisnaam.className = 'h2_gebeurtenisnaam';
h2Gebeurtenisnaam.innerHTML = 'Vul je naam hieronder in:';

var textareaGebeurtenisnaam = document.createElement('textarea');
textareaGebeurtenisnaam.className = 'gebeurtenisnaam__typevak';
textareaGebeurtenisnaam.id = 'gebeurtenisnaam__typevak';

gebeurtenisnaamTabel.appendChild(h2Gebeurtenisnaam);
gebeurtenisnaamTabel.appendChild(textareaGebeurtenisnaam);

// Gebeurtenis-tabel
var gebeurtenisTabel = document.createElement('div');
gebeurtenisTabel.className = 'gebeurtenis__tabel';

var h2Gebeurtenis = document.createElement('h2');
h2Gebeurtenis.className = 'h2_gebeurtenis';
h2Gebeurtenis.innerHTML = '(A) Gebeurtenis: wie?, Met wie?, Wat?, Waar?, Wanneer?, Hoe?';

var textareaGebeurtenis = document.createElement('textarea');
textareaGebeurtenis.className = 'gebeurtenis__typevak';
textareaGebeurtenis.id = 'gebeurtenis__typevak';

var pClass = document.createElement('p');
pClass.className = 'class_p';
pClass.innerHTML = 'ga nu eerst naar c';

gebeurtenisTabel.appendChild(h2Gebeurtenis);
gebeurtenisTabel.appendChild(textareaGebeurtenis);
gebeurtenisTabel.appendChild(pClass);

// Body-container
var bodyContainer = document.createElement('div');
bodyContainer.className = 'body__container';

var tabellenWolken = document.createElement('div');
tabellenWolken.className = 'tabellen_wolken';

var mainContainer1 = document.createElement('div');
mainContainer1.className = 'main__container';

// Linkerkant van de wolk
var wolkLinks = document.createElement('div');
wolkLinks.className = 'wolk_links';

var h1Links = document.createElement('h1');
h1Links.innerHTML = '(B) Onhandige';

var imgLinks = document.createElement('img');
imgLinks.src = 'img/wolk.svg';

var textareaLinks = document.createElement('textarea');
textareaLinks.className = 'wolk_links_typevak';
textareaLinks.id = 'wolk_links_typevak';

var pClass1 = document.createElement('p');
pClass1.className = 'class_p';
pClass1.innerHTML = 'Ga nu naar E';

wolkLinks.appendChild(h1Links);
wolkLinks.appendChild(imgLinks);
wolkLinks.appendChild(textareaLinks);

