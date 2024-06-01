const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Members = sequelize.define('members', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        }
    });


    return Members;
};