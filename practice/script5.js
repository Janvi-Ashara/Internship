//5. Flatten Nested Object

function flattenObject(obj){
    let output = {};
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            let flatObject= flattenObject(obj[key]);
            for(let flatKey in flatObject){
                output[key + '.'+ flatKey] = flatObject[flatKey];
            }
        }
        else{
            output[key] = obj[key];
        }
    }
    return output;
}
const details= flattenObject({
    user: {
        name: "Alice",
        address: { city: "Wonderland", zip: "12345" },
    }
});
console.log(details);

