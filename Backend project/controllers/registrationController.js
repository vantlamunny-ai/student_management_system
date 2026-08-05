const registrationService = require("../services/registrationService");

// Register Event
async function registerEvent(req,res){

    try{

        const {event_id} = req.body;

        const registration = await registrationService.registerEvent(
            req.user.id,
            event_id
        );

        res.status(201).json({
            success:true,
            message:"Event Registered Successfully",
            data:registration
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}

// Get All
async function getAllRegistrations(req,res){

    try{

        const registrations =
        await registrationService.getAllRegistrations();

        res.status(200).json({
            success:true,
            data:registrations
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}

// Get By Id
async function getRegistrationById(req,res){

    try{

        const {id}=req.params;

        const registration =
        await registrationService.getRegistrationById(id);

        if(!registration){

            return res.status(404).json({
                success:false,
                message:"Registration not found"
            });

        }

        res.status(200).json({
            success:true,
            data:registration
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}

// Delete
async function deleteRegistration(req,res){

    try{

        const {id}=req.params;

        const registration =
        await registrationService.deleteRegistration(id);

        if(!registration){

            return res.status(404).json({
                success:false,
                message:"Registration not found"
            });

        }

        res.status(200).json({
            success:true,
            message:"Registration Cancelled Successfully"
        });

    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

}

module.exports={
    registerEvent,
    getAllRegistrations,
    getRegistrationById,
    deleteRegistration
}