const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
const BookModel = require('./bookModel');
const MemberModel = require('./memberModel');
const BorrowModel = require('./borrowModel');

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'book_library',
    username: 'root',
    password: ''
});

const Books = BookModel(sequelize);
const Members = MemberModel(sequelize);
const Borrow = BorrowModel(sequelize);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({ alter: true })  // Use sync to ensure the table is created
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => {
        console.error('Error synchronizing the database:', err);
    });

module.exports = {
    sequelize,
    Books,
    Members,
    Borrow
};
