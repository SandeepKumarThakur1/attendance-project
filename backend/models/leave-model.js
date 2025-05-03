const mongoose = require("mongoose");
const Joi = require("joi");

const leaveSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
    required: true,
  },
  leaveType: {
    type: String,
    enum: ["sick", "vacation", "casual", "other"],
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
});

function validateLeave(leave) {
  const schema = Joi.object({
    employeeId: Joi.string().required(),
    leaveType: Joi.string()
      .valid("sick", "vacation", "casual", "other")
      .required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    status: Joi.string().valid("pending", "approved", "rejected"),
  });

  return schema.validate(leave);
}

module.exports = {
  leaveModel: mongoose.model("leave", leaveSchema),
  validateLeave,
};
