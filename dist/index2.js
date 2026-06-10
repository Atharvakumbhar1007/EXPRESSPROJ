import express from "express";
const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
//10 -> decimal number system, base 10
app.set("appName", "My express app");
app.get("/", (req, res) => {
    res.status(200).send("OK");
});
app.get("/name", (req, res) => {
    res.send("Application Name: " + app.get("appName"));
    // it automatically generates content type
});
app.get("/html", (req, res) => {
    res.send("<h1>Hi there</h1>");
});
app.get("/api/status", (req, res) => {
    res.json({
        status: "running",
        timestamp: new Date().toString()
    });
});
app.get("/buffer", (req, res) => {
    res.send(Buffer.from("Buffer Data"));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index2.js.map