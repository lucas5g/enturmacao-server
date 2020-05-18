'use strict'
const UserCourse = use('App/Models/UserCourse')

class UserCourseController {

  async  store(courses, user_id) {

    
    for (let r in courses){     
      //verifica se usuario ja possui o curso
      let verify  = await UserCourse.query()
        .where({course_id:courses[r].id, user_id})
        .fetch()
        verify = verify.toJSON()
        
        //caso nao tenha, inserir
      if(verify.length === 0){
        await UserCourse.create({ course_id: courses[r].id, user_id })
      }
    }
    
  }
  async destroy(coursesDelete, user_id) {
    for (let r in coursesDelete){     
      await UserCourse.query()
        .where({course_id:coursesDelete[r].id, user_id})
        .delete()
    }
   
  }

}

module.exports = UserCourseController
