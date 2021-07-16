# Rick and Morty's characters finder

Esta aplicación web desarrollada muestra con un listado de personajes de la serie _Rick and Morty_, permite filtrar por el nombre del personaje.

![Captura de pantalla 2021-07-16 a las 11 33 23](https://user-images.githubusercontent.com/77678575/125926665-6d90b631-1351-4b2b-8265-51aada11f177.png)

## Instalación

1. Descarga el repositorio.
2. Instala las dependencias con ```npm install```.
3. Arranca el proyecto con ```npm start```.
   

## Tecnologías utilizadas

- React (hooks, router) y CSS (Sass).


## Características

-  La página muestra los veinte primeros personajes de la [rickandmortyapi](https://rickandmortyapi.com/documentation/#get-all-characters) con su información básica: imagen, nombre y especie.
-  Es posible buscar más personajes de la serie a través del formulario.
-  Al hacer click sobre un personaje se expande su información completa, incluyendo planeta de origen, número de episodios y status.

1. **Listado de personajes.**
   Vamos a utilizar el servicio de datos de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno vamos a pintar al menos la foto, el nombre y la especie.

2. **Búsqueda 🔍 y filtrado de personajes.**
   A través de un campo de texto, se buscan personajes por su nombre (no se tendrá en cuenta si la persona ha introducido el texto en mayúsculas o minúsculas). Al escribir en este, se filtran en la interfaz los personajes que contienen las letras escritas en el input.

3. **Componentes del listado de personajes.**
   El listado debe tener los siguientes componentes como mínimo:

- Componente para el filtro de nombre.
- Componente para el listado.
- Componente para la tarjeta de cada personaje del listado.
- Componente para el detalle de cada personaje.

4. **Utilizar React Router.**
   Al hacer click sobre alguna de las tarjetas se pinta la tarjeta clicada a pantalla completa con el detalle de cada personaje. En los detalles aparece la siguiente información: imagen, nombre, especie, planeta de origen, género, número de episodios en los que aparece el personaje, listado de episodios, y si está vivo o muerto.

RESULTADO:
**https://rociogarrido.github.io/rick-and-morty/#/**
