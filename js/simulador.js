/**
 * MOTOR DEL SIMULADOR DE DILEMAS
 * -----------------------------------------------------------------------
 * Depende de BANCO_CASOS (definido en preguntas.js, que debe cargarse
 * ANTES que este archivo en simulador.html).
 *
 * Flujo:
 *   1. El usuario elige un modo (pilar específico o "Test General").
 *   2. Se recorren los casos uno por uno, cada opción suma puntos en
 *      tres ejes: etica, impacto, viabilidad.
 *   3. Al terminar, se calcula el eje dominante y se asigna un perfil.
 */

const PERFILES = {
  etico: {
    nombre: "Ingeniero Altamente Ético y Sostenible",
    color: "#3E8C5C",
    texto: "Sus decisiones priorizan de forma consistente el código deontológico ACM/IEEE y el bienestar de los usuarios, incluso cuando implica fricción con plazos o presupuestos. Es el perfil que los colegios de ingeniería esperan formar."
  },
  negocio: {
    nombre: "Ingeniero Orientado al Negocio",
    color: "#D6A733",
    texto: "Tiende a resolver los dilemas priorizando la viabilidad económica o los plazos por encima de la ética o el impacto social. No es una postura ilegal, pero acumula riesgo reputacional y legal si se repite de forma sistemática."
  },
  negligente: {
    nombre: "Ingeniero en Zona de Riesgo",
    color: "#C0432B",
    texto: "Varias de sus decisiones evitaron el conflicto en el corto plazo a costa de la seguridad, la privacidad o el ambiente. Este patrón, sostenido en el tiempo, es el que suele derivar en sanciones legales o profesionales."
  },
  equilibrado: {
    nombre: "Ingeniero en Formación Equilibrada",
    color: "#4E80C4",
    texto: "Sus puntajes están repartidos de forma pareja entre los tres ejes: no hay una tendencia dominante todavía. Es un buen punto de partida para seguir practicando con más casos del manual."
  }
};

const estado = {
  casos: [],
  indice: 0,
  puntos: { etica: 0, impacto: 0, viabilidad: 0 },
  respondida: false
};

function iniciarSimulacion(pilar){
  estado.casos = barajar(obtenerCasos(pilar)).slice(0, pilar === "general" ? 6 : 2);
  if (estado.casos.length === 0){
    // fallback de seguridad si un pilar aún no tiene casos cargados
    estado.casos = obtenerCasos("general").slice(0, 4);
  }
  estado.indice = 0;
  estado.puntos = { etica: 0, impacto: 0, viabilidad: 0 };

  document.getElementById("panel-modos").style.display = "none";
  const zona = document.getElementById("zona-juego");
  zona.classList.add("activo");
  document.getElementById("resultado").classList.remove("activo");
  document.getElementById("zona-caso").style.display = "block";

  renderCaso();
}

function barajar(arr){
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function renderCaso(){
  estado.respondida = false;
  const caso = estado.casos[estado.indice];
  const total = estado.casos.length;

  document.getElementById("etiqueta-progreso").textContent =
    `Expediente ${estado.indice + 1} de ${total}`;
  document.getElementById("relleno-progreso").style.width =
    `${(estado.indice / total) * 100}%`;

  document.getElementById("caso-exp").textContent = caso.exp;
  document.getElementById("caso-titulo").textContent = caso.titulo;
  document.getElementById("caso-situacion").textContent = caso.situacion;

  const cont = document.getElementById("caso-opciones");
  cont.innerHTML = "";
  caso.opciones.forEach((op) => {
    const btn = document.createElement("button");
    btn.className = "opcion-btn";
    btn.innerHTML = `<b>${op.letra}.</b> ${op.texto}`;
    btn.addEventListener("click", () => elegirOpcion(op, btn));
    cont.appendChild(btn);
  });

  const retro = document.getElementById("caso-retro");
  retro.classList.remove("activo");
  retro.textContent = "";

  document.getElementById("btn-siguiente").style.display = "none";
}

function elegirOpcion(opcion, btnElegido){
  if (estado.respondida) return;
  estado.respondida = true;

  estado.puntos.etica += opcion.puntos.etica;
  estado.puntos.impacto += opcion.puntos.impacto;
  estado.puntos.viabilidad += opcion.puntos.viabilidad;

  document.querySelectorAll(".opcion-btn").forEach(b => {
    b.disabled = true;
    if (b === btnElegido) b.classList.add("elegida");
  });

  const retro = document.getElementById("caso-retro");
  retro.textContent = opcion.retro;
  retro.classList.add("activo");

  document.getElementById("btn-siguiente").style.display = "inline-flex";
}

function siguienteCaso(){
  estado.indice++;
  if (estado.indice >= estado.casos.length){
    mostrarResultado();
  } else {
    renderCaso();
  }
}

function calcularPerfil(){
  const { etica, impacto, viabilidad } = estado.puntos;
  const max = Math.max(etica, impacto, viabilidad);
  const min = Math.min(etica, impacto, viabilidad);

  // si todo está muy parejo, es un perfil equilibrado
  if (max - min <= 2) return PERFILES.equilibrado;

  if (etica < 0 && impacto < 0) return PERFILES.negligente;
  if (max === viabilidad && viabilidad > etica) return PERFILES.negocio;
  return PERFILES.etico;
}

function mostrarResultado(){
  document.getElementById("zona-caso").style.display = "none";
  document.getElementById("relleno-progreso").style.width = "100%";

  const perfil = calcularPerfil();
  const resultado = document.getElementById("resultado");
  resultado.classList.add("activo");

  const tarjeta = document.getElementById("perfil-tarjeta");
  tarjeta.style.setProperty("--perfil-color", perfil.color);
  document.getElementById("perfil-nombre").textContent = perfil.nombre;
  document.getElementById("perfil-texto").textContent = perfil.texto;

  const totalPreguntas = estado.casos.length;
  const opcionesMax = 3; // aprox. de puntaje máximo posible por caso, para normalizar barras
  const normaliza = (valor) => {
    const max = totalPreguntas * opcionesMax;
    const pct = ((valor + max) / (max * 2)) * 100; // centra el 0 en 50%
    return Math.max(4, Math.min(100, pct));
  };

  document.getElementById("barra-etica").style.width = normaliza(estado.puntos.etica) + "%";
  document.getElementById("barra-impacto").style.width = normaliza(estado.puntos.impacto) + "%";
  document.getElementById("barra-viabilidad").style.width = normaliza(estado.puntos.viabilidad) + "%";

  document.getElementById("valor-etica").textContent = estado.puntos.etica;
  document.getElementById("valor-impacto").textContent = estado.puntos.impacto;
  document.getElementById("valor-viabilidad").textContent = estado.puntos.viabilidad;
}

function reiniciarSimulador(){
  document.getElementById("panel-modos").style.display = "grid";
  document.getElementById("zona-juego").classList.remove("activo");
  document.getElementById("resultado").classList.remove("activo");
}

// Conecta las tarjetas de modo al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-modo]").forEach(card => {
    card.addEventListener("click", () => iniciarSimulacion(card.dataset.modo));
  });
  const btnSig = document.getElementById("btn-siguiente");
  if (btnSig) btnSig.addEventListener("click", siguienteCaso);
  const btnReiniciar = document.getElementById("btn-reiniciar");
  if (btnReiniciar) btnReiniciar.addEventListener("click", reiniciarSimulador);
});
