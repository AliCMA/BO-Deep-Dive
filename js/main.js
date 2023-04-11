//OOP
class Header {
  constructor(title, imageUrl) {
    this.title = title;
    this.imageUrl = imageUrl;
  }

  render() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");

    h1.classList.add("main_titel");
    h1.textContent = this.title;

    img.setAttribute("src", this.imageUrl);
    img.setAttribute("alt", "Logo van DOESBURG COACHING");

    header.appendChild(h1);
    header.appendChild(img);

    return header;
  }
}

class GebeurtenisnaamTabel {
  constructor() {}

  render() {
    const gebeurtenisnaamTabel = document.createElement("div");
    const h2 = document.createElement("h2");
    const textarea = document.createElement("textarea");

    gebeurtenisnaamTabel.classList.add("gebeurtenisnaam__tabel");

    h2.classList.add("h2_gebeurtenisnaam");
    h2.textContent = "Vul je naam hieronder in:";

    textarea.classList.add("gebeurtenisnaam__typevak");
    textarea.setAttribute("id", "gebeurtenisnaam__typevak");

    gebeurtenisnaamTabel.appendChild(h2);
    gebeurtenisnaamTabel.appendChild(textarea);

    return gebeurtenisnaamTabel;
  }
}

class GebeurtenisTabel {
  constructor() {}

  render() {
    const gebeurtenisTabel = document.createElement("div");
    const h2 = document.createElement("h2");
    const textarea = document.createElement("textarea");
    const p = document.createElement("p");

    gebeurtenisTabel.classList.add("gebeurtenis__tabel");

    h2.classList.add("h2_gebeurtenis");
    h2.textContent =
      "(A) Gebeurtenis: wie?, Met wie?, Wat?, Waar?, Wanneer?, Hoe?";

    textarea.classList.add("gebeurtenis__typevak");
    textarea.setAttribute("id", "gebeurtenis__typevak");

    p.classList.add("class_p");
    p.textContent = "ga nu eerst naar c";

    gebeurtenisTabel.appendChild(h2);
    gebeurtenisTabel.appendChild(textarea);
    gebeurtenisTabel.appendChild(p);

    return gebeurtenisTabel;
  }
}

class Main {
  constructor() {}

