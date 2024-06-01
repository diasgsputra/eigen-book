const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Books = sequelize.define('books', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        stock: {
            type: DataTypes.INTEGER,
        }
    });


    return Books;
};