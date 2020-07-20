/*Q.2 Destructure the following object 
const student
{
    name:"helsinki",
    age:24,
    projects:{dicegame:"Two player dice game using Javascript"}
}*/

const student=
{
    name: "helsinki",
    age: 24,
    projects: {dicegame:"Two player dice game using Javascript"}
}
let{name,age,projects}=student;
console.log(name);
console.log(age);
console.log(projects);
console.log(projects.dicegame)