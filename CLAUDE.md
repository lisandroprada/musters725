# Casa en Jorge Musters 725 — Propiedad única

Proyecto de Propietas Inmobiliaria. Hereda de `../CLAUDE.md`: datos de la firma, manual de marca y reglas generales. Acá solo lo específico.

## El proyecto
- **Qué es:** casa de 4 ambientes en venta. Brochure de una sola propiedad.
- **Fuente de los datos:** ficha publicada en ipropietas.com.ar (listing `9d638380-f821-40ea-b820-0f80e9056637`), consultada el 2026-10-28.
- **Ubicación:** Jorge Musters 725, Playa Unión, Rawson, Chubut.
- **Oferta:** venta, USD 110.000 (según la ficha; confirmar vigencia antes de publicar).
- **Características informadas:** 4 ambientes, 3 dormitorios, 1 baño completo, antigüedad 25 años, orientación norte, estado general bueno.
- **Distribución:** living comedor, cocina y lavadero independiente; 3 dormitorios y baño; patio y entrada de auto.
- **Distancia al mar:** 500 metros (confirmado por el usuario el 2026-10-28)
- **Superficie (total/cubierta/terreno):** PENDIENTE (la ficha no la informa)
- **Estado:** disponible. Sitio construido (index.html, styles.css, main.js); falta revisión final, DESIGN.md y deploy.
- **Contacto específico:** usa el WhatsApp de la firma (`https://wa.me/5492804503151`). Mensaje precargado con la dirección de la propiedad.

## Identidad
- **Marca propia del desarrollo:** no. Usa solo la identidad de Propietas (azul `#2e3092`, celeste `#27aae1`, Montserrat).
- **Rol de Propietas:** comercializadora y titular del sitio (logo en header/footer + pie legal)
- **Paleta / tipografía:** la del manual; el resto lo define impeccable shape (ver `DESIGN.md` cuando exista).

## Técnico
- **Stack:** HTML/CSS estático (delegado; propiedad única, sin necesidad de build)
- **Assets:** `assets/logos/` (copiados desde `../_shared/assets/logos/`) y `assets/img/`. No referenciar `../_shared`.
- **Fotos:** `assets/img/foto-01.jpg` a `foto-09.jpg`, bajadas de la ficha pública. Son verticales de 450×600 px, baja resolución: no sirven para un hero a pantalla completa. `foto-01` es la fachada (con cartel "VENDE" de Propietas).
- **Deploy:** PENDIENTE. Publicar solo con confirmación del usuario.

## Contexto de diseño
- `PRODUCT.md` (impeccable init) y `DESIGN.md` (cuando exista) son la fuente de verdad visual y de producto.

## Pendientes
- Superficie total, cubierta y de terreno
- Fotos en mayor resolución (las actuales son 450×600); idealmente también apaisadas
- Plano, si existe
- Confirmar precio vigente, servicios (gas, cloacas, agua), y si acepta permuta o financiación (no afirmar nada de eso hasta confirmarlo)
- Descripción de la zona/cercanía a la playa: solo si el corredor la confirma
- Validar el pie legal con el corredor
- Título, descripción, Open Graph y favicon (a definir en la construcción)
