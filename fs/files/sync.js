import fs, { existsSync } from "fs";

const path1 = "./fs/files/products.json";
const path2 = "./fs/files/users.json";

const exists1 = fs.existsSync(path1);
const exists2 = fs.existsSync(path2);

const data = JSON.stringify([]);

if(!exists1) {
    fs.writeFileSync(path1, data);
}
if(!exists2) {
    fs.writeFileSync(path2, data);
}

const dataProducts = JSON.parse(fs.readFileSync(path1, "utf-8")) 
console.log(dataProducts);
const dataUsers = JSON.parse(fs.readFileSync(path2, "utf-8"))
console.log(dataUsers);