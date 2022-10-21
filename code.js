/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */


function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  datosPersona.nombre = prompt("Ingresa tu nombre:");
  const anio = parseInt(prompt("Ingresa el año en que naciste:"));
  datosPersona.edad = anioActual - anio;
  datosPersona.ciudad = prompt("Ingresa la ciudad donde vives:");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
  return datosPersona;
}


function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre;
  document.getElementById("edad").innerHTML = datosPersona.edad;
  document.getElementById("ciudad").innerText = datosPersona.ciudad;

  const siNo = document.getElementById("javascript");
  if (datosPersona.interesPorJs) {
    siNo.innerText = "Sí";
  }else {
    siNo.innerText = "No";
  } 
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector('#fila');
  fila.innerHTML = '';
  listado.forEach(materia => {
    fila.innerHTML += `
    <div class = "caja">
      <img src = "${materia.imgUrl}" alt = "${materia.lenguajes}">
      <p class = "lenguajes">Lenguajes: ${materia.lenguajes}</p>
      <p class = "bimestre">Bimestre: ${materia.bimestre}</p>
    </div> 
    `
  })
}


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  document.querySelector('#sitio').classList.toggle('dark');
}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
const sobreMi = document.querySelector("#sobre-mi");
document.addEventListener('keypress', e =>{
  if (e.key == 'f' || e.key == 'F') {
    sobreMi.classList.remove('oculto'); 
  }
})
