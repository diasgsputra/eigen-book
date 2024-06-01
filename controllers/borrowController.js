const { sequelize, Borrow } = require("../models");

const addBorrowBook = async (req, res) => {
    const { id_book, id_member} = req.body;
  
    try {
      let borrow;
        // Create new borrow book
        borrow = await Borrow.create({
          id_book,
          id_member
        });
  
      return res.status(200).json({ message: "Data saved" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

module.exports = { addBorrowBook};