const express = require("express");
const apiRouter = require("./api/apiRoute");
const app = express();
const PORT = 3000;
const data = require("./data.json");

app.use("/api", apiRouter);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/homepage.ejs", { data });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const newData = data.find((el) => el.id === Number(id));

  if (!newData) {
    return res.status(404).send("Product Not Found");
  }

  res.render("pages/aboutpage.ejs", { newData });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
