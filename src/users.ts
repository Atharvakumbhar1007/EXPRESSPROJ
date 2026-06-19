import express from "express";
import type { Request, Response } from "express";

const router = express.Router();

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "Aanchal", email: "aanchal@gmail.com" },
  { id: 2, name: "Rahul", email: "rahul@gmail.com" },
  
];


router.get("/", (req: Request, res: Response) => {
  res.json(users);
});

// CREATE USER
router.post("/", (req: Request, res: Response) => {
  const { name, email } = req.body;

  const newUser: User = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

// EDIT USER//
router.put("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email } = req.body;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = name ?? user.name;
  user.email = email ?? user.email;

  res.json(user);
});

// DELETE USER//
router.delete("/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  users = users.filter((u) => u.id !== id);

  res.json({ message: "User deleted successfully" });
});
export default router;