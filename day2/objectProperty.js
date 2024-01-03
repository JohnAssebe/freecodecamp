// const createPerson = (name, age, gender) => {
//   return {
//     name:name,
//     age:age,
//     gender:gender
//   };

// };

// EE6 object property shorthanded as follow
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender,
  };
};
const john = createPerson("john", 26, "male");
console.log(john);
