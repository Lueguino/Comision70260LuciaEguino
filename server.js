import {createServer, request, STATUS_CODES} from "http"
import router from "./router.js";
import express, {response} from "express";
import { log } from "console";
import productsManager from "./src/data/ProductsManager.js";

//const server = createServer (router)
//const port = 8080
//const ready = ()=> console.log("server ready on port" + port);
//server.listen(port, ready)

try {
const server = express ();
const port = 8080;
const ready = ()=> console.log("server ready on port" + port);
server.listen(port, ready);

server.get("/", (request, response)=>{
    try{
        return response.status(200).json({message: "CODER COMMERCE API"})
    } catch (error) {
        const { statusCode, message} = error
        return response
        .status(error.statusCode || 500)
        .json({ message: message || "FATAL ERROR"});
     }

});
} 
catch (error) {
    console.error(error);
  }

server.get("/api/products", async(rea, res) => { try {
    const response = await productsManager.readAll()
    if (response.length>0) {
        return res.status(200).json({message: "PRODUCTS READ", response});
    } 
    
} catch (error) {
    const { statusCode, message} = error
        return response
        .status(error.statusCode || 500)
        .json({ message: message || "FATAL ERROR"});
}

})

