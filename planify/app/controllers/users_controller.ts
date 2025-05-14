import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  public async showSignup({ view }: HttpContext) {
    return view.render('security/signup')
  }

  public async showlogin({ view }: HttpContext) {
    return view.render('security/login')
  }
}
