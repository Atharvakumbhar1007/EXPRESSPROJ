import express from "express";
;
const products = [
    { id: 1, name: "Pen", price: 50 },
    { id: 2, name: "Pencil", price: 20 },
    { id: 3, name: "Ruler", price: 100 }
];
const orderLine = [
    { id: 1, pid: 1, qty: 50, rate: 20 },
    { id: 2, pid: 1, qty: 50, rate: 18 },
    { id: 10, pid: 3, qty: 39, rate: 90 }
];
const router = express.Router();
router.get("/", (req, res) => {
    res.json(products);
});
router.post("/", (req, res) => {
    const { name, price } = req.body;
    if (!name || price === undefined) {
        return res.status(400).json({ error: "Name and price not found" });
    }
    else {
        let p = {
            id: products.length + 1,
            name, price
        };
        products.push(p);
        return res.status(201).json({ message: "Product created" });
    }
});
//here :id is a route parameter
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const prod = products.find(p => p.id === id);
    if (!prod) {
        return res.status(404).json({ error: "Product not found" });
    }
    else {
        return res.json(prod);
    }
    //res.json({action:"PUT - replace product 1", received:req.body});
});
router.get("/:id/orders", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const prod = products.find(p => p.id === id);
    if (!prod) {
        return res.status(404).json({ error: "Product not found" });
    }
    else {
        return res.json(orderLine.filter(line => line.pid === id));
    }
});
router.patch("1", (req, res) => {
    // res.json({action:"PATCH - partial update product 1", received:req.body});
});
router.delete("1", (req, res) => {
    res.json({ action: "DELETE - remove a product", received: req.body });
});
export default router;
//# sourceMappingURL=product.js.map