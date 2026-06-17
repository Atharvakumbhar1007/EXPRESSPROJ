import express from "express";
import type {Request, Response} from "express";
const app = express();
const PORT: number = parseInt(process.env.PORT || "3000", 10);

//if the data to be received / sent is in json format
//Create a new file for Users with /users route -> Create, delete, edit , list
interface Product{
    id:number;
    name:string;
    price:number;
};
interface OrderLine{
    id:number;
    pid:number;
    qty:number;
    rate:number;
}
app.use(express.json());
const products:Product[] = [
    {id:1, name:"Pen", price:50},
    {id:2, name:"Pencil", price:20},
    {id:3, name:"Ruler", price:100}
];

const orderLine:OrderLine[] = [
    {id:1, pid:1, qty:50, rate:20},
    {id:2, pid:1, qty:50, rate:18},
    {id:10, pid:3, qty:39, rate:90}
];
app.get("/products", (req:Request, res:Response) =>{
    res.json(products);
});

app.post("/products", (req:Request<{}, {}, Product>, res:Response) =>{
    const {name, price} = req.body;

    if(!name ||price === undefined){
        return res.status(400).json({error:"Name and price not found"});
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
//here :id is a route parameter

app.get("/products/:id", (req:Request, res:Response) =>{
    const id = parseInt(req.params.id as string, 10);
    const prod = products.find(p => p.id === id);

    if(!prod){
        return res.status(404).json({error:"Product not found"});
    }
    else{
        return res.json(prod);
    }
    //res.json({action:"PUT - replace product 1", received:req.body});
});
app.get("/products/:id/orders", (req:Request, res:Response) =>{
    const id = parseInt(req.params.id as string, 10);
    const prod = products.find(p => p.id === id);
    if(!prod){
        return res.status(404).json({error:"Product not found"});
    }
    else{
        return res.json(orderLine.filter(line => line.pid === id));
    }
});
app.patch("/products/1", (req:Request, res:Response) =>{
   // res.json({action:"PATCH - partial update product 1", received:req.body});
});

app.delete("/products/1", (req:Request, res:Response) =>{
    res.json({action:"DELETE - remove a product", received:req.body});
})
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});