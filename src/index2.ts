import express from "express";
import type {Request, Response} from "express";
const app = express();

const PORT: number = parseInt(process.env.PORT || "3000", 10);
//10 -> decimal number system, base 10
app.set("appName","My express app");
app.get("/", (req:Request, res: Response) =>{
    res.status(200).send("OK");
});

app.get("/name", (req:Request, res: Response) =>{
    res.send("Application Name: " + app.get("appName"));
    // it automatically generates content type
});
app.get("/html", (req:Request, res: Response) =>{
    res.send("<h1>Hi there</h1>");
});
app.get("/api/status", (req:Request, res: Response) =>{
    res.json({
        status:"running",
        timestamp:new Date().toString()
    });
});
app.get("/buffer", (req:Request, res: Response) =>{
    res.send(Buffer.from("Buffer Data"));
});

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});