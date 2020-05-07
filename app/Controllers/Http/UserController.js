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

		const user = await User.find(params.id)
		user.courses = await user.courses().fetch()
		user.coursesDelete = []

		return user
	}

	async update({params, request}){

		const {id} = params
		const data = request.only(['email', 'email_sup', 'email_secretary','name', 'profile_name'])
		const {password, courses, coursesDelete} = request.all()

		const profile = await Profile.findBy({name:data.profile_name})

		if(!profile)
			return {message: 'Perfil não cadastrado'}


		if(password)
			data.password = await Hash.make(password)		

		await User.query()
			.update(data)
			.where('id', id)

		return coursesDelete
			

		return await User.find(id)

	}



}

module.exports = UserController
