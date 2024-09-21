/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generateDomain() {
    console.log("Hello Rigo from the console!");

    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];
    let ext = [".com", ".es", ".edu", ".uy"];

    let domain =
      pronoun[Math.floor(Math.random() * pronoun.length)] +
      adj[Math.floor(Math.random() * adj.length)] +
      noun[Math.floor(Math.random() * noun.length)] +
      ext[Math.floor(Math.random() * ext.length)];

    document.getElementById("dominio").innerHTML = domain;
  }

  let reload = document.getElementById("refresh");

  reload.addEventListener("click", () => {
    location.reload();
  });

  generateDomain();
};
