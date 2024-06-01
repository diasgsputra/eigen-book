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


    // Handle successful login
    return res.status(200).json({ data: books });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllBooks};