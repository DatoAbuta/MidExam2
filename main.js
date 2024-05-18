const express = require("express");
const apiRouter = require("./api/apiRoute");
const app = express();
const PORT = 3000;

const data = [
  {
    id: 2,
    name: "Samsung",
    price: "1200",
    created: "2024-05-18T08:27:18.453Z",
  },
  {
    id: 3,
    name: "cigarette",
    price: "25",
    created: "2024-05-18T08:38:55.969Z",
  },
  {
    id: 4,
    name: "donaldduck",
    price: "50",
    created: "2024-05-18T08:39:01.237Z",
  },
  {
    id: 5,
    name: "bartyi",
    price: "900",
    created: "2024-05-18T12:22:22.894Z",
  },
];

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
