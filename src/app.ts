import "reflect-metadata";
import "express-async-errors";
import express from "express";
import userRoutes from "./routes/users.routes";
import handleError from "./errors/handleError";
import categoryRoutes from "./routes/categories.routes";
import propertyRoutes from "./routes/property.routes";
import schedulesRoutes from "./routes/schedules.routes";

const app = express();
app.use(express.json());
app.use("", userRoutes);
app.use("", categoryRoutes);
app.use("", propertyRoutes);
app.use("", schedulesRoutes);
app.use(handleError);

export default app;
