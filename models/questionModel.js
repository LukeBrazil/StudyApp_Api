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
}