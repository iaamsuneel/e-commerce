
import ProductModel from "../models/proudctModel";
export async function getAllProducts(req, res) {
    try {
        const data = await ProductModel.findAll();
        res.status(200).json({
            success: true,
            status: 200,
            message: "products found",
            data: data,
        });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message,
        });
    }
}
export async function createProduct(req, res) {
    const { title, description, rating, price, quantity, coverImg } = req.body;
    try {
        const data = await ProductModel.create({
            title,
            description,
            rating,
            price,
            quantity,
            coverImg,
        });
        res.status(200).json({
            success: true,
            status: 201,
            message: "Product added to the successfully",
            data: data,
        });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message,
        });
    }
}
export async function updateProduct(req, res) {
    const id = req.params.id;
    try {
        const data = await ProductModel.update(req.body, { where: { id: id } });
        if (data[0] == 0) {
            return res.status(400).json({
                success: true,
                status: 400,
                message: `Cannot update product with id=${id}, because id not found`,
            });
        }
        const result = await ProductModel.findByPk(id);
        res.status(200).json({
            success: true,
            status: 200,
            message: "Product was updated successfully",
            data: result.dataValues,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating Product with id=" + id,
            error: error.message,
        });
    }
}
export async function deleteProduct(req, res) {
    const id = req.params.id;
    console.log("-->", id);
    try {
        const data = await ProductModel.destroy({ where: { id: id } });
        console.log("data", data);
        if (data == 1) {
            return res.status(200).json({
                success: true,
                status: 200,
                message: "Product was deleted successfully",
                data: result.dataValues,
            });
        } else {
            return res.status(400).json({
                success: true,
                status: 400,
                message: `Cannot delete product with id=${id}, because id not found`,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting Product with id=" + id,
            error: error.message,
        });
    }
}
