const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Borrow = sequelize.define('borrow', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_book: {
            type: DataTypes.INTEGER,
        },
        id_member: {
            type: DataTypes.INTEGER,
        }
    });


    return Borrow;
};