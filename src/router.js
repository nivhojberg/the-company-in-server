const express = require("express");
const { controller } = require("./controller");

const router = express.Router();

router.get("/search_domain", (req, res) => {
    console.log("req.query", req.query);
    res.json(controller.searchDomain(req.query.domain));
});

module.exports.router = router;
