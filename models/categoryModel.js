const db = require("./conn");

class CategoryModel {
    constructor(id, title, description, user_id) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.user_id = user_id;
    }

    static async getAllCategories(user_id) {
        try {
            const response = await db.any((`SELECT * FROM category WHERE user_id = ${user_id};`));
            return response;
        } catch (error) {
            return error.message;
        }
    }

}

module.exports = CategoryModel;