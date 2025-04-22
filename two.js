// “You are given an array of objects, where each object has a category property.
//  Write a function that groups the objects by their category.
// const items = [
//   { name: “”Apple”“, category: “”Fruit”" },
//   { name: “”Carrot”“, category: “”Vegetable”" },
//   { name: “”Banana”“, category: “”Fruit”" },
//   { name: “”Broccoli”“, category: “”Vegetable”" }
// ];
// Expected Output:
// {
//   Fruit: [
//     { name: “”Apple”“, category: “”Fruit”" },
//     { name: “”Banana”“, category: “”Fruit”" }
//   ],
//   Vegetable: [
//     { name: “”Carrot”“, category: “”Vegetable”" },
//     { name: “”Broccoli”“, category: “”Vegetable”" }
//   ]
// }

const items = [
      { name: "Apple", category: "Fruit" },
      { name: "Carrot", category: "Vegetable" },
      { name: "Banana", category: "Fruit" },
      { name: "Broccoli", category: "Vegetable" },
    ];


function groupData(elements){
     let groupItems = {}
     for (const element of elements) {
        if(!groupItems[element.category]){
          groupItems[element.category] = []
          // console.log(groupItems)     //{ Fruit: [] }  { Fruit: [], Vegetable: [] }
          // console.log(element)  
        }
        groupItems[element.category].push(element)  //add item specific category
     }
      return groupItems
}

console.log(groupData(items))

  // console.log(items[0].name , items[0].category)
    // console.log(items[1].name , items[1].category)
    // console.log(items[2].name , items[2].category)
    // console.log(items[3].name , items[3].category)
    
function byAge(items) { 
  let groupItems = []
  for (const item of items) {
      // console.log(item)
      if(!groupItems[item]){
          groupItems[item]  = []
          console.log(item)
          
      }
      // groupItems[item].push(item.age)
      console.log(item.age)
  }
  return groupItems
}
console.log(byAge(data))