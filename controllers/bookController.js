const { sequelize } = require("../models");

const getAllBooks = async (req, res) => {
  try {
    // get all member
    const [books] = await sequelize.query(
      "SELECT * FROM books",
      {
        type: sequelize.QueryTypes.query,
      }
    );


    return res.status(200).json({ data: books });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getNonBorrowedBooks = async (req, res) => {
    try {
      // get all member
      const [books] = await sequelize.query(
        "SELECT b.code, b.title, b.author "+
        "FROM books b "+
        "LEFT JOIN borrows br ON br.id_book = b.id "+
        "WHERE br.id IS NULL",
        {
          type: sequelize.QueryTypes.query,
        }
      );
  
  
      return res.status(200).json({ data: books });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

module.exports = { getAllBooks, getNonBorrowedBooks};