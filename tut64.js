const fs=require("fs");
let text=fs.readFileSync("del.txt","utf-8");
text=text.replace("good","bad");
console.log("The content of the file is");
console.log(text);
console.log("Writing a new file");
fs.writeFileSync("ans.txt",text);