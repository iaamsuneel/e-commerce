import express from "express";
import cors from "cors";
import productRoutes from "./routes/productRoutes";
import authRoute from "./routes/Auth/auth";
import dbConnection from "./config/database";
const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to backend application." });
});
app.use("/api", productRoutes);
app.use("/api/auth", authRoute);
// Testing the Connection
try {
    await dbConnection.sync({ force: false });
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
// set port, listen for requests
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
