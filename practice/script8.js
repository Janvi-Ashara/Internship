function CountWords(string){
    let words = string.split(" ")
    let result={}
    for (let i=0; i<words.length ; i++){
        let currentWord = result[words[i]];
        let count = currentWord ? currentWord : 0;
        result[words[i]] = count+1;
    }
    return result;
}
words= CountWords("hello world hello , how are you?")
console.log(words)