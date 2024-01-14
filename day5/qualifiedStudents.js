const students = [
  { name: "John", age: 18, grade: "A" },
  { name: "Sarah", age: 20, grade: "B" },
  { name: "Michael", age: 17, grade: "A" },
  { name: "Emily", age: 19, grade: "A" },
  { name: "David", age: 21, grade: "A" },
];

var qualified = students.filter((stdt) => stdt.age > 18 && stdt.grade == "A");
console.log(qualified);
