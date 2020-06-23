"use strict";
let div_starwars = document.querySelector("#personajes_s");
let p_carga = document.createElement("p");
p_carga.innerHTML = "Cargando...";
div_starwars.appendChild(p_carga);
let personajes = [];

//FETCH
for (let i = 1; i <= 83; i++) {
  if (i == 17) continue; //personaje 17 es undefined
  fetch(`https://swapi.dev/api/people/${i}`)
    .then((data) => data.json())
    .then((personaje) => {
      // personaje no es personaje.data porque el objeto ya esta listo y es solo uno
      guardarPersonajes(personaje);
      if (personajes.length == 82) {
        return personajes;
      } else return "error";
    })
    .then((arraypersonaje) => renderPersonaje(arraypersonaje))
    .catch((error) => console.log("Error en el fetch" + error));
}

//Guarda el objeto en un array
function guardarPersonajes(objeto) {
  let personaje = objeto.name;
  personajes.push(personaje);
  console.log(personajes);
}

//Muestra el array en una tabla
function renderPersonaje(array) {
  console.log(array);
  if (array == "error") {
    p_carga.style.display = "block";
  } else {
    p_carga.style.display = "none";
    for (let j = 1; j <= 9; j++) {
      let tr = document.querySelector(`#t${j}`);
      console.log(tr.id);
      switch (tr.id) {
        case "t1":
          for (let i = 0; i < 10; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t2":
          for (let i = 10; i < 20; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t3":
          for (let i = 20; i < 30; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t4":
          for (let i = 30; i < 40; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t5":
          for (let i = 40; i < 50; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t6":
          for (let i = 50; i < 60; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t7":
          for (let i = 60; i < 70; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t8":
          for (let i = 70; i < 80; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
        case "t9":
          for (let i = 80; i < 82; i++) {
            let new_td = document.createElement("td");
            new_td.innerHTML = array[i];
            tr.appendChild(new_td);
          }
          break;
      }
    }
  }

  //let personajes = objeto;
  //let cont =0;
  //console.log(personajes);

  //let s = personajes.name;
  //td.innerHTML = s;
  /* for(let j=1; j<=9;j++){
        let qs = document.querySelector(`#t${j}`);
        if(cont<=10){

        }
        console.log(qs);
    }*/

  //array.push(s);
  //console.log(array);

  // let a = s.split("");
  //a.shift();
  //a.pop();
  // console.log(a);
  //let ua = a.join("");
}
