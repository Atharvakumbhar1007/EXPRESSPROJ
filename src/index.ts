import express from "express";
import type { Request, Response } from "express";

const app = express();

const PORT: number = parseInt(process.env.PORT || "3000", 10);

interface Product {
    id: number;
    name: string;
    price: number;
}

interface OrderLine {
    id: number;
    pid: number;
    qty: number;
    rate: number;
}

app.use(express.json());

const products: Product[] = [
    { id: 1, name: "Pen", price: 50 },
    { id: 2, name: "Pencil", price: 20 },
    { id: 3, name: "Ruler", price: 100 }
];

const orderLines: OrderLine[] = [
    { id: 1, pid: 1, qty: 50, rate: 20 },
    { id: 2, pid: 1, qty: 50, rate: 18 },
    { id: 10, pid: 3, qty: 39, rate: 90 }
];

app.get("/products", (req: Request, res: Response) => {
    res.json(products);
});

app.get("/products", (req: Request, res: Response) =>{
    const {name, price} = req.body;
 if(!name ||price === undefined){
        return res.status(400).json({error:"Name  and price not found"});
    }
    else{
        let p:Product = {
            id:products.length + 1,
            name, price
        };
        products.push(p);
        return res.status(201).json({message:"Product created"});
    }
});

app.get("/products/:id",(req:Request, res:Response) =>{
    const id = parseInt(req.params.id as string, 10);
    const prod = products.find(p => p.id === id);

    if(!prod){
        return res.status(404).json({error:"Product not found"});
    }
    else{
        return res.json(prod);
    }
});

app.get("/products/:id/orders", (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string, 10);
    const prod = products.find(p => p.id === id);
    if(!prod){
        return res.status(404).json({error:"Product not found"});
    }
    else{
        return res.json(orderLines.filter(line => line.pid === id));
    }
});
app.patch("/products/1",(req: Request, res: Response) =>{

});

app.delete("/products/1",(req: Request, res: Response) =>{
    res.json({action:"DELETE - remove a product", received:req.body});
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});