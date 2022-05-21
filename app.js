"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
const res = skills
    .filter((a) => a !== 'DevOps')
    .map((a) => a + '! ')
    .reduce((a, b) => a + b);
console.log(res);
