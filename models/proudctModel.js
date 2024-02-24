import { DataTypes } from "sequelize";
import dbConnection from "../config/database";
const ProductModel = dbConnection.define("product_details", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    coverImg: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});
export default ProductModel;
