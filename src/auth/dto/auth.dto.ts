import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsOptional()
	@IsString()
	name: string

	@IsString({
		message: 'Почта обязательно'
	})
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Пароль должен быть не менее 6 символов'
	})
	@IsString({
		message: 'Пароль обязательно'
	})
	password: string
}
