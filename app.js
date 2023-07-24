const express = require("express");
const path = require("path");

const app = express();
const PORT = 3030;

app.use(express.static('public'))

/* rutas */

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "index.html"))
);
app.get("/carrito", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "carrito.html"))
);
app.get("/login", (req, res) =>
    res.sendFile(path.join(__dirname,"views", "login.html"))
);
app.get("/producto", (req, res) =>
    res.sendFile(path.join(__dirname,"views", "producto.html"))
);
app.get("/footer", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "footer.html"))
);
app.get("/product/vinilos", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "product", "vinilos.html"))
);
app.get("/product/indumentaria", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "product", "indumentaria.html"))
);
app.get("/product/shows", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "product", "shows.html"))
);
app.get("/registro", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "registro.html"))
);
app.get("/profile", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "profile.html"))
);



app.listen(PORT, () =>
    console.log("Server running in http://localhost:" + PORT)
);
