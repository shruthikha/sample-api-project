const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "List of users" });
});

app.post("/users", (req, res) => {
  res.json({ message: "User created" });
});

app.put("/users/:id", (req, res) => {
  res.json({ message: "User updated" });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: "User deleted" });
});

module.exports = app;
