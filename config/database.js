import { Sequelize } from "sequelize";
const dbConnection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "Sun@8898",
    database: "e-commerce",
    define: {
        timestamps: false, // Disable timestamps by default
    },
});

export default dbConnection;
