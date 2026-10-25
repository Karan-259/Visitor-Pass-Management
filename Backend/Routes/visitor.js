const express = require("express");
const { createVisitor, getAllVisitors, getSingleVisitor, updateVisitor, deleteVisitor } = require("../Controllers/visitorController");

const router = express.Router();

router.post("/api/visitors", createVisitor);

router.get("/api/visitors", getAllVisitors);

router.get("/api/visitors/:id", getSingleVisitor);

router.put("/api/visitors/:id", updateVisitor);

router.delete("/api/visitors/:id", deleteVisitor);

module.exports = router;
