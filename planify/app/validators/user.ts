import vine from '@vinejs/vine'
import { kMaxLength } from 'buffer'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string().trim().minLength(6),
    email: vine.string().trim().email().maxLength(254),
    password: vine.string().trim().escape(),
  })
)
