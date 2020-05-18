'use strict'

const Course = use('App/Models/Course')
const Class = use('App/Models/Class')
const Student = use('App/Models/Student')
class CourseController {

  async index ({ request, response, view }) {

    return await Course.all()
  }

  async store ({ request, response }) {

  }

  async show ({ params, request, response, view }) {

    let {codcur, codper, shift} = params
    shift = decodeURI(shift)
    const course = await Course.findBy({codcur, codper, shift})

    if(!course)
      return {message: 'Curso não encontrado'}

    course.students = await Student.query()
      .where({codcur, codper, turno:shift})
      .fetch()

    return course

    /*
    if(!course)
      return {message: 'Curso não cadastrado'}
    
    let classFind = await Class.query()
      .where({codcur, codper, shift})
      .fetch()

    classFind = classFind.toJSON()
    
    for(let r in classFind){
      classFind[r].students = await Student.query().where({class_id: classFind[r].id}).fetch()
    }
    
    classFind.unshift({
      id: 0,
      name: 'Sem Turma',
      students: await Student.query().where({codcur, codper, class_id:0}).fetch()
    })

    course.classes = classFind
    /** */

    
  }


  async update ({ params, request, response }) {

  }

  async destroy ({ params, request, response }) {

  }
}

module.exports = CourseController
