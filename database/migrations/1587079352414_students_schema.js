'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StudentsSchema extends Schema {
  up () {
    this.create('students', (table) => {
      table.string('id', 8).notNullable().unique()
      table.string('nome', 150).notNullable()
      table.string('vet_nov', 10).notNullable()
      table.string('tur_ant', 10).notNullable()
      table.string('sexo', 10).notNullable()
      table.string('turno', 10).notNullable()
      table.string('situacao', 20).notNullable()
      table.string('cidade', 150).notNullable()
      table.integer('codtun').notNullable()
      table.integer('media').notNullable()
      table.integer('codcur').notNullable()
      table.integer('codper').notNullable()
      table.string('escola_origem', 150).notNullable()

      





      table.timestamps()
    })
  }

  down () {
    this.drop('students')
  }
}

module.exports = StudentsSchema
