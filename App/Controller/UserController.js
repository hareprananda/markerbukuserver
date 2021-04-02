import UserModel from "../Model/User.model.js";
export default {
  async getUser(req, res) {
    const data = await UserModel.find().exec();
    return res.json(data);
  },
  tambahUser(req, res) {
    UserModel.create(req.body, (err, data) => {
      if (err) return res.status(500).send(err);

      res.status(201).send(data);
    });
  },
  singleUser(req, res) {},
  updateUser(req, res) {},
};
