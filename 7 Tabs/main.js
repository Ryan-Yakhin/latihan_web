const main = document.querySelector("main");
const konten = document.getElementById("konten");
const tabs = document.querySelectorAll("main ul li");
const p = document.getElementById("p");

function tab1() {
    p.innerHTML = "Ini adalah konten dari tab pertama.";
    p.style.textAlign = "center";
    konten.append(p);
}

function tab2() {
    p.innerHTML = "Ini adalah konten dari tab kedua.";
    p.style.textAlign = "center";
    konten.append(p);
}

function tab3() {
    p.innerHTML = "Ini adalah konten dari tab ketiga.";
    p.style.textAlign = "center";
    konten.append(p);
}

function tab4() {
    p.innerHTML = "Ini adalah konten dari tab keempat.";
    p.style.textAlign = "center";
    konten.append(p);
}