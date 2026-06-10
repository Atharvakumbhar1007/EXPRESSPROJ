import express from "express";
import type { Request, Response } from "express";

const app = express();

// Application settings
app.set("appName", "My Express App");

// Home Route
app.get("/", (req: Request, res: Response) => {
    res.status(200).send("OK");
});

// App Name Route
app.get("/name", (req: Request, res: Response) => {
    res.send("Application Name: " + app.get("appName"));
});

// HTML Response Route
app.get("/html", (req: Request, res: Response) => {
    res.send("<h1>Hi There</h1>");
});

// Buffer Response Route
app.get("/buffer", (req: Request, res: Response) => {
    res.send(Buffer.from("buffer data"));
});

// JSON API Route
app.get("/api/status", (req: Request, res: Response) => {
    res.json({
        status: "Running",
        timeStamp: new Date().toISOString()
    });
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});