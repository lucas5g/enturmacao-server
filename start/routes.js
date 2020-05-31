'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { app: 'Entumação api' }
})

Route.post('/login', 'AuthController.authenticate')
//Route.get('/teste', 'AuthController.teste')

Route.group(() => {

	//Route.get('/logout', 'AuthController.logout') dont work

	Route.resource('/users', 'UserController').apiOnly()
	Route.get('/users/filter/:search', 'UserController.index')
	
	Route.resource('/profiles', 'ProfileController').apiOnly()
	Route.resource('/students', 'StudentController').apiOnly()
	Route.resource('/courses', 'CourseController').apiOnly()
	/*
	Route.get('/courses', 'CourseController.index')
	Route.get('/courses/:codcur/:codper/:shift', 'CourseController.show')
	/** */
	Route.resource('/classes', 'ClassController').apiOnly()
	
}).middleware('auth')

