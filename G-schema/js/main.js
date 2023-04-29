//OOP




class Header {
  constructor() {
    const header = document.createElement('header');

    const mainTitel = document.createElement('h1');
    mainTitel.classList.add('main_titel');
    mainTitel.textContent = 'G-Schema';
    header.appendChild(mainTitel);

    const img = document.createElement('img');
    img.src = 'img/Logo.webp';
    img.alt = 'Logo van DOESBURG COACHING';
    header.appendChild(img);
    document.body.appendChild(header);
  }
}

class Main {
  constructor() {
    const main = document.createElement('main');

    const gebeurtenisnaamTabel = document.createElement('div');
    gebeurtenisnaamTabel.classList.add('gebeurtenisnaam__tabel');
    main.appendChild(gebeurtenisnaamTabel);

    const h2Gebeurtenisnaam = document.createElement('h2');
    h2Gebeurtenisnaam.classList.add('h2_gebeurtenisnaam');
    h2Gebeurtenisnaam.textContent = 'Vul je naam hieronder in:';
    gebeurtenisnaamTabel.appendChild(h2Gebeurtenisnaam);

    const gebeurtenisnaamTypevak = document.createElement('textarea');
    gebeurtenisnaamTypevak.classList.add('gebeurtenisnaam__typevak');
    gebeurtenisnaamTypevak.id = 'gebeurtenisnaam__typevak';
    gebeurtenisnaamTabel.appendChild(gebeurtenisnaamTypevak);

    const gebeurtenisTabel = document.createElement('div');
    gebeurtenisTabel.classList.add('gebeurtenis__tabel');
    main.appendChild(gebeurtenisTabel);

    const h2Gebeurtenis = document.createElement('h2');
    h2Gebeurtenis.classList.add('h2_gebeurtenis');
    h2Gebeurtenis.innerHTML = '(A) Gebeurtenis: wie?, met wie?, wat?, waar?, wanneer?, hoe?';
    gebeurtenisTabel.appendChild(h2Gebeurtenis);

    const gebeurtenisTypevak = document.createElement('textarea');
    gebeurtenisTypevak.classList.add('gebeurtenis__typevak');
    gebeurtenisTypevak.id = 'gebeurtenis__typevak';
    gebeurtenisTabel.appendChild(gebeurtenisTypevak);

    const pClassP = document.createElement('p');
    pClassP.classList.add('class_p');
    pClassP.textContent = 'ga nu eerst naar c';
    gebeurtenisTabel.appendChild(pClassP);

    const bodyContainer = document.createElement('div');
    bodyContainer.classList.add('body__container');
    main.appendChild(bodyContainer);

    const divMain = document.createElement('div');
    bodyContainer.appendChild(divMain);

    const tabellenWolken = document.createElement('div');
    tabellenWolken.classList.add('tabellen_wolken');
    divMain.appendChild(tabellenWolken);

    const mainContainerLeft = document.createElement('div');
    mainContainerLeft.classList.add('main__container');
    tabellenWolken.appendChild(mainContainerLeft);

    const wolkLinks = document.createElement('div');
    wolkLinks.classList.add('wolk_links');
    mainContainerLeft.appendChild(wolkLinks);

    const h1Onhandige = document.createElement('h1');
    h1Onhandige.textContent = '(B) Onhandige';
    wolkLinks.appendChild(h1Onhandige);

    const imgWolk = document.createElement('img');
    imgWolk.src = 'img/wolk.svg';
    wolkLinks.appendChild(imgWolk);

    const wolkLinksTypevak = document.createElement('textarea');
    wolkLinksTypevak.classList.add('wolk_links_typevak');
    wolkLinksTypevak.id = 'wolk_links_typevak';
    wolkLinks.appendChild(wolkLinksTypevak);

    const pClassPB = document.createElement('p');
    pClassPB.classList.add('class_p');
    pClassPB.textContent = 'Ga nu naar E';
    wolkLinks.appendChild(pClassPB);

    const gevoelVak = document.createElement('div');
    gevoelVak.classList.add('gevoel_vak');
    mainContainerLeft.appendChild(gevoelVak);

    const h2Gevoel = document.createElement('h2');
    h2Gevoel.classList.add('h2_gevoel');
    h2Gevoel.textContent = '(C) Gevoel';
    gevoelVak.appendChild(h2Gevoel);

    const gevoelLinksTypevak = document.createElement('textarea');
    gevoelLinksTypevak.classList.add('gevoel_links_typevak');
    gevoelLinksTypevak.id = 'gevoel_links_typevak';
    gevoelVak.appendChild(gevoelLinksTypevak);

    const pClassPC = document.createElement('p');
    pClassPC.classList.add('class_p');
    pClassPC.textContent = 'Ga nu naar B';
    gevoelVak.appendChild(pClassPC);

    const gedragVak = document.createElement('div');
    gedragVak.classList.add('gedrag_vak');
    mainContainerLeft.appendChild(gedragVak);

    const h2Gedrag = document.createElement('h2');
    h2Gedrag.classList.add('h2_gedrag');
    h2Gedrag.textContent = '(C) Gedrag';
    gedragVak.appendChild(h2Gedrag);

    const gedragLinksTypevak = document.createElement('textarea');
    gedragLinksTypevak.classList.add('gedrag_links_typevak');
    gedragLinksTypevak.id = 'gedrag_links_typevak';
    gedragVak.appendChild(gedragLinksTypevak);

    const pClassPD = document.createElement('p');
    pClassPD.classList.add('class_p');
    pClassPD.textContent = 'Ga nu naar B';
    gedragVak.appendChild(pClassPD);

    const mainContainerRight = document.createElement('div');
    mainContainerRight.classList.add('main__container');
    tabellenWolken.appendChild(mainContainerRight);

    const wolkRechts = document.createElement('div');
    wolkRechts.classList.add('wolk_rechts');
    mainContainerRight.appendChild(wolkRechts);

    const h1Handige = document.createElement('h1');
    h1Handige.textContent = '(D) Helpende';
    wolkRechts.appendChild(h1Handige);

    const imgWolkRechts = document.createElement('img');
    imgWolkRechts.src = 'img/wolk.svg';
    wolkRechts.appendChild(imgWolkRechts);

    const wolkRechtsTypevak = document.createElement('textarea');
    wolkRechtsTypevak.classList.add('wolk_rechts_typevak');
    wolkRechtsTypevak.id = 'wolk_rechts_typevak';
    wolkRechts.appendChild(wolkRechtsTypevak);

    const pClassPE = document.createElement('p');
    pClassPE.classList.add('class_p');
    pClassPE.textContent = 'Klaar!, printen?, klik op de knop Downloaden boven!';
    wolkRechts.appendChild(pClassPE);

    const gevoelVakRechts = document.createElement('div');
    gevoelVakRechts.classList.add('gevoel_vak');
    mainContainerRight.appendChild(gevoelVakRechts);

    const h2GevoelRechts = document.createElement('h2');
    h2GevoelRechts.classList.add('h2_gevoel');
    h2GevoelRechts.textContent = '(E) Gevoel';
    gevoelVakRechts.appendChild(h2GevoelRechts);

    const gevoelRechtsTypevak = document.createElement('textarea');
    gevoelRechtsTypevak.classList.add('gevoel_rechts_typevak');
    gevoelRechtsTypevak.id = 'gevoel_rechts_typevak';
    gevoelVakRechts.appendChild(gevoelRechtsTypevak);

    const pClassPF = document.createElement('p');
    pClassPF.classList.add('class_p');
    pClassPF.textContent = 'Ga nu naar D';
    gevoelVakRechts.appendChild(pClassPF);

    const gedragVakRechts = document.createElement('div');
    gedragVakRechts.classList.add('gedrag_vak');
    mainContainerRight.appendChild(gedragVakRechts);

    const h2GedragRechts = document.createElement('h2');
    h2GedragRechts.classList.add('h2_gedrag');
    h2GedragRechts.textContent = '(E) Gedrag';
    gedragVakRechts.appendChild(h2GedragRechts);

    const gedragRechtsTypevak = document.createElement('textarea');
    gedragRechtsTypevak.classList.add('gedrag_rechts_typevak');
    gedragRechtsTypevak.id = 'gedrag_rechts_typevak';
    gedragVakRechts.appendChild(gedragRechtsTypevak);

    const pClassPG = document.createElement('p');
    pClassPG.classList.add('class_p');
    pClassPG.textContent = 'Ga nu naar D';
    gedragVakRechts.appendChild(pClassPG);

    document.body.appendChild(main);
  }
}


