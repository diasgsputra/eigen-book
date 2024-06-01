const { sequelize } = require("../models");

const getAllMembers = async (req, res) => {
  try {
    // get all member
    const [member] = await sequelize.query(
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

module.exports = { getAllMembers};