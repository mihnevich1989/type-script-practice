const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
	console.log(skill.toLowerCase());
}

const res = skills
	.filter((a:string)=>a !== 'DevOps')
	.map((a:string)=>a + '! ')
	.reduce((a:string, b:string)=>a + b);

console.log(res);
