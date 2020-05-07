'use strict'
const UserCourse = use('App/Models/UserCourse')

class UserCourseController {

  async  store(){
    console.log('add course')

  }

  async destroy(){
    console.log('delete user course')
  }

}

module.exports = UserCourseController
