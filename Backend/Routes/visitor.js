const express = require("express");
const { createVisitor, getAllVisitors, getSingleVisitor, updateVisitor, deleteVisitor } = require("../Controllers/visitorController");

const router = express.Router();

router.post("/", createVisitor);

router.get("/", getAllVisitors);

router.get("/:id", getSingleVisitor);

router.put("/:id", updateVisitor);

router.delete("/:id", deleteVisitor);

module.exports = router;
