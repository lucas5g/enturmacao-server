'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursesSchema extends Schema {
  up () {
    this.create('courses', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('shift').notNullable()
      table.integer('codcur').notNullable()
      table.integer('codper').notNullable()
      table.string('alias')
      table.timestamps()
    })
  }

  down () {
    this.drop('courses')
  }
}

module.exports = CoursesSchema
