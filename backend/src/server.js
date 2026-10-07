import http from "http";

const PORT = 8080;



const server = http.createServer((req, res) =>{

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("hello");



});

server.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

