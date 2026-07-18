# 🛡️ ShieldEthics — Manual Operativo del Ingeniero de Sistemas

**ShieldEthics** es un manual interactivo de ética profesional para estudiantes e ingenieros de sistemas. Combina un contenido normativo breve, un simulador de dilemas con evaluación automática y un foro de discusión abierto a la comunidad.

🌐 **Sitio web (GitHub Pages):** `https://<tu-usuario>.github.io/ethical-playbook/`
💬 **Foro de discusión (GitHub Discussions):** `https://github.com/<tu-usuario>/ethical-playbook/discussions`

> Reemplaza `<tu-usuario>` por tu usuario o el de la organización de GitHub una vez publicado el repositorio. Instrucciones completas de activación en la sección **Cómo publicarlo**, más abajo.

---

## 📑 Los 4 pilares

| # | Pilar | Enfoque |
|---|-------|---------|
| 01 | **Ética Profesional y Propiedad Intelectual** | Presiones laborales, plagio de código, licencias GPL/MIT, espionaje industrial |
| 02 | **Ciberseguridad y Privacidad** | Filtraciones de datos, venta de información, spyware corporativo, ransomware |
| 03 | **Inteligencia Artificial y Sociedad** | Sesgo algorítmico, automatización, algoritmos adictivos, deepfakes |
| 04 | **Sostenibilidad Digital y Green IT** | Consumo energético, Green Coding, virtualización, gestión de e-waste |

Cada pilar sigue la misma estructura de tres capas: **guía técnica** (normas ACM/IEEE y autores de referencia), **dilema interactivo**, y **caja de recursos** externos.

## 🧠 Simulador de Dilemas

En `simulador.html`, cualquier visitante puede resolver un set de casos por pilar (o el Test General, que mezcla los 4) y recibir al final un **perfil de ingeniero** — no una nota numérica — calculado en tres ejes:

- **Ética profesional** — apego al código deontológico ACM/IEEE
- **Impacto social/ambiental** — consecuencias sobre personas y entorno
- **Viabilidad técnica/económica** — factibilidad para la empresa

Los casos y su puntaje viven en `js/preguntas.js`; la lógica de evaluación en `js/simulador.js`. Agregar un caso nuevo no requiere tocar HTML ni CSS.

## 💬 El foro

El botón **"Ir al foro"**, presente en la web y al final de cada dilema, lleva a **GitHub Discussions**, hospedado dentro de este mismo repositorio. Ahí la comunidad puede:

- Abrir hilos de debate por cada dilema o pilar
- Votar (upvote) las posturas mejor argumentadas
- Compartir su perfil obtenido en el simulador

No hace falta clonar el repositorio ni tocar código para participar — solo iniciar sesión con una cuenta de GitHub. Ver `CONTRIBUTING.md` para las normas de participación.

## 🗂️ Estructura del repositorio

```
ethical-playbook/
│
├── 01-etica-profesional-y-propiedad-intelectual/
│   └── index.html
├── 02-ciberseguridad-y-privacidad/
│   └── index.html
├── 03-inteligencia-artificial-y-sociedad/
│   └── index.html
├── 04-sostenibilidad-y-green-it/
│   └── index.html
│
├── css/
│   └── estilos.css
├── js/
│   ├── preguntas.js
│   └── simulador.js
│
├── index.html          → Página de inicio (los 4 pilares)
├── simulador.html       → Simulador de dilemas
├── README.md
└── CONTRIBUTING.md
```

## 🚀 Cómo publicarlo (GitHub Pages)

1. Crea un repositorio público en GitHub llamado, por ejemplo, `ethical-playbook`.
2. Sube todos estos archivos y carpetas manteniendo exactamente esta estructura (el `index.html` de la raíz debe quedar en la raíz del repositorio, no dentro de una subcarpeta).
3. Entra a **Settings → Pages** dentro del repositorio.
4. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
5. Guarda. GitHub tardará uno o dos minutos en publicar el sitio en `https://<tu-usuario>.github.io/ethical-playbook/`.

## 💬 Cómo activar el foro (GitHub Discussions)

1. Entra a **Settings** del repositorio.
2. Baja hasta la sección **Features** y activa la casilla **Discussions**.
3. Ve a la pestaña **Discussions** (aparece junto a Code, Issues y Pull requests).
4. Crea las categorías correspondientes a cada pilar, por ejemplo:
   - `🏛️ Pilar 1 — Ética y Propiedad Intelectual`
   - `🔒 Pilar 2 — Ciberseguridad`
   - `🤖 Pilar 3 — IA y Sociedad`
   - `🌿 Pilar 4 — Sostenibilidad`
   - `📢 General`
5. Actualiza los enlaces `https://github.com` de este proyecto por la URL real: `https://github.com/<tu-usuario>/ethical-playbook/discussions/categories/<categoria>`.

## 📊 Cómo medir el impacto

| Métrica | Dónde verla | Qué indica |
|---|---|---|
| Views / Unique visitors | `Insights → Traffic` | Alcance real del manual |
| Hilos creados | Pestaña `Discussions` | Interés espontáneo de la comunidad |
| Upvotes por respuesta | Dentro de cada hilo | Qué posturas son mejor recibidas |
| Stars del repositorio | Página principal del repo | Reconocimiento como herramienta útil |

## 📚 Referencias académicas

Pressman, R. — *Ingeniería de Software: un enfoque práctico* · Sommerville, I. — *Ingeniería de Software* · Stallings, W. — *Fundamentos de Seguridad en Redes* · ACM Code of Ethics and Professional Conduct · IEEE Code of Ethics.

---

*Proyecto académico desarrollado para la asignatura de Ética Profesional — Ingeniería de Sistemas.*
