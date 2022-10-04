type User = {
	name: string,
	age: number,
	skills: string[]
}

type Role = {
	id: number
}

type UserWithRole = User & Role; // интерсепт & - объединение нескольких типов
/* 
type UserWithRole = {
	user: User,
	role: Role
} */

let user: UserWithRole = {
	name: 'asd',
	age: 33,
	skills: ['1', '2'],
	id: 111
}
