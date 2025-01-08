const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// Generate a report (admin only)
router.post('/', authMiddleware, adminMiddleware, reportController.generateReport);

// Fetch all reports (admin only)
router.get('/', authMiddleware, adminMiddleware, reportController.getAllReports);

// Fetch a single report by ID
router.get('/:id', authMiddleware, reportController.getReportById);

module.exports = router;