  render() {
    const main = document.createElement("main");
    const gebeurtenisnaamTabel = new GebeurtenisnaamTabel().render();
    const gebeurtenisTabel = new GebeurtenisTabel().render();
    const bodyContainer = document.createElement("div");
    const tabellenWolken = document.createElement("div");
    const mainContainer1 = document.createElement("div");
    const wolkLinks = document.createElement("div");
    const h1WolkLinks = document.createElement("h1");
    const imgWolkLinks = document.createElement("img");
    const textareaWolkLinks = document.createElement("textarea");
    const pWolkLinks = document.createElement("p");
    const gevoelVak1 = document.createElement("div");
    const h2Gevoel1 = document.createElement("h2");
    const textareaGevoelLinks = document.createElement("textarea");
    const pGevoelLinks = document.createElement("p");
    const gedragVak1 = document.createElement("div");
    const h2Gedrag1 = document.createElement("h2");
    const textareaGedragLinks = document.createElement("textarea");
    const pGedragLinks = document.createElement("p");
    const mainContainer2 = document.createElement("div");
    const wolkRechts = document.createElement("div");
    const h1WolkRechts = document.createElement("h1");
    const imgWolkRechts = document.createElement("img");
    const textareaWolkRechts = document.createElement("textarea");
    const pWolkRechts = document.createElement("p");
    const gevoelVak2 = document.createElement("div");
    const h2Gevoel2 = document.createElement("h2");
    const textareaGevoelRechts = document.createElement("textarea");
    const pGevoelRechts = document.createElement("p");
    const gedragVak2 = document.createElement("div");
    const h2Gedrag2 = document.createElement("h2");
    const textareaGedragRechts = document.createElement("textarea");
    const pGedragRechts = document.createElement("p");

    mainContainer1.classList.add("main__container");
    mainContainer2.classList.add("main__container");
    tabellenWolken.classList.add("tabellen_wolken");
    bodyContainer.classList.add("body__container");
    wolkLinks.classList.add("wolk_links");
    gevoelVak1.classList.add("gevoel_vak");
    gedragVak1.classList.add("gedrag_vak");
    wolkRechts.classList.add("wolk_rechts");
    gevoelVak2.classList.add("gevoel_vak");
    gedragVak2.classList.add("gedrag_vak");

    h1WolkLinks.textContent = "(B) Onhandige";
    imgWolkLinks.setAttribute("src", "img/wolk.svg");
    textareaWolkLinks.classList.add("wolk_links_typevak");
    textareaWolkLinks.setAttribute("id", "wolk_links_typevak");
    pWolkLinks.classList.add("class_p");
    pWolkLinks.textContent = "Ga nu naar E";

    h2Gevoel1.classList.add("h2_gevoel");
    h2Gevoel1.textContent = "(C) Gevoel";
    textareaGevoelLinks.classList.add("gevoel_links_typevak");
    textareaGevoelLinks.setAttribute("id", "gevoel_links_typevak");
    pGevoelLinks.classList.add("class_p");
    pGevoelLinks.textContent = "Ga nu naar B";

    h2Gedrag1.classList.add("h2_gedrag");
    h2Gedrag1.textContent = "(C) Gedrag";
    textareaGedragLinks.classList.add("gedrag_links_typevak");
    textareaGedragLinks.setAttribute("id", "gedrag_links_typevak");
    pGedragLinks.classList.add("class_p");
    pGedragLinks.textContent = "Ga nu naar B";

    h1WolkRechts.textContent = "(D) Handige";
    imgWolkRechts.setAttribute("src", "img/wolk.svg");
    textareaWolkRechts.classList.add("wolk_rechts_typevak");
    textareaWolkRechts.setAttribute("id", "wolk_rechts_typevak");
    pWolkRechts.classList.add("class_p");
    pWolkRechts.textContent = "Klaar!";

    h2Gevoel2.classList.add("h2_gevoel");
    h2Gevoel2.textContent = "(E) Gevoel";
    textareaGevoelRechts.classList.add("gevoel_rechts_typevak");
    textareaGevoelRechts.setAttribute("id", "gevoel_rechts_typevak");
    pGevoelRechts.classList.add("class_p");
    pGevoelRechts.textContent = "Ga nu naar D";

    h2Gedrag2.classList.add("h2_gedrag");
    h2Gedrag2.textContent = "(E) Gedrag";
    textareaGedragRechts.classList.add("gedrag_rechts_typevak");
    textareaGedragRechts.setAttribute("id", "gedrag_rechts_typevak");
    pGedragRechts.classList.add("class_p");
    pGedragRechts.textContent = "Ga nu naar D";

    wolkLinks.appendChild(h1WolkLinks);
    wolkLinks.appendChild(imgWolkLinks);
    wolkLinks.appendChild(textareaWolkLinks);
    wolkLinks.appendChild(pWolkLinks);

    gevoelVak1.appendChild(h2Gevoel1);
    gevoelVak1.appendChild(textareaGevoelLinks);
    gevoelVak1.appendChild(pGevoelLinks);

    gedragVak1.appendChild(h2Gedrag1);
    gedragVak1.appendChild(textareaGedragLinks);
    gedragVak1.appendChild(pGedragLinks);

    mainContainer1.appendChild(wolkLinks);
    mainContainer1.appendChild(gevoelVak1);
    mainContainer1.appendChild(gedragVak1);

    wolkRechts.appendChild(h1WolkRechts);
    wolkRechts.appendChild(imgWolkRechts);
    wolkRechts.appendChild(textareaWolkRechts);
    wolkRechts.appendChild(pWolkRechts);

    gevoelVak2.appendChild(h2Gevoel2);
    gevoelVak2.appendChild(textareaGevoelRechts);
    gevoelVak2.appendChild(pGevoelRechts);

    gedragVak2.appendChild(h2Gedrag2);
    gedragVak2.appendChild(textareaGedragRechts);
    gedragVak2.appendChild(pGedragRechts);

    mainContainer2.appendChild(wolkRechts);
    mainContainer2.appendChild(gevoelVak2);
    mainContainer2.appendChild(gedragVak2);

    tabellenWolken.appendChild(mainContainer1);
    tabellenWolken.appendChild(mainContainer2);

    bodyContainer.appendChild(tabellenWolken);

    main.appendChild(gebeurtenisnaamTabel);
    main.appendChild(gebeurtenisTabel);
    main.appendChild(bodyContainer);

    return main;
  }
}


//Her bruikbare gedeelte 
const header = new Header("G-Schema", "img/Logo.webp").render();
const main = new Main().render();

document.body.appendChild(header);
document.body.appendChild(main);
//Her bruikbare gedeelte 






// class Header {
//   constructor(main_titel, logo_src) {
//     this.main_titel = main_titel;
//     this.logo_src = logo_src;
//   }
//   render() {
//     const header = document.createElement('header');
//     const h1 = document.createElement('h1');
//     h1.setAttribute('class', 'main_titel');
//     h1.innerHTML = this.main_titel;
//     const img = document.createElement('img');
//     img.setAttribute('src', this.logo_src);
//     img.setAttribute('alt', 'Logo van DOESBURG COACHING');
//     header.appendChild(h1);
//     header.appendChild(img);
//     return header;
//   }
// }

// class GebeurtenisnaamTabel {
//   constructor(h2_gebeurtenisnaam) {
//     this.h2_gebeurtenisnaam = h2_gebeurtenisnaam;
//   }
//   render() {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'gebeurtenisnaam__tabel');

//     const h2 = document.createElement('h2');
//     h2.setAttribute('class', 'h2_gebeurtenisnaam');
//     h2.innerHTML = this.h2_gebeurtenisnaam;

//     const textarea = document.createElement('textarea');
//     textarea.setAttribute('class', 'gebeurtenisnaam__typevak');
//     textarea.setAttribute('id', 'gebeurtenisnaam__typevak');

//     div.appendChild(h2);
//     div.appendChild(textarea);

//     return div;
//   }
// }

// class GebeurtenisTabel {
//   constructor(h2_gebeurtenis) {
//     this.h2_gebeurtenis = h2_gebeurtenis;
//   }
//   render() {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'gebeurtenis__tabel');

//     const h2 = document.createElement('h2');
//     h2.setAttribute('class', 'h2_gebeurtenis');
//     h2.innerHTML = this.h2_gebeurtenis;

//     const textarea = document.createElement('textarea');
//     textarea.setAttribute('class', 'gebeurtenis__typevak');
//     textarea.setAttribute('id', 'gebeurtenis__typevak');

//     const p = document.createElement('p');
//     p.setAttribute('class', 'class_p');
//     p.innerHTML = 'ga nu eerst naar c';

//     div.appendChild(h2);
//     div.appendChild(textarea);
//     div.appendChild(p);

//     return div;
//   }
// }

// class BodyContainer {
//   constructor() {
//   }
//   render() {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'body__container');

//     const div2 = document.createElement('div');

//     const div3 = document.createElement('div');
//     div3.setAttribute('class', 'tabellen_wolken');

//     const mainContainer1 = document.createElement('div');
//     mainContainer1.setAttribute('class', 'main__container');

//     const wolkLinks = document.createElement('div');
//     wolkLinks.setAttribute('class', 'wolk_links');

//     const h1_wolkLinks = document.createElement('h1');
//     h1_wolkLinks.innerHTML = '(B) Onhandige';

//     const img_wolkLinks = document.createElement('img');
//     img_wolkLinks.setAttribute('src', 'img/wolk.svg');

//     const textarea_wolkLinks = document.createElement('textarea');
//     textarea_wolkLinks.setAttribute('class', 'wolk_links_typevak');
//     textarea_wolkLinks.setAttribute('id', 'wolk_links_typevak');

//     const p1_wolkLinks = document.createElement('p');
//     p1_wolkLinks.setAttribute('class', 'class_p');
//     p1_wolkLinks.innerHTML = 'Ga nu naar E';

//     const gevoelVak = document.createElement('div');
//     gevoelVak.setAttribute('class', 'gevoel_vak');

//     const h2_gevoel = document.createElement('h2');
//     h2_gevoel.setAttribute('class', 'h2_gevoel');
//     h2_gevoel.innerHTML = '(C) Gevoel';

//     const textarea_gevoelLinks = document.createElement('textarea');
//     textarea_gevoelLinks.setAttribute('class', 'gevoel_links_typevak');
//     textarea_gevoelLinks.setAttribute('id', 'gevoel_links_typevak');

//     const p2_gevoel = document.createElement('p');
//     p2_gevoel.setAttribute('class', 'class_p');
//     p2_gevoel.innerHTML = 'Ga nu naar B';

//     const gedragVak = document.createElement('div');
//     gedragVak.setAttribute('class', 'gedrag_vak');

//     const h2_gedrag = document.createElement('h2');
//     h2_gedrag.setAttribute('class', 'h2_gedrag');
//     h2_gedrag.innerHTML = '(C) Gedrag';

//     const textarea_gedragLinks = document.createElement('textarea');
//     textarea_gedragLinks.setAttribute('class', 'gedrag_links_typevak');
//     textarea_gedragLinks.setAttribute('id', 'gedrag_links_typevak');

//     const p3_gedrag = document.createElement('p');
//     p3_gedrag.setAttribute('class', 'class_p');
//     p3_gedrag.innerHTML = 'Ga nu naar B';

//     const mainContainer2 = document.createElement('div');
//     mainContainer2.setAttribute('class', 'main__container');

//     const wolkRechts = document.createElement('div');
//     wolkRechts.setAttribute('class', 'wolk_rechts');

