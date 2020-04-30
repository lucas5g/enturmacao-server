'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersCoursesSchema extends Schema {
  up () {
    this.create('users_courses', (table) => {
      table.increments()
      table.integer('course_id').notNullable()
      table.integer('user_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users_courses')
  }
}

module.exports = UsersCoursesSchema
