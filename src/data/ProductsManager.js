import fs from "fs";
import crypto from "crypto";

class ProductsManager {
  constructor(path) {
    this.path = path;
    this.exists();
  }
  //para confirmar si existe:
  exists() {
    const exist = fs.existsSync(this.path);
    if (!exist) {
      fs.writeFileSync(this.path, JSON.stringify([]));
      console.log("file created");
    } else {
      console.log("file already exists");
    }
  }
  async readAll() {
    try {
      const data = await fs.promises.readFile(this.path, "utf-8");
      const parseData = JSON.parse(data);
      //console.log(parseData);
      return parseData;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async read(id) {
    try {
      const all = await this.readAll();
      const one = all.find((each) => each.id === id);
      //console.log(one);
      return one;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async create(data) {
    try {
      data.id = crypto.randomBytes(12).toString("hex");
      const all = await this.readAll();
      all.push(data);
      const stringAll = JSON.stringify(all, null, 2);
      await fs.promises.writeFile(this.path, stringAll);
      return data.id;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

const productsManager = new ProductsManager("./src/data/files/products.json");
export default productsManager;
   




   