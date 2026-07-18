/**
 * BANCO DE CASOS — Simulador de Dilemas
 * -----------------------------------------------------------------------
 * Cada caso pertenece a un pilar ("p1".."p4") y tiene entre 3 y 4 opciones.
 * Cada opción reparte puntos (de -2 a 3) en tres ejes:
 *    etica       -> apego al código deontológico ACM/IEEE
 *    impacto     -> impacto social/ambiental positivo
 *    viabilidad  -> viabilidad económica/técnica para la empresa
 *
 * El motor del simulador (simulador.js) suma estos puntos y, al final,
 * calcula un "perfil de ingeniero" según qué eje domina.
 *
 * Para agregar un caso nuevo solo hay que añadir un objeto a BANCO_CASOS.
 * No hace falta tocar el HTML ni el CSS.
 */

const BANCO_CASOS = [

  // ---------------------------------------------------------- PILAR 1
  {
    pilar: "p1",
    exp: "EXP-01",
    titulo: "El plazo imposible y el fallo oculto",
    situacion: "Un superior le ordena ocultar un fallo crítico de seguridad en el sistema financiero de un cliente para poder cumplir con la fecha de entrega prometida.",
    pista: "Recuerde los principios de la ACM/IEEE sobre el interés público. ¿Qué opción prioriza la seguridad de los usuarios finales por encima de la presión comercial?",
    opciones: [
      {
        letra: "A",
        texto: "Obedecer al superior para evitar conflictos laborales y asegurar el lanzamiento.",
        puntos: { etica: -2, impacto: -1, viabilidad: 2 },
        retro: "Prioriza la comodidad corporativa a corto plazo, pero expone a la empresa a una demanda y a los usuarios a un riesgo real."
      },
      {
        letra: "B",
        texto: "Documentar el fallo internamente y negarse a lanzar el sistema hasta resolverlo.",
        puntos: { etica: 3, impacto: 2, viabilidad: -1 },
        retro: "Correcto según el código deontológico: protege la seguridad y el bienestar público por encima del calendario, aunque implique un retraso."
      },
      {
        letra: "C",
        texto: "Corregir el fallo en secreto sin informar a nadie y lanzar a tiempo.",
        puntos: { etica: -1, impacto: 0, viabilidad: 1 },
        retro: "Resuelve el síntoma pero rompe la trazabilidad y la transparencia: nadie más sabrá que existió el riesgo."
      },
      {
        letra: "D",
        texto: "Renunciar de inmediato sin dejar constancia del motivo.",
        puntos: { etica: 0, impacto: -1, viabilidad: -1 },
        retro: "Evita la complicidad, pero al no dejar registro no protege a los próximos usuarios del sistema."
      }
    ]
  },
  {
    pilar: "p1",
    exp: "EXP-02",
    titulo: "El fragmento de Stack Overflow",
    situacion: "Su equipo encuentra online un fragmento de código con licencia GPL que resolvería un problema en dos minutos, pero el producto de la empresa es propietario y se vende bajo licencia comercial.",
    pista: "Piense en la diferencia entre licencias permisivas (MIT) y de copyleft (GPL), y en las consecuencias legales de mezclarlas sin revisión.",
    opciones: [
      {
        letra: "A",
        texto: "Copiarlo y adaptarlo; total, \"nadie se va a dar cuenta\".",
        puntos: { etica: -2, impacto: -1, viabilidad: -1 },
        retro: "Usar código GPL en un producto propietario puede obligar legalmente a liberar el código fuente completo. El riesgo legal supera el ahorro de tiempo."
      },
      {
        letra: "B",
        texto: "Consultar al área legal y buscar una alternativa con licencia MIT o escribir el código propio.",
        puntos: { etica: 3, impacto: 1, viabilidad: 2 },
        retro: "Correcto: valida el cumplimiento de licencias antes de integrar dependencias externas, práctica estándar en ingeniería de software."
      },
      {
        letra: "C",
        texto: "Reescribir el fragmento cambiando nombres de variables para \"que no se note\".",
        puntos: { etica: -1, impacto: -1, viabilidad: 0 },
        retro: "El plagio de lógica no desaparece por renombrar variables; sigue siendo una violación de propiedad intelectual."
      }
    ]
  },

  // ---------------------------------------------------------- PILAR 2
  {
    pilar: "p2",
    exp: "EXP-03",
    titulo: "La brecha que nadie reportó",
    situacion: "Usted descubre que, hace tres meses, una base de datos con información de 40,000 usuarios quedó expuesta por una mala configuración. Nadie lo reportó a los afectados.",
    pista: "Considere las obligaciones de notificación de incidentes y el derecho de los usuarios a proteger su información tras una filtración.",
    opciones: [
      {
        letra: "A",
        texto: "Corregir la configuración en silencio y no decir nada, para no dañar la reputación de la empresa.",
        puntos: { etica: -2, impacto: -2, viabilidad: 1 },
        retro: "Oculta el incidente a los propios afectados, que no podrán tomar medidas como cambiar contraseñas o vigilar fraudes."
      },
      {
        letra: "B",
        texto: "Reportar el hallazgo a los responsables de seguridad y proponer un plan de notificación a los usuarios afectados.",
        puntos: { etica: 3, impacto: 3, viabilidad: 0 },
        retro: "Es la respuesta esperada ante una filtración: contener, documentar y notificar, incluso si implica un costo reputacional inmediato."
      },
      {
        letra: "C",
        texto: "Filtrar la información a la prensa de forma anónima para forzar una reacción rápida.",
        puntos: { etica: -1, impacto: 0, viabilidad: -2 },
        retro: "Salta los canales internos y puede exponer aún más los datos de los usuarios antes de que exista un plan de contención."
      }
    ]
  },
  {
    pilar: "p2",
    exp: "EXP-04",
    titulo: "El spyware \"de productividad\"",
    situacion: "Le piden instalar un software de monitoreo que registra cada tecla y captura pantallazos de los empleados en remoto, sin que ellos lo sepan.",
    pista: "Evalúe la diferencia entre supervisión razonable del desempeño y vigilancia encubierta que invade la privacidad.",
    opciones: [
      {
        letra: "A",
        texto: "Instalarlo tal cual se lo piden; es una decisión de la gerencia, no suya.",
        puntos: { etica: -2, impacto: -1, viabilidad: 1 },
        retro: "Ceder la responsabilidad no exime al ingeniero de las implicancias éticas de lo que construye o instala."
      },
      {
        letra: "B",
        texto: "Proponer un esquema de monitoreo transparente, informado y limitado a métricas de trabajo, no a vigilancia total.",
        puntos: { etica: 3, impacto: 2, viabilidad: 1 },
        retro: "Equilibra la necesidad legítima de supervisión con el derecho a la privacidad de los trabajadores."
      },
      {
        letra: "C",
        texto: "Negarse rotundamente y no ofrecer ninguna alternativa a la gerencia.",
        puntos: { etica: 1, impacto: 0, viabilidad: -2 },
        retro: "La postura ética es correcta, pero sin una alternativa viable es probable que la empresa busque otra vía menos cuidadosa."
      }
    ]
  },

  // ---------------------------------------------------------- PILAR 3
  {
    pilar: "p3",
    exp: "EXP-05",
    titulo: "El algoritmo que no contrata mujeres",
    situacion: "Un modelo de IA para filtrar currículums entrenado con datos históricos de la empresa está descartando sistemáticamente a candidatas mujeres para puestos técnicos.",
    pista: "Piense en el sesgo algorítmico como un reflejo de datos históricos desiguales, no como un error de programación aislado.",
    opciones: [
      {
        letra: "A",
        texto: "Dejarlo funcionando porque \"solo refleja los datos históricos\" y no es culpa del algoritmo.",
        puntos: { etica: -2, impacto: -2, viabilidad: 0 },
        retro: "El sesgo en los datos de entrenamiento se traduce en discriminación real sobre personas reales; no es un fenómeno neutral."
      },
      {
        letra: "B",
        texto: "Auditar el modelo, re-balancear los datos de entrenamiento y añadir una revisión humana antes de descartar candidatos.",
        puntos: { etica: 3, impacto: 3, viabilidad: -1 },
        retro: "Es la práctica recomendada: auditoría de sesgo, mitigación de datos y supervisión humana en decisiones de alto impacto."
      },
      {
        letra: "C",
        texto: "Apagar el sistema por completo y volver a la selección 100% manual.",
        puntos: { etica: 1, impacto: 1, viabilidad: -2 },
        retro: "Elimina el riesgo inmediato, pero renuncia a la oportunidad de construir un sistema más justo y eficiente."
      }
    ]
  },
  {
    pilar: "p3",
    exp: "EXP-06",
    titulo: "El deepfake del CEO",
    situacion: "El equipo de marketing le pide generar un video con IA donde el CEO \"dice\" frases que nunca pronunció, para una campaña interna motivacional.",
    pista: "Considere el consentimiento informado y el riesgo de normalizar la suplantación de identidad, aun con \"buenas intenciones\".",
    opciones: [
      {
        letra: "A",
        texto: "Crear el video sin avisar al CEO; total, el mensaje es positivo.",
        puntos: { etica: -2, impacto: -1, viabilidad: 0 },
        retro: "La intención positiva no anula la falta de consentimiento ni el riesgo de normalizar el uso de deepfakes dentro de la empresa."
      },
      {
        letra: "B",
        texto: "Explicar los riesgos éticos y de reputación, y proponer un video real o uno claramente etiquetado como generado por IA con consentimiento explícito.",
        puntos: { etica: 3, impacto: 2, viabilidad: 1 },
        retro: "Mantiene la transparencia: si se usa IA generativa con una persona real, debe haber consentimiento y etiquetado claro."
      },
      {
        letra: "C",
        texto: "Negarse sin dar ninguna alternativa ni explicar el motivo al equipo de marketing.",
        puntos: { etica: 1, impacto: 0, viabilidad: -1 },
        retro: "Evita el problema pero no educa al equipo sobre por qué es riesgoso, así que probablemente lo volverán a pedir."
      }
    ]
  },

  // ---------------------------------------------------------- PILAR 4
  {
    pilar: "p4",
    exp: "EXP-07",
    titulo: "Optimizar o lanzar",
    situacion: "Detecta que un algoritmo mal optimizado está multiplicando por cuatro el consumo de CPU de los servidores de la empresa. Arreglarlo tomaría dos semanas y retrasaría el lanzamiento.",
    pista: "Compare el costo de dos semanas de retraso frente al costo energético y de infraestructura acumulado durante toda la vida del sistema.",
    opciones: [
      {
        letra: "A",
        texto: "Lanzar tal cual está y prometer optimizarlo \"después\", aunque en la práctica rara vez se retoma.",
        puntos: { etica: -1, impacto: -2, viabilidad: 1 },
        retro: "El consumo innecesario de energía se paga cada día que el sistema está en producción, no una sola vez."
      },
      {
        letra: "B",
        texto: "Proponer una versión intermedia: optimizar las rutas de código más costosas ahora y planificar una refactorización completa después.",
        puntos: { etica: 2, impacto: 3, viabilidad: 1 },
        retro: "Es la práctica de Green Coding recomendada: reducir el impacto inmediato sin bloquear por completo el cronograma del negocio."
      },
      {
        letra: "C",
        texto: "Insistir en retrasar el lanzamiento dos semanas completas sin negociar ninguna alternativa.",
        puntos: { etica: 1, impacto: 2, viabilidad: -2 },
        retro: "La intención ambiental es correcta, pero ignorar por completo la viabilidad del negocio rara vez resulta en una decisión sostenida en el tiempo."
      }
    ]
  },
  {
    pilar: "p4",
    exp: "EXP-08",
    titulo: "La baja de 300 laptops",
    situacion: "La empresa va a dar de baja 300 laptops corporativas. El área de compras solo quiere \"tirarlas\" para liberar espacio de bodega esta misma semana.",
    pista: "Piense en el ciclo de vida completo del hardware: reutilización, donación, y solo al final, reciclaje certificado de e-waste.",
    opciones: [
      {
        letra: "A",
        texto: "Autorizar que se desechen directamente en la basura común para resolverlo rápido.",
        puntos: { etica: -2, impacto: -3, viabilidad: 1 },
        retro: "Los componentes electrónicos contienen metales pesados y materiales tóxicos que contaminan el suelo y el agua si no se gestionan correctamente."
      },
      {
        letra: "B",
        texto: "Coordinar con un gestor certificado de e-waste y evaluar qué equipos pueden donarse o reacondicionarse antes de reciclar el resto.",
        puntos: { etica: 3, impacto: 3, viabilidad: 0 },
        retro: "Sigue la jerarquía correcta de gestión de residuos electrónicos: reutilizar primero, reciclar de forma certificada después."
      },
      {
        letra: "C",
        texto: "Guardarlas indefinidamente en bodega para \"no tener que decidir ahora\".",
        puntos: { etica: 0, impacto: 0, viabilidad: -1 },
        retro: "Pospone el problema sin resolverlo; el hardware sigue perdiendo valor de reúso mientras ocupa espacio y recursos."
      }
    ]
  }
];

// Utilidad: devuelve los casos de un pilar específico, o todos si pilar === "general"
function obtenerCasos(pilar){
  if (pilar === "general") return BANCO_CASOS;
  return BANCO_CASOS.filter(c => c.pilar === pilar);
}
