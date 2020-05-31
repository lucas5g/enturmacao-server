'use strict'

const Course = use('App/Models/Course')
const Class = use('App/Models/Class')
const Student = use('App/Models/Student')
class CourseController {

  async index ({ request, response, view }) {

    return await Course.query()
      .orderBy('unity', 'asc')
      .orderBy('name', 'asc')
      .fetch()
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'shift', 'unity', 'codcur', 'codper' ])

    return await Course.create(data)

    //return data

  }

  async show ({ params, request, response, view }) {

    const {id} = params
    const course = await Course.find(id)

    if(!course)
      return {message: 'Curso não encontrado'}

    //return course
    const {codcur, codper, shift} = course

    let classFind = await Class.query()
      .where({codcur, codper, shift})
      .fetch()

    classFind = classFind.toJSON()
    
    //return classFind
    for(let r in classFind){
      classFind[r].students = await Student.query()
      .where({class_id: classFind[r].id})
      .orderBy('nome', 'asc')
      .fetch()
    }

    //Students without class
    
    classFind.unshift({
      id: 0,
      name: 'Sem Turma',
      students: await Student.query()
        .where({codcur, codper, class_id:0, turno:shift})
        .orderBy('nome', 'asc')
        .fetch()
    })

    course.classes = classFind
    return course


    
  }


  async update ({ params, request, response }) {
    const data = request.only(['name', 'shift', 'unity', 'codcur', 'codper' ])
    const {id} = params

    await Course.query()
      .update(data)
      .where({id})
    return await Course.find(id)
  }

  async destroy ({ params, request, response }) {

  }
}

module.exports = CourseController
    /*
   
    /** */
