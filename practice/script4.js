
//4. Dynamic Template Replacer

// function replacePlaceHolders(name,count){
//   let str = "Hello, {{name}}! You have {{count}} messages";
//   str = str.replace("{{name}}",name);
//   str = str.replace("{{count}}",count);
//   console.log(str);
// }
// replacePlaceHolders("Alice",5);

function replacePlaceHolders(str,data){
    let keys = Object.keys(data);
    let values= Object.values(data);
    let newStr= str;
    for(let i=0; i<keys.length; i++){
      newStr = newStr.replace(`{{${keys[i]}}}`, values[i]);
    }
    console.log(newStr);
  }
  replacePlaceHolders("Hello, {{name}}! You have {{count}}  messages from {{university}} university", { name: "Janvi", count: 2 ,university:"Atmiya"});