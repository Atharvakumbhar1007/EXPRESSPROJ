import express from "express";
const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
//| - the data to be received / send is in json forest
app.use(express.json());
app.get("/products", (req, res) => {
    res.json({ action: "GET - all products" });
});
app.post("/products", (req, res) => {
    res.status(201).json({ action: "POST - create product",
        received: req.body });
});
app.put("/products/1", (req, res) => {
    res.status(201).json({ action: "PUT - create product",
        received: req.body });
});
app.patch("/products/1", (req, res) => {
    res.status(201).json({ action: "PATCH - partial update product 1",
        received: req.body });
});
app.delete("/products/1", (req, res) => {
    res.json({ action: "DELETE- remove a product",
        received: req.body });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index3.js.map