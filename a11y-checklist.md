# Checklist de Accesibilidad (Proyecto Prepa 8)

## 1. Estructura y HTML (Lo Básico)
- [ ] **Idioma:** La etiqueta html tiene el idioma correcto: `<html lang="es">`.
- [ ] **Títulos:** Solo hay un `<h1>` por página (generalmente el logo o título principal).
- [ ] **Jerarquía:** No te saltas niveles de títulos (de `h2` pasas a `h3`, no a `h4`).
- [ ] **Semántica:** Usas `<button>` para acciones y `<a>` para ir a otros sitios. (No uses `<div>` con clic).
- [ ] **Regiones:** Todo el contenido está dentro de regiones principales: `<header>`, `<main>`, `<footer>`.

## 2. Contenido Visual
- [ ] **Imágenes:** Todas las etiquetas `<img>` tienen `alt="..."`.
    - Si es decorativa (fondo): `alt=""` (vacío).
    - Si informa: `alt="Calendario de exámenes extraordinarios 2025"`.
- [ ] **Iconos:** Si usas iconos (SVG) dentro de botones, el botón debe tener `aria-label="Descripción"`.

## 3. Color y Texto (Tailwind te ayuda aquí)
- [ ] **Contraste:** Texto normal usa `text-slate-900` o `text-slate-800` sobre blanco. Nunca gris claro.
- [ ] **Enlaces:** Los enlaces no son solo de color diferente, también están subrayados (`underline`) o tienen un icono.
- [ ] **Zoom:** La página no se rompe si haces zoom al 200% en el navegador (Ctrl +).

## 4. Teclado (La prueba de fuego)
- [ ] **Foco Visible:** Al navegar con `Tab`, se ve un recuadro alrededor del elemento seleccionado. (Tailwind: `focus:ring`).
- [ ] **Orden Lógico:** El orden del tabulador sigue el orden visual de lectura (de arriba a abajo, izq a der).
- [ ] **Sin Trampas:** Puedes entrar y salir de todos los elementos (menús, buscador) solo usando el teclado.
- [ ] **Saltar al contenido:** (Opcional pero Pro) Existe un enlace oculto al principio que aparece al dar Tab y permite "Saltar al contenido principal".

## 5. Formularios (Buscador)
- [ ] **Etiquetas:** El input del buscador tiene un `<label>` asociado (aunque esté oculto visualmente con la clase `sr-only` de Tailwind).