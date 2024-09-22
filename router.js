import productsManager from "./data/ProductsManager.js";

async function router(requerimientos, respuesta) {
    const url = requerimientos.url
    const opts = { "Content-Type": "text/plain"}
    switch (url) {
        case "/":
            respuesta
            .writeHead(200, opts)
            .end("CODER API CONNECTED");
            break;

        case "/api/products":
            try{
            const products = await productsManager.readAll()
                return respuesta
                .writeHead(200, opts)
                .end(JSON.stringify(products));
            }   catch (error) {
                return respuesta 
                .writeHead(error.statusCode || 404, opts)
                .end("NOT FOUND PRODUCTS");
            }
    
        default:
            respuesta
            .writeHead(404, opts)
            .end("ENDPOINT NOT FOUND")
            break;
    }
}

export default router