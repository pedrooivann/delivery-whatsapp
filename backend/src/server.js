
import express from "express";
import productRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/categories.routes.js"
import orderRoutes from "./routes/orders.routes.js";
import orderItemsRoutes from "./routes/orders-items.routes.js";
import clientRoutes from "./routes/clients.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/orders", orderRoutes);
app.use("/clients", clientRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
