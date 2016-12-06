$(document).ready(function(){
	$('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	printNews();

	renderActivities(activities);
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for(var i = 0; i < recipesArray.length; i++){
		if(recipesArray[i].highlighted == true){
			renderRecipe(recipesArray[i]);
		}
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	//span icon-bookmark
	var spanIcon = $('<span class="icon-bookmark"></span>');
	spanIcon.text(recipe.cookTime);
	//span bookmarks-recipe
	var spanBook = $('<span class="bookmarks-recipe"></span>');
	//append spans
	spanBook.append(spanIcon);
	//span autor
	var spanAuthor = $('<span class="author-recipe"></span>');
	spanAuthor.text(recipe.source.name);
	//span metadata
	var spanMeta = $('<span class="metadata-recipe></span>');
	spanMeta.append(spanAuthor);
	spanMeta.append(spanBook);
	//span title
	var spanTitle = $('<span class="title-recipe"></span>')
	spanTitle.text(recipe.title);
	//span attribution
	var spanAt = $('<span class="attribution"></span>');
	spanAt.append(spanTitle);
	spanAt.append(spanMeta);
	//img
	var img = $('<img/>');
	img.attr('src', 'img/recipes/320x350/'+recipe.name+'.jpg');
	//Haciendo 'a'
	var a = $('<a class="item-recipe"></a>');
	a.append(spanAt);
	a.append(img);

	//List-recipes
	$('.list-recipes').append(a);
}

function printNews(){
	$('.callout-news > p').append('NUEVAS RECETAS');
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
	if(activitiesArray.length > 0){
		$('.wrapper-message').hide(1000);
	}
	_.each(activitiesArray, renderActivity);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	console.log('renderActivity');
	//UNDERSCORE


	var template = 
		'<a href="#" class="item-activity">' +
  			'<span class="attribution">' +
    			'<span class="avatar">' +
      				'<img src="<%= userAvatar %>" class="image-avatar">' +
    			'</span>' +
    			'<span class="meta">' +
      				'<span class="author"><%= userName%></span> made <span class="recipe"><%= recipeName %></span>: <%= text %> <span class="location">&mdash;<%= place %></span>' +
    			'</span>' +
  			'</span>' +
            '<div class="bg-image" style="background-image: url(&quot; <%= image %> &quot;);"></div>' +
        '</a>';

    var compiled = _.template(template);
    var a = compiled(recipe);
    console.log('a: ', a);
    var elemento = $(a);

    $('.list-activities').append(elemento);
}


