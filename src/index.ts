import express from "express";
import type {Request, Response} from "express";
const app = express();
app.get("/", (req:Request, res:Response)=>{
    res.status(200).send("OK");
});

app.use((req:Request, res:Response)=>{
    res.status(404).send("error page")
})
app.listen(3000, ()=>{
    console.log('Server is running');
});