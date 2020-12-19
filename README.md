# cocktail-party

## User Stories

* 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
* 500 - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault.
* Homepage (vista pública) - Como usuario, quiero acceder a la homepage sin hacer un log in o sign up, para tener acceso a una primera vista de los cócteles más destacados. 
* Todos los cócteles (pública) - Mostrar todos los cócteles más funcionalidad para filtrar según diferentes criterios.
* Ficha cóctel (pública) - Mostrar todos los detalles del cóctel. Funcionalidad de añadir a favoritos y contactar con el creador del cóctel (sólo disponible si estás logeado). 
* Signup / login (pública). Registrarse para poder crear su propio cóctel, añadir a fovirots cócteles públicos y contactar con el creador cóc
* Login (privada). Log in a la cuenta para tener acceso a un Espacio privado para ver los favoritos y crear cócteles. Añadir información personal. 
* Área personal (privada): Registrar datos personales y tener acceso a la librería de cócteles que he marcado como favoritos. 
* Creación/edición/borrar de producto (privada): Formulario para subir mis propios cócteles, mostrarlos públicamente y que los demás usuarios puedan contactarme y añadir a favoritos. 
* Favoritos (privada): Ver mis cócteles favoritos. 

## Backlog
* Chat
* Botones para compartir en redes sociales
* Box de comentarios en la vista de ficha de producto
* Registro con redes sociales
* Opción de ver la contraseña al escribir
* Uso de Google maps API para mostrar la ubicación de los usuarios. 

## Routes

* GET /
    * Muestra la homepage.
* GET /
    * Muestra dentro de la homepage la opción para abrir formulario para login.
* GET /allcocktails
    * Renderizar la vista de todos los cócteles
* GET /allcocktails/:id
    * Renderizar la ficha del cóctel. 
* GET /signup
    * Redirige a / si el usuario está logeado. 
    * Renderiza el formulario para registrarse. 
* POST /signup
    * Envía la información del signup 
    * Crea un usuario en la base de datos (email, password) 
* POST /logout
    * Redirige a / si el usuario está logeado. 
* GET /privatearea
    * Formulario para completar/actualizar información personal y actualiza el usuario.
* POST /updateuserdata
    * Envía la información personal
    * Actualizar el usuario en la base de datos
* GET /createcocktail
    * Formulario para crear cóctel
* POST /createcocktail
    * Recoge la información del formulario y crea un cóctel en la colección de cócteles.
* GET /editcocktail
    * Formulario para editar un coctail
* PUT /editcocktail
    * Recoge la información del formulario y edita un cóctel ya existente en la colección de cócteles.
* DELETE /deletecocktail
    * Botón para borrar el cóctel y elimina un cóctel de la colección de cócteles. 

## MODELS

### User model

* email: String
* password: String
* username: String
* profilepic: String
* address: String
* city: String
* postalcode: Number
* country: String

### Cocktail model

* owner: ObjectId<User>
* name: String
* cocktail_image: String
* short_description: String
* description: String
* category: [Array]
* ingredients: [Array]
* instructions: [Array]
* creation_date: Date (YYYY-MM-DD)


## TRELLO
https://trello.com/b/lu6J8M3p/cocktail-party
