const userCollection = require('../Models/userModel')

const doCreateUser = async (req, res) => {
    try {
      const user = new userCollection(req.body);
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  }

const doLoginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userCollection.findByCredentials(email, password);
      const token = await user.generateAuthToken();
      res.send({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  }

  module.exports = {
    doCreateUser,
    doLoginUser
  }