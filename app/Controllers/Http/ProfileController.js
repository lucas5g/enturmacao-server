'use strict'

const Profile = use('App/Models/Profile')

class ProfileController {

  async index ({ request, response, view }) {

    return await Profile.query()
      .orderBy('name', 'asc')
      .fetch()

  }


  async create ({ request, response, view }) {
  }


  async store ({ request, response }) {
  }

  async show ({ params, request, response, view }) {

    return await Profile.find(params.id)
  }

  /**
   * Render a form to update an existing profile.
   * GET profiles/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update profile details.
   * PUT or PATCH profiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a profile with id.
   * DELETE profiles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProfileController
