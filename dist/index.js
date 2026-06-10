import express from "express";
const app = express();
app.set("appName", "My express app");
app.get("/", (req, res) => {
    res.status(200).send("OK");
});
app.get("/name", (req, res) => {
    res.send("Application Name: " + app.get("appName"));
});
app.get("/html", (req, res) => {
    res.send("<h1>Hi There</h1>");
});
app.get("/buffer", (req, res) => {
    const data = Buffer.from("Hello Buffer");
    res.send(data);
});
app.listen(3000, () => {
    console.log("Server running");
});
//# sourceMappingURL=index.js.map