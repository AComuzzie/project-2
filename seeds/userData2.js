const { User } = require("../models");
// Array of dummy blog post data
const userData = [
  {
    name: "user1",
    email: "user1@example.com",
    password: "password1",
  },
  {
    name: "user2",
    email: "user2@example.com",
    password: "password2",
  },
  {
    name: "user3",
    email: "user3@example.com",
    password: "password3",
  },
  {
    name: "user4",
    email: "user4@example.com",
    password: "password4",
  },
  {
    name: "user5",
    email: "user5@example.com",
    password: "password5",
  },
];
const user = () => User.bulkCreate(userData);
module.exports = user;