const express = require("express")

let app = express();
let port = 8081;

app.set("views","views")
app.set("view engine", "ejs")


app.use(express.json())
const routerTasks = require("./Router/routerTasks")
app.use("/tasks", routerTasks)

app.listen(port, () => {
    console.log("Servidor activo")
})


