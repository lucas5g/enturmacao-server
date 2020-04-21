'use strict'

const Student = use('App/Models/Student')

class StudentController {
  
  async index ({ request, response, view }) {

    return await Student.query()
      .orderBy('nome', 'asc')
      .fetch()

  }


  async store ({ request, response }) {
  }

  
  async show ({ params, request, response, view }) {

    return await Student.find(params.id)
  }


  async update ({ params, request, response }) {

    const {id} = params 
    const data = request.only(['class_id'])

    await Student.query()
      .update(data)
      .where({id})


    return await  Student.find(id)


  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = StudentController
