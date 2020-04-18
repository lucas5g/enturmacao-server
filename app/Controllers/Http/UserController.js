'use strict'

const User = use('App/Models/User')
const Profile = use('App/Models/Profile')
const Hash = use('Hash')

class UserController {

	async index({}){

		return User.query()
			.orderBy('name', 'asc')
			.fetch()


	}

	async show({params}){

		return await User.find(params.id)
	}

	async update({params, request}){

		const {id} = params
		const data = request.only(['email', 'email_sup', 'email_secretary','name', 'profile_name'])
		const {password, courses} = request.all()

		const profile = await Profile.findBy({name:data.profile_name})

		if(!profile)
			return {message: 'Perfil não cadastrado'}


		if(password)
			data.password = await Hash.make(password)		

		await User.query()
			.update(data)
			.where('id', id)
			

		return await User.find(id)

	}



}

module.exports = UserController
