'use strict'

const User=use('App/Models/User')
const Hash=use('Hash')

class AuthController {

	async authenticate( {request, auth} ) {

		const {email, password}  = request.all()

		const token = await auth.attempt(email, password)
		const user = await User.findBy({email})
		user.courses = await user.courses().fetch()
		token.user = user
		return token
	}

	async logout({auth}){

		await auth.logout()
	}



	async teste (){
		
		await User.query()
			.update({password: await Hash.make('10309785650')})
			.where({id:1})

	


		return await User.find(1)
	}
}

module.exports = AuthController
