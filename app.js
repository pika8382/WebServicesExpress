const http = require("http");

http.createServer((req, res) => {

        res.writeHead(200, { "Content-Type": "application/json" });

        let file = {
            nombre: "libard",
            asd: "asd sda d",
            url: req.url
        }
        res.write(JSON.stringify(file));


        res.end();
    })
    .listen(8080);


console.log("Escuchando puerto 8080");