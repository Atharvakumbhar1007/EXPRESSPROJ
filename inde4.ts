import express from "express";
import type { Request, Response } from "express";

const app = express();

const PORT: number = parseInt(process.env.PORT || "3000", 10);

// Product Interface
interface Product {
    id: number;
    name: string;
    price: number;
}

// OrderLine Interface
interface OrderLine {
    id: number;
    pid: number;
    qty: number;
    rate: number;
}

app.use(express.json());

// Arrays should use [] not {}
const products: Product[] = [
    { id: 1, name: "Pen", price: 50 },
    { id: 2, name: "Pencil", price: 20 },
    { id: 3, name: "Ruler", price: 100 }
];

const orderLines: OrderLine[] = [
    { id: 1, pid: 1, qty: 50, rate: 20 },
    { id: 2, pid: 1, qty: 50, rate: 18 }
];

app.set("appName", "My Express App");

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("OK");
});

// App Name Route
app.get("/name", (req: Request, res: Response) => {
    res.send("Application Name: " + app.get("appName"));
});

// HTML Response
app.get("/html", (req: Request, res: Response) => {
    res.send("<h1>Hi there</h1>");
});

// JSON Response
app.get("/api/status", (req: Request, res: Response) => {
    res.json({
        status: "running",
        timestamp: new Date().toString()
    });
});

// Buffer Response
app.get("/buffer", (req: Request, res: Response) => {
    res.send(Buffer.from("Buffer Data"));
});

// Get All Products
app.get("/products", (req: Request, res: Response) => {
    res.json(products);
});

// Get All Order Lines
app.get("/orderlines", (req: Request, res: Response) => {
    res.json(orderLines);
});

// 404 Error Page
app.use((req: Request, res: Response) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});