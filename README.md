# EXAMEN JAVASCRIPT

## Instrucciones

**Consideraciones generales** Estas son indicaciones generales de como resolver tu examen final de JS.

* Puedes usar internet.
* El proyecto es una web app para moviles de un mercado local para promover las recetas de cocina.
* Esta pagina esta optimizada para verse en dispositivos moviles (responsive), como tal tienes que probar siempre con tu navegador en ese tamaño.
* Puedes agregar todos los Ids y clases que creas necesarios.
* Cuando quieras programar algo en JS para el archivo **index.html** lo tienes que hacer en el archivo **js/script-index.js**
* Cuando quieras programar algo en JS para el archivo **recipe.html** lo tienes que hacer en el archivo **js/script-recipe.js**
* Todas las etapas se pueden resolver con JS puro o usar jQuery, a menos que se indique lo contrario.
* Ten siempre abierta la consola de JS para detectar errrores.
* Cada que termines una etapa tienes que hacer commit, por ejemplo al terminal la etapa 1:

```
git add .
git commit -m "Etapa 1"
git push origin master
```
* Tienes que completar el mayor número de etapas que puedas, algunas son extras y estan marcadas como tal. 


**Preparando el examen** 

1. Tienes que hacer un **fork** de este proyecto.
2. **Clona** en tu computadora el nuevo repositorio de tu GitHub (del que hiciste fork).
3. Abre el archivo **index.html** en tu navegador, veras la siguiente imagen:

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/main1.png "Main image")

## Etapa 1 (X puntos)

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step1.png "Paso 1")

En los dos archivos **index.html** y **recipe.html**, dentro del navbar hay 2 elementos **a** uno es la flecha con clase **js-back** y el icono de menú con clase **js-menu**. Con **jQuery** resuelve lo siguiente:

1. Oculta la flecha cuando se muestre **index.html** (image con resultado final).

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step1_1.png "Paso 1 1")
	
2. Oculta el icono de menu cuando se muestre **recipe.html** (image con resultado final).

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step1_2.png "Paso 1 2")

## Etapa 2 (X puntos)

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step2.png "Paso 2")

En esta etapa tienes que pintar una noticia, en el parrafo que esta dentro del DIV **callout-news**.

1. Crea un función llamada **printNews**.
2. Dentro de esta función asigna el texto *"NUEVAS RECETAS"*  al parrafo. (imagen con resultado final).

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step2_2.png "Paso 2 2")

## Etapa 3 (X puntos)

En el archivo **js/script-index.j** tienes disponible una variable llamada **recipesArray**, es un arreglo que contiene objetos que representan recetas de cocina, también tienes declaradas 4 funciones. 

En esta etapa tienes que completar la función **renderHighlightedRecipes**.

1. Dentro de esta funcion tienes que recorrer el arreglo **recipesArray** (que esta como parametro).
2. Checar en cada objeto del arreglo si tiene la propiedad **highlighted** en true.
3. Si la condición del paso 2 se cumple, manda a llamar la función **renderRecipe** pasandole como parametro el objeto que cumplio la condición.

## Etapa 4 (X puntos)

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step3.png "Paso 3")

En esta etapa tienes que pintar cada receta que llega a la función **renderRecipe**.

1. Tienes que crear con JS el HTML que esta en el archivo **templates/template-recipe.html** (este archivo es solo de instrucciones, no tienes que usarlo). Dentro de este archivo esta escrito con MAYUSCULAS la información que tienes que sacar del objeto y como se llama la propiedad (atributo).
```
OPCIONAL: Si resuelves este paso usando jQuery tendrás un bonus de 10 puntos.
```

2. Con el HTML que creaste en el paso anterior tienes que pintarlo en la pantalla, haciendo que este HTML sea hijo de un DIV que tiene como clase **list-recipes** (dentro de este DIV hay un comentario, donde indica donde se tienen que pintar cada una de stas recetas). 

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step3_3.png "Paso 3 3")

Si terminaste esta etapa ¡FELICIDADES!

## Etapa 5 (X puntos) OPCIONAL

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step6.png "Paso 6")

En el archivo **js/script-index.j** tienes disponible una variable llamada **activitiesArray**, es un arreglo que contiene objetos que representan actividades de cocina.

1. Hay una función declarada llamada **renderActivities**, tienes que "llamarla" cuando el DOM este listo y pasarle como parametro la variable **activitiesArray**, tienes que poder ver en la consola como se imprime el arreglo.
2. En la función **renderActivities** recorre el arreglo que le llega como parametro (**activitiesArray**) y por cada uno de los objetos manda a llamar a la función **renderActivity** y pasale el objeto como parametro.
3. Crea una validación, si el arreglo **activitiesArray** contiene mas de 0 objetos, entonces oculta el DIV con clase **wrapper-message**.

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step5_2.png "Paso 5 3")

## Etapa 6 (X puntos) OPCIONAL



1. Tienes que crear con JS el HTML que esta en el archivo **templates/template-activity.html** (este archivo es solo de instrucciones, no tienes que usarlo). Dentro de este archivo esta escrito con MAYUSCULAS la información que tienes que sacar del objeto y como se llama la propiedad (atributo).
```
OPCIONAL: Si resuelves este paso usando underscore.js tendrás un bonus de 10 puntos.
```

2. Con el HTML que creaste en el paso anterior tienes que pintarlo en la pantalla, haciendo que este HTML sea hijo de un DIV que tiene como clase **list-activities** (dentro de este DIV hay un comentario, donde indica donde se tienen que pintar cada una de stas recetas).

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step6_3.png "Paso 6 3")

## Etapa 7 (X puntos)
Ahora pasemos al archivo **recipe.html** y su JS **js/script-recipe.js**.

1. Imprime un mensaje en la consola cuando el documento HTML este listo.

## Etapa 8 (X puntos)

En esta etapa tienes que completar la navegación de esta pagina, la cual funciona con pestañas.

1. Asigna funciones que se ejecuten cuando el usuario de click en las pestañas (2 elementos **a** con clase **js-show-recipe** y **js-show-make**, estos 2 estan dentro de un DIV con clase **btns-group**).
2. Identifica el DIV que contiene la mayoria del codigo, tiene las clases **page** y **recipe**. Agregale la clase **make** cuando se haga click en el elemento **js-show-make**. Y si el usuario hace click en el elemento **js-show-recipe** entonces quitale la clase **make** al DIV. 


Imagen con la clase **make**

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step8_1.png "Paso 8 1")

Imagen sin la clase **make**

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step8_2.png "Paso 8 2")

## Etapa 9 (X puntos)

En esta etapa tienes que señalar la navegación.

1. Si se hace click en  **js-show-recipe** agregale la clase **active** a ese mismo elemento **a** y quitasela a  **js-show-make**.

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step9_1.png "Paso 9 1")

2. Si se hace click en  **js-show-make** agregale la clase **active** a ese mismo elemento **a** y quitasela a  **js-show-recipe**.

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step9_2.png "Paso 9 2")

## Etapa 10 (X puntos)

En esta etapa tienes que darle funcionalidad a la flecha de atras que esta en la parte de arriba.

![alt text](https://github.com/kodamirmo/LocalMarketTest/blob/dev/assets/step1_2.png "Paso 1 2")

Pista: Para regresar a index, puedes usar este codigo de JS.
```javascript
window.location = 'index.html';
```
