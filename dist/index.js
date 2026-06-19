import express, { Router } from "express";
const app = express();
const PORT = parseInt(process.env.PORT || "3000", 10);
const router = Router();
//if the data to be received / sent is in json format
//Create a new file for Users with /users route -> Create, delete, edit , list
import usersRouter from "./users.js";
import productsRouter from "./product.js";
app.use(express.json());
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map