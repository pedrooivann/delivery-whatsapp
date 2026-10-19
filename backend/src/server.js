import express from "express";
import productRoutes from "../src/routes/products.routes";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/products", productRoutes);

const server = http.createServer((req, res) =>{

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello");



});

server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});

