const students = [
    {id:45, name: "Shakib Khan"},
    {id:46, name: "Ananta Jalil"},
    {id:47, name: "Amir Khan"},
    {id:48, name: "Salman Khan"},
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id > 46);
const biggerOne = students.find( s => s.id > 46);
console.log(biggerOne);
