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

