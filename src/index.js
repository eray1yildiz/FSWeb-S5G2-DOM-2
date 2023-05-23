import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Ana Sayfa!");
});

// Kodlar buraya gelecek!

function hosGeldiniz() {
  alert("Sayfamıza hoş geldiniz :)");
}

document.querySelector("h2").addEventListener("click", function (e) {
  alert("Hoş Buldumm");
});
//mouseover
document.querySelectorAll("nav a").forEach(item => {
  item.addEventListener("mouseover", item => {
    item.target.style.backgroundColor = "orange";
  });
});

//mouseout

document.querySelectorAll("nav a").forEach(item => {
  item.addEventListener("mouseout", item => {
    item.target.style.backgroundColor = "white";
  });
});

//click

const imgOtobus = document.querySelectorAll("img");
imgOtobus.forEach(item => {
  item.addEventListener("click", item => {
    item.target.setAttribute("style", "filter:drop-shadow(5px 10px 10px)");
  });
});

//dblclick
document.querySelectorAll("img");
imgOtobus.forEach(item => {
  item.addEventListener("dblclick", item => {
    item.target.setAttribute("style", "filter:drop-shadow(0px 0px 0px)");
  });
});

//resize
window.addEventListener("resize", e => {
  if (window.outerWidth < 500) {
    body.style.backgroundColor = "black";
  }
});

//load

window.addEventListener("load", event => {
  setTimeout(() => {
    alert("Reklam engelleyicinizi kapatın :)");
  }, 2000);
});
//wheel
const icerik = document.querySelectorAll("p");
icerik.forEach(text => {
  text.addEventListener("wheel", e => {
    text.style.fontSize = "25px";
  });
});
