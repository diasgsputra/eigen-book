const moment = require('moment');
const { sequelize, Borrow } = require("../models");

const addBorrowBook = async (req, res) => {
    const { id_book, id_member} = req.body;
  
    try {
        const [result] = await sequelize.query(
            "SELECT COUNT(br.id) AS count "+
            "FROM borrows br "+
            "INNER JOIN members m ON m.id = br.id_member "+
            "WHERE m.id = :id",
            {
              type: sequelize.QueryTypes.query,
              replacements: { id: id_member }
            }
          );
          const count = result[0].count;
          if(count > 1){
            return res.status(200).json({ message: "Member has borrow more than 1 book" });
          }

          const penalized = await sequelize.query(
            "SELECT is_penalty "+
            "FROM members "+
            "WHERE id = :id",
            {
              type: sequelize.QueryTypes.query,
              replacements: { id: id_member }
            }
          );
          
          if(penalized){
            return res.status(200).json({ message: "Member is being penalized" });
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

  const returnBook = async (req, res) => {
    const { id_borrow} = req.params;
    console.log("id_borrow : "+id_borrow)
  
    try {
        const [borrows] = await sequelize.query(
            "SELECT id_member, createdAt FROM borrows WHERE id = :id",
            {
              type: sequelize.QueryTypes.query,
              replacements: { id: id_borrow }
            }
          );
          const borrow = borrows[0]
          const now = moment();
          const borrowMoment = moment(borrow.createdAt);
          const id_member = borrow.id_member

          const diffDays = now.diff(borrowMoment, 'days');
          if(diffDays > 7){
            await sequelize.query(
              "UPDATE members SET is_penalty = 1 WHERE id = :id",
              {
                type: sequelize.QueryTypes.query,
                replacements: { id: id_member }
              }
            );
            await sequelize.query(
              "DELETE FROM borrows WHERE id = :id",
              {
                type: sequelize.QueryTypes.query,
                replacements: { id: id_borrow }
              }
            );
            
            return res.status(200).json({ message: "Return success but the member is being penalized because the return more than 7 days" });
          }

          await sequelize.query(
            "DELETE FROM borrows WHERE id = :id",
            {
              type: sequelize.QueryTypes.query,
              replacements: { id: id_borrow }
            }
          );
      return res.status(200).json({ message: "Return success" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  


  
module.exports = { addBorrowBook, returnBook};