const message = require("./DBMessages");

const addNewMeaage = async (req, res) => {
  try {
    await message.create(req.body);
    res
      .status(201)
      .json({ status: true, allMessages: "Message Created Successfully" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Not Created" });
  }
};
const getAllMessges = async (req, res) => {
  try {
    const messages = await message.find({});
    res.status(201).json({ status: true, data: messages });
  } catch (error) {
    res.status(500).json({ status: false, message: "Not Found" });
  }
  res.json();
};
module.exports = { getAllMessges, addNewMeaage };
