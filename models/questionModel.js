const db = require('./conn');

class questionModel {
    constructor(id, question, answer, category_id, category) {
        this. id = id;
        this.question = question;
        this.answer = answer;
        this.category_id = category_id
        this.category = category;
    }

    static async getEverything() {
        try {
            const response = await db.result('SELECT * FROM questions;');
            return response;
        } catch (err) {
            return err.message
        }
    }

    static async getJavascript() {
        try {
            const response = await db.result("SELECT * FROM questions WHERE category = 'Javascript';");
            return response;
        } catch (error) {
            return error.message
        }
    }

    static async getReact() {
        try {
            const response = await db.result("SELECT * FROM questions WHERE category = 'React';");
            return response;
        } catch (error) {
            return error.message
        }
    }

    static async getPython() {
        try {
            const response = await db.result("SELECT * FROM questions WHERE category = 'Python';");
            return response;
        } catch (error) {
            return error.message
        }
    }
}

module.exports = questionModel;