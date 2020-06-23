"use strict";
let div_users = document.querySelector("#personajes_u");
let div_user = document.querySelector("#janet");

/*cada then es una promesa y se ejecutan en secuencia
el valor del return del anterior then se pasa al siguiente 
then en forma de cualquier elemento*/

//Fetch
fetch(`https://reqres.in/api/users/`)
  .then((data) => data.json())
  .then((personaje) => {
    //Igualo a personaje.data porque devuelve un array de objetos
    //console.log(personaje.data);
    renderPersonajes(personaje.data); //devuelve un array de objetos
    return getJanet();
  })
  .then((janet) => janet.json()
    //console.log(janet);
    //renderJanet(janet);
  )
  .then(janetdata => renderJanet(janetdata)
    //console.log(janetdata.janet);
  )
  .catch((error) => console.log("Error en el fetch" + error));

//Trae el objeto Janet del api
function getJanet() {
  return fetch("https://reqres.in/api/users/2");
}

//Muestra todos los nombres del api
function renderPersonajes(array) {
  //let personajes=objeto;
  // console.log(personajes);
  array.map(function (element) {
  let p = document.createElement("span");
  let s = element.first_name;
  p.innerHTML = s + "<br>";
  div_users.appendChild(p);
  });
}

//Muestra el objeto Janet
function renderJanet(obj) {
  let p = document.createElement("p");
  p.innerHTML = obj.data.first_name + " Se trae un elemento específico!!";
  let img = document.createElement("img");
  img.src=obj.data.avatar;
  div_user.appendChild(p);
  div_user.appendChild(img);
}
