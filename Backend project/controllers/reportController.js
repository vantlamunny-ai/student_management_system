const reportService = require("../services/reportService");

async function getRegistrationReport(req, res) {

    try {

        const report = await reportService.getRegistrationReport();

        res.status(200).json({
            success: true,
            data: report
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

async function getEventReport(req, res) {

    try {

        const report = await reportService.getEventReport();

        res.status(200).json({
            success: true,
            data: report
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

module.exports = {
    getRegistrationReport,
    getEventReport
};