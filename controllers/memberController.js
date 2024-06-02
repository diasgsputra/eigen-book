const { sequelize } = require("../models");

const getAllMembers = async (req, res) => {
  try {
    const [members] = await sequelize.query(
      "SELECT * FROM members",
      {
        type: sequelize.QueryTypes.query,
      }
    );


    return res.status(200).json({ data: members });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getCountBorrowedBooksByMember = async (req, res) => {
  const {code_member} = req.params;
  try {
    const [result] = await sequelize.query(
      "SELECT COUNT(br.id) AS count "+
      "FROM borrows br "+
      "INNER JOIN members m ON br.id_member = m.id "+
      "WHERE m.code = :code",
      {
        type: sequelize.QueryTypes.query,
        replacements: { code: code_member }
      }
    );
    const count = result[0].count;
    
    return res.status(200).json({ data: count });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { 
  getAllMembers, 
  getCountBorrowedBooksByMember
};