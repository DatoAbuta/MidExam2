const products = [
  {
    id: 1,
    name: "milk",
    expired: true,
  },
  {
    id: 2,
    name: "bread",
    expired: true,
  },
];

const getAllProducts = (req, res) => {
  res.json({ success: true, data: products });
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((el) => el.id === Number(id));
  if (!product) {
    return res
      .status(404)
      .json({ success: false, data: null, message: "not found this user" });
  }
  res.status(200).json({ success: true, data: product });
};

module.exports = { getAllProducts, getProductById };
