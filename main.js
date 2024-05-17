const express = require("express")
const apiRouter = require("./api/apiRoute")
const { logger } = require("./middlewares2/logger")
const app = express()
const PORT = 3000

app.use(logger)
const infoAboutCosts = 
[

    {
        id:1,
        name:"NIKE Shoes",
        cost:["1199$"]
    },
    {
        id:2,
        name:"Food",
        cost:["2599$"]
    },
    {
        id:3,
        name:"car",
        cost:["11199$"]
    }
]




app.use("/api",apiRouter)
app.set("view engine","ejs")
app.get("/",(req,res) => {
    res.render("pages/home.ejs",{infoAboutCosts})
})
app.get("/:id", (req, res) => {
    const { id } = req.params;
    const costs = infoAboutCosts.find((el) => el.id === Number(id));

    if (!costs) {
        return res.status(404).send("Cost not found");
    }

    res.render("pages/about.ejs", { costs });
});






app.listen(PORT,() => {
    console.log(`server running on http://localhost:${PORT}`)
})
