let div_harold = document.querySelector("#harold");

//Fetch
miPromesa()
  .then((datos) => renderMiPromesa(datos))
  .catch((error) => console.log("Error en el fetch" + error));

//Funcion para crear mi propia promesa
function miPromesa() {
  let datos = {
    nombre: "Harold",
    apellido: "Flores",
    edad: "25 Años",
    avatar:"https://avatars2.githubusercontent.com/u/47432191?s=460&u=3c96b05ca8d6f19d5d5ff1d6ac760d72aa1ccf4b&v=4",
  };
  return new Promise((resolve, reject) => {
    if (typeof datos != "object") {
      return reject(error);
    }
    return resolve(datos);
  });
}

//Funcion para mostrar los datos de mi promes
function renderMiPromesa(objeto) {
  let p = document.createElement("p");
  p.innerHTML = objeto.nombre + "<br>" + objeto.apellido + "<br>" + objeto.edad;
  let img = document.createElement("img");
  img.src = objeto.avatar;
  img.style.width = "150px";
  img.style.height = "150px";
  div_harold.appendChild(p);
  div_harold.appendChild(img);
}

