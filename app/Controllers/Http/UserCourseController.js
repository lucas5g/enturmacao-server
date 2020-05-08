'use strict'
const UserCourse = use('App/Models/UserCourse')

class UserCourseController {

  async  store(courses, user_id) {

    
    for (let r in courses){     
      await UserCourse.create({ course_id: courses[r].id, user_id })
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
