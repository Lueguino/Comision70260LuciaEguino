import crypto from "crypto";

class ProductsManager {
    static #all = [
      {
        id: crypto.randomBytes(12).toString("hex"),
        titulo: "Arándano",
        descripcion: "Variedad: Rocio",
        categoria: "Berries",
        imagen: "https://panorama-agro.com/wp-content/uploads/2019/12/Portada-arandanos.jpg",
        precio: 150,
        stock: 15
      },
      {
        id: crypto.randomBytes(12).toString("hex"),
        titulo: "Frambuesa",
        descripcion: "Variedad: Maravilla",
        categoria: "Berries",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UCBjvHDZIPBw8XoOnVCFyuZVetA75yj7Fw&s",
        precio: 160,
        stock: 10
      }   
    ];
    create(data) {
      const promesa = new Promise((resolve, reject) => {
        try {
          data.id = crypto. randomBytes(12).toString("hex"); 
          ProductsManager.#all.push(data);
          console.log("EXITO AL CREAR: ID-" + data.id);
          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
      return promesa;
    }
    readAll() {
      try {
        const promesa = new Promise((resolve, reject) => {
          if (ProductsManager.#all.length > 0) {
            resolve(ProductsManager.#all);
          } else {
            reject("ERROR AL LEER TODOS");
          }
        });
        return promesa;
      } catch (error) {
        reject(error);
      }
    }
  }
  
async function test() {
    try {
      const manager = new ProductsManager();
      await manager.readAll();
      manager.create({
        id: 1,
        titulo: "Arándano",
        descripcion: "Variedad: Rocio",
        categoria: "Berries",
        imagen: "https://panorama-agro.com/wp-content/uploads/2019/12/Portada-arandanos.jpg",
        precio: 150,
        stock: 15
      });
      manager.create({
        id: 2,
        titulo: "Frambuesa",
        descripcion: "Variedad: Maravilla",
        categoria: "Berries",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5UCBjvHDZIPBw8XoOnVCFyuZVetA75yj7Fw&s",
        precio: 160,
        stock: 10
      });
      await manager.readAll();
    } catch (error) {
      console.log(error);
    }
  }
  
  //test();
  
  const productsManager = new ProductsManager();
  export default productsManager; 