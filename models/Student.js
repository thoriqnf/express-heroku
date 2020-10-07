const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  // dateRegister: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

const Student = mongoose.model("students", StudentSchema);
module.exports = Student;