//     const h1_wolkRechts = document.createElement('h1');
//     h1_wolkRechts.innerHTML = '(D) Handige';

//     const img_wolkRechts = document.createElement('img');
//     img_wolkRechts.setAttribute('src', 'img/wolk.svg');

//     const textarea_wolkRechts = document.createElement('textarea');
//     textarea_wolkRechts.setAttribute('class', 'wolk_rechts_typevak');
//     textarea_wolkRechts.setAttribute('id', 'wolk_rechts_typevak');

//     const p1_wolkRechts = document.createElement('p');
//     p1_wolkRechts.setAttribute('class', 'class_p');
//     p1_wolkRechts.innerHTML = 'Klaar!';

//     const gevoelVak2 = document.createElement('div');
//     gevoelVak2.setAttribute('class', 'gevoel_vak');

//     const h2_gevoel2 = document.createElement('h2');
//     h2_gevoel2.setAttribute('class', 'h2_gevoel');
//     h2_gevoel2.innerHTML = '(E) Gevoel';

//     const textarea_gevoelRechts = document.createElement('textarea');
//     textarea_gevoelRechts.setAttribute('class', 'gevoel_rechts_typevak');
//     textarea_gevoelRechts.setAttribute('id', 'gevoel_rechts_typevak');

//     const p2_gevoel2 = document.createElement('p');
//     p2_gevoel2.setAttribute('class', 'class_p');
//     p2_gevoel2.innerHTML = 'Ga nu naar D';

//     const gedragVak2 = document.createElement('div');
//     gedragVak2.setAttribute('class', 'gedrag_vak');

//     const h2_gedrag2 = document.createElement('h2');
//     h2_gedrag2.setAttribute('class', 'h2_gedrag');
//     h2_gedrag2.innerHTML = '(E) Gedrag';

//     const textarea_gedragRechts = document.createElement('textarea');
//     textarea_gedragRechts.setAttribute('class', 'gedrag_rechts_typevak');
//     textarea_gedragRechts.setAttribute('id', 'gedrag_rechts_typevak');

//     const p3_gedrag2 = document.createElement('p');
//     p3_gedrag2.setAttribute('class', 'class_p');
//     p3_gedrag2.innerHTML = 'Ga nu naar D';

//     div.appendChild(div3);
//     div3.appendChild(mainContainer1);
//     mainContainer1.appendChild(wolkLinks);
//     wolkLinks.appendChild(h1_wolkLinks);
//     wolkLinks.appendChild(img_wolkLinks);
//     wolkLinks.appendChild(textarea_wolkLinks);
//     wolkLinks.appendChild(p1_wolkLinks);
//     mainContainer1.appendChild(gevoelVak);
//     gevoelVak.appendChild(h2_gevoel);
//     gevoelVak.appendChild(textarea_gevoelLinks);
//     gevoelVak.appendChild(p2_gevoel);
//     mainContainer1.appendChild(gedragVak);
//     gedragVak.appendChild(h2_gedrag);
//     gedragVak.appendChild(textarea_gedragLinks);
//     gedragVak.appendChild(p3_gedrag);

//     div3.appendChild(mainContainer2);
//     mainContainer2.appendChild(wolkRechts);
//     wolkRechts.appendChild(h1_wolkRechts);
//     wolkRechts.appendChild(img_wolkRechts);
//     wolkRechts.appendChild(textarea_wolkRechts);
//     wolkRechts.appendChild(p1_wolkRechts);
//     mainContainer2.appendChild(gevoelVak2);
//     gevoelVak2.appendChild(h2_gevoel2);
//     gevoelVak2.appendChild(textarea_gevoelRechts);
//     gevoelVak2.appendChild(p2_gevoel2);
//     mainContainer2.appendChild(gedragVak2);
//     gedragVak2.appendChild(h2_gedrag2);
//     gedragVak2.appendChild(textarea_gedragRechts);
//     gedragVak2.appendChild(p3_gedrag2);

//     return div;
//   }
// }

// const header = new Header('G-Schema', 'img/Logo.webp');
// document.body.appendChild(header.render());

// const gebeurtenisnaamTabel = new GebeurtenisnaamTabel('Vul je naam hieronder in:');
// document.body.appendChild(gebeurtenisnaamTabel.render());

// const gebeurtenisTabel = new GebeurtenisTabel('(A) Gebeurtenis: wie?, Met wie?, Wat?, Waar?, Wanneer?, Hoe?');
// document.body.appendChild(gebeurtenisTabel.render());

// const bodyContainer = new BodyContainer();
// document.body.appendChild(bodyContainer.render());

//OOP


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

