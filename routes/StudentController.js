const express = require("express");
const Student = require("../models/Student");
const app = express();

app.get("/student", async (req, res) => {
  console.log("student", Student);
  const students = await Student.find({});

  try {
    res.send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.get("/student/:id", async (req, res) => {
  console.log("student", Student);
  const students = await Student.findById(req.params.id);

  try {
    res.send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.post("/student", async (req, res) => {
  console.log("Student", Student);
  const students = await Student.create(req.body);
  console.log("students", students);
  try {
    res.send(students);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.delete("/student/:id", async (req, res) => {
  const students = await Student.findByIdAndDelete(req.params.id);

  try {
    if (!students) res.status(404).send("not found");
    res.status(200).send("Berhasil di hapus");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/student", async (req, res) => {
  const students = await Student.deleteMany();

  try {
    if (!students) res.status(404).send("not found");
    res.status(200).send("Berhasil di hapus semua isi collection");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.put("/student/:id", async (req, res) => {
  const students = await Student.findByIdAndUpdate(req.params.id, req.body);
  try {
    await students.save();
    res.status(200).send("berhasil mengubah data");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
