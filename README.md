# Projecte Web amb TailwindCSS i Next.js

Aquest repositori conté el projecte de creació de la nostra web, desenvolupat utilitzant les tecnologies de TailwindCSS i Next.js. A continuació es descriuen els continguts, les tecnologies utilitzades i les instruccions d'ús.
Accés a la web per descarregar: [https://drive.google.com/file/d/1uXwYvDL2CMPU576KWU0NUitcbB63m2Nt/view?usp=sharing](https://drive.google.com/file/d/1Q3KT1GP6U4vcQwXIhFaW1G3I_Q0nhy5G/view?usp=drive_link)
## Contingut del Repositori

- **Documentació**: Explicació detallada de la creació de la nostra web.
- **Codi Font**: Organitzat per components per facilitar la gestió i el manteniment.
- **Estils**: Utilitzant TailwindCSS per crear un disseny modern i responsive.
- **Pàgines**: Creat amb Next.js per aprofitar les seves funcionalitats de generació de pàgines dinàmiques i servidor.

## Tecnologies Utilitzades

- **TailwindCSS**: Una llibreria de CSS utilitzada per dissenyar la web de manera eficient i modular.
  - **Classes utilitzades**: Flexbox, grid, espais, tipografia, colors personalitzats, i més.
  - **Components personalitzats**: Botons, formularis, targetes, etc.

- **Next.js**: Un framework de React per a aplicacions web que proporciona renderització del costat del servidor i generació de pàgines estàtiques.
  - **Rendiment**: Optimització automàtica de pàgines i recursos.
  - **Rutes dinàmiques**: Creació de pàgines basades en paràmetres dinàmics.
  - **API Routes**: Per crear endpoints de l'API backend dins de l'aplicació.

## Instruccions d'Ús

### Requisits Previs

- Node.js instal·lat
- npm o yarn per a la gestió de paquets

### Instal·lació

1. Clonar el repositori:
   ```bash
   git clone https://github.com/el-teu-usuari/projecte-web-tailwindcss-nextjs.git
2. Navegar a la carpeta del projecte
   ```bash
   cd projecte-web-tailwindcss-nextjs
3. Instalar les dependencies
   ```bash
   npm install
   
### Desplegament en Desenvolupament

4. Executar el servidor de desenvolupament:
   ```bash
   npm run dev

5. Obrir el navegador i anar a http://localhost:3000 per veure la web en acció.

### Separació del Codi per Components

Hem organitzat el codi en components per millorar la reutilització i manteniment del codi. Cada component es troba a la carpeta `components` i segueix una estructura clara:

- `components/Header.js`: Component per a la capçalera.
- `components/Nav.js`: Component per al navegador.
- `components/Slider.js`: Component al carrusel de naus espacials
- i més...

### Funcionalitats Importants Utilitzades

- **TailwindCSS**: Hem aprofitat les utilitats de TailwindCSS per construir ràpidament el disseny:
  - **Responsive Design**: Utilitzant les classes de Tailwind per a diferents mides de pantalla.
  - **Customització**: Configurant `tailwind.config.js` per afegir temes personalitzats.

- **Next.js**: Hem utilitzat diverses funcionalitats clau de Next.js:
  - **Rendiment**: Pàgina web pre-renderitza per millorar la velocitat de càrrega.
  - **Rutes dinàmiques**: Creació de components basats en dades dinàmiques.


 

   
