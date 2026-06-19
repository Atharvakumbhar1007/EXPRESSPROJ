import express from "express";
const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
app.use(express.json());
const users = [
    {
        id: 1, name: "Atharva", email: "atharva@gmail.com"
    }
];
// GET ALL USERS
app.get("/users", (req, res) => {
    res.json(users);
});
;
// GET USER BY ID
app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }
    return res.json(user);
});
// CREATE USER
app.post("/users", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, email } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json({
        message: "User created",
        user: newUser
    });
});
// EDIT / UPDATE USER
app.patch("/users/:id", (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    user.name = req.body.name ?? user.name;
    user.email = req.body.email ?? user.email;
    res.json({
        message: "User updated",
        user
    });
});
// DELETE USER
app.delete("/users/:id", (req, res) => {
    const index = users.findIndex(u => u.id === Number(req.params.id));
    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    const deletedUser = users.splice(index, 1);
    res.json({
        message: "User deleted",
        user: deletedUser[0]
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index6.js.map