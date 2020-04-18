'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 250).notNullable().unique()
      table.string('email_sup', 250).notNullable()
      table.string('email_secretary', 250).notNullable()
      table.string('password', 100).notNullable()
      table.string('name', 150).notNullable()
      table.string('profile_name', 50).notNullable()

      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