function PrintClicked() {

  window.jsPDF = window.jspdf.jsPDF;

  var docPDF = new jsPDF();

  function print() {

    var elementHTML = document.querySelector("#printTable");

    docPDF.html(elementHTML, {

      callback: function (docPDF) {

        docPDF.save('G-schema.pdf');

      },

      x: 15,
      y: 100,
      width: 1500,
      windowWidth: 1300
    });

  }
}

class PrintButton {
  constructor() {
    this.button = document.createElement("button");
    this.button.className = "printButton";
    this.button.id = "printButton";
    this.button.textContent = "Downloaden";
    this.button.onclick = () => {
      window.print();
    };
    document.getElementById("printTable").appendChild(this.button);
  }
}

const downloadButton = new PrintButton();


class App {
  constructor() {
    new Header();
    new Main();
  }
}

//Hergebruikbare code
new App();

//Opslaan van data code 
const gebeurtenisnaam__typevak = document.getElementById("gebeurtenisnaam__typevak");
const gevoel_links_typevak = document.getElementById("gevoel_links_typevak");
const gevoel_rechts_typevak = document.getElementById("gevoel_rechts_typevak");
const gedrag_links_typevak = document.getElementById("gedrag_links_typevak");
const gedrag_rechts_typevak = document.getElementById("gedrag_rechts_typevak");
const wolk_links_typevak = document.getElementById("wolk_links_typevak");
const wolk_rechts_typevak = document.getElementById("wolk_rechts_typevak");
const gebeurtenis__typevak = document.getElementById("gebeurtenis__typevak");


gebeurtenisnaam__typevak.addEventListener("input", function () {
  localStorage.setItem("gebeurtenisnaam__typevak", gebeurtenisnaam__typevak.value);
});

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
  if (localStorage.getItem("gebeurtenisnaam__typevak")) {
    gebeurtenisnaam__typevak.value = localStorage.getItem("gebeurtenisnaam__typevak");
  }
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


