// “Input Example:
// const data = [
//   { user: { name: “”Alice”“, age: 25 } },
//   { user: { name: “”Bob”“, age: 30 } },
//   { user: { name: “”Charlie”“, age: 25 } }
// ];
// Expected Output:
// [
//   { user: { name: “”Alice”“, age: 25 } },
//   { user: { name: “”Charlie”“, age: 25 } }
// ]
// which age is 25 show that user

const data = [
      { user: { name: "Alice", age: 25 } },
      { user: { name: "Bob", age: 30 } },
      { user: { name: "Alice", age: 25 } },
      { user: { name: "Bob", age: 30 } },
      { user: { name: "Charlie", age: 25 } },
    ];

const filterData = data.filter(item => item.user.age === 25)
console.log(filterData)
// console.log(data[0].user.age)
// console.log(data[1].user.age)
// console.log(data[2].user.age)

