const db = require("../model/db");
const bcrypt = require("bcrypt");

const getUserValue = async (req, res) => {
  try {
    const sql = "SELECT * FROM loginregister.users";
    const [rows] = await db.query(sql);
    res.status(200).send(rows);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const userValue = async (req, res) => {
  const { name, email, gender, password } = req.body;
  try {
    const hashpassword = await bcrypt.hash(password, 10);
    const sql =
      "INSERT INTO loginregister.users (name, email, gender, password) VALUES (?, ?, ?, ?)";

    await db.query(sql, [name, email, gender, hashpassword], (err, result) => {
      if (err) {
        console.error("Error inserting user:", err);
        return res.status(500).send("Internal Server Error");
      }
      res.status(200).send("User inserted successfully");
      console.log("User value is added:", result);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error);
  }
};

module.exports = {
  userValue,
  getUserValue,
};
