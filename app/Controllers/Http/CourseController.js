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

    const {codcur, codper} = params

    
    const course = await Course.findBy({codcur, codper})
    let classFind = await Class.query()
      .where({codcur: course.codcur, codper: course.codper})
      .fetch()

    classFind = classFind.toJSON()
 
    for(let r in classFind){
      classFind[r].students = await Student.query().where({class_id: classFind[r].id}).fetch()
    }
    
    classFind.unshift({
      id: 0,
      name: 'Sem Turma',
      students: await Student.query().where({codcur: course.codcur, codper: course.codper, class_id:0}).fetch()
    })

    course.classes = classFind
  

    return course
    
  }


  async update ({ params, request, response }) {

  }

  async destroy ({ params, request, response }) {

  }
}

module.exports = CourseController
