"use strict";
// Link to databse
const db = require("./conn");
// Linking bcrypt password encryption Express Module
const bcrypt = require("bcryptjs");


class CardModel {
    constructor(id, title, question, answer, category) {
        this.id = id;
        this.title = title;
        this.question = question;
        this.answer = answer;
        this.category = category;
    }

    static async getCardById(id) {
        try {
            const response = await db.any('SELECT * from card where id = id;');
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async removeCard(id) {
        try {
            const response = await db.result(`delete from card where id = id;`);
            return response;
        } catch (err) {
            return err.message;
        }

    }

    static async addCard(id) {
        const query = `INSERT INTO card (title, question, answer, category) VALUES (${title}, ${question}, ${answer}, ${category})`

        try {
            const response = await db.result(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }

    static async updateCard(id, title, question, answer, category) {
        const query = `UPDATE card SET title = ${title} question = ${question} answer = ${answer} category = ${category} WHERE id = ${id};`
        try {
            const response = await db.result(query);
            return response;
        } catch (err) {
            return err.message;
        }
    }
        
}

module.exports = CardModel;