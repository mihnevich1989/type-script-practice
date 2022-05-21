"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'John',
    surname: 'Doe',
    city: 'London',
    age: 30,
    skills: {
        qa: true,
        dev: false
    }
};
console.log(getFullName(user));
