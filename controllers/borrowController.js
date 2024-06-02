const { sequelize, Borrow } = require("../models");

const addBorrowBook = async (req, res) => {
    const { id_book, id_member} = req.body;
  
    try {
        const [result] = await sequelize.query(
            "SELECT COUNT(br.id) AS count "+
            "FROM borrows br "+
            "INNER JOIN members m ON m.id = br.id_member "+
            "WHERE m.id = :id AND m.is_penalty = 0",
            {
              type: sequelize.QueryTypes.query,
              replacements: { id: id_member }
            }
          );
          const count = result[0].count;
          if(count > 1){
            return res.status(200).json({ message: "Member has borrow more than 1 book" });
          }

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