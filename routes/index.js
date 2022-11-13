const express = require('express');

// import controllers


const router = express.Router();


router.get('/project-summary', projectSummaryController.projectSummary)
module.exports = router