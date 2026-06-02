# P&P Compured — Sitio Web

Sitio web profesional de **P&P Compured** para ofrecer servicios tecnológicos: reparación, mantenimiento
y repotenciación de equipos de cómputo, diseño de páginas web y chatbots con IA.

---

## Estructura del Proyecto

```
pagina web ppcompured/
│
├── index.html                  # Página principal (punto de entrada)
├── README.md                   # Este archivo
├── .gitignore                  # Archivos excluidos de Git
│
├── assets/
│   │
│   ├── css/                    # Hojas de estilo — una por componente/sección
│   │   ├── base.css            # Variables CSS, reset y estilos base
│   │   ├── utilities.css       # Clases utilitarias (botones, contenedor, etc.)
│   │   ├── animations.css      # Keyframes y clases de animación / scroll reveal
│   │   ├── navbar.css          # Barra de navegación y menú móvil
│   │   ├── hero.css            # Sección hero
│   │   ├── sidebar.css         # Sidebar del hero (perfil, skills, servicios)
│   │   ├── carousel.css        # Carrusel de servicios
│   │   ├── stats.css           # Barra de estadísticas / contadores
│   │   ├── services.css        # Sección de servicios
│   │   ├── portfolio.css       # Sección de portfolio con filtros
│   │   ├── testimonials.css    # Sección de testimonios
│   │   ├── contact.css         # Sección de contacto y formulario
│   │   ├── footer.css          # Pie de página
│   │   └── responsive.css      # Media queries — diseño adaptativo
│   │
│   ├── js/                     # Scripts — uno por funcionalidad
│   │   ├── particles.js        # Partículas animadas de fondo
│   │   ├── navbar.js           # Navbar: scroll y menú móvil
│   │   ├── carousel.js         # Carrusel del hero con autoplay
│   │   ├── testimonials.js     # Slider de testimonios
│   │   ├── portfolio.js        # Filtros de categoría del portfolio
│   │   ├── animations.js       # Scroll reveal + skill bars + contadores
│   │   ├── typing.js           # Efecto de escritura en el título
│   │   ├── form.js             # Manejo del formulario de contacto
│   │   └── main.js             # Punto de entrada — inicializa todos los módulos
│   │
│   ├── images/                 # Imágenes del sitio
│   │   ├── carousel/           # Imágenes para los slides del carrusel
│   │   ├── portfolio/          # Capturas de proyectos del portfolio
│   │   └── profile/            # Foto de perfil / avatar
│   │
│   └── fonts/                  # Fuentes tipográficas locales (si aplica)
│
└── docs/                       # Documentación técnica del proyecto
```

---

## Tecnologías

| Tecnología        | Uso                              |
|-------------------|----------------------------------|
| HTML5 semántico   | Estructura del contenido         |
| CSS3              | Variables, Grid, Flexbox, Animaciones |
| JavaScript ES6+   | Interactividad (vanilla, sin frameworks) |
| Font Awesome 6    | Íconos (CDN)                     |
| Google Fonts      | Tipografía Poppins (CDN)         |

---

## Cómo usar

```bash
# 1. Clonar el repositorio
git clone <url-del-repo>
cd "pagina web ppcompured"

# 2. Abrir en el navegador
# Simplemente abrir index.html con cualquier navegador moderno.
# No requiere servidor, herramientas de build ni dependencias.
```

---

## Personalización rápida

| Elemento                  | Dónde cambiar                              |
|---------------------------|--------------------------------------------|
| Nombre / marca            | `index.html` → buscar `P&P Compured`       |
| Teléfono / email          | `index.html` → sección `#contacto`         |
| Colores y variables       | `assets/css/base.css` → bloque `:root`     |
| Fuente tipográfica        | `index.html` → `<head>` + `base.css`       |
| Animaciones de entrada    | `assets/css/animations.css`               |
| Breakpoints responsive    | `assets/css/responsive.css`               |
| Lógica del carrusel       | `assets/js/carousel.js`                   |
| Palabras del typing effect | `assets/js/typing.js` → array `words`    |
| Integración del formulario | `assets/js/form.js` → función `fSub()`   |

---

## Convenciones del equipo

- **CSS**: Una hoja de estilo por componente/sección. Sin `!important`.
- **JS**: Una función `init*()` por módulo; `main.js` las invoca todas en `DOMContentLoaded`.
- **Commits**: `feat:`, `fix:`, `style:`, `refactor:`, `docs:`.
- **Ramas**: `main` (producción) · `develop` (integración) · `feature/*` (nuevas funcionalidades).
- **Imágenes**: Colocar en `assets/images/<subcarpeta>/`. Formato WebP preferido.

---

## Secciones del sitio

1. **Navbar** — Fija con efecto glassmorphism al hacer scroll
2. **Hero** — Sidebar con perfil + carrusel de servicios
3. **Estadísticas** — Contadores animados
4. **Servicios** — 6 tarjetas con hover interactivo
5. **Portfolio** — Galería filtrable por categoría
6. **Testimonios** — Slider automático con 5 clientes
7. **Contacto** — Formulario + datos de contacto
8. **Footer** — Links y redes sociales

---

*P&P Compured — Desarrollado con HTML, CSS y JavaScript puro — sin dependencias de framework.*
