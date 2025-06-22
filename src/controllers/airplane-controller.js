const  {AirPlaneService} = require('../services');
const {StatusCodes} = require('http-status-codes')
async function createAirPlane(req , res){
    try {
        const airplane = await AirPlaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity : req.body.capacity

        })
        return res.status(StatusCodes.CREATED).json({

            success : true ,
            message : 'Successfully created an airplane',
            data: airplane ,
            error : {}
        });
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Something went wrong while creating airplane",
            data : {},
            error : e
        })
    };
}
async function getAirplanes(req , res) {
    try{
        const airplanes = await AirPlaneService.getAirplanes();
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully get Airplanes',
            data : airplanes ,
            error : {}
        })
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't fetch Airplanes from database",
            data : {},
            error : e
        })
    }
}
async function getAirplaneById(req , res) {
    try{
        const airPlaneId = req.params.id;
        const airplane = await AirPlaneService.getAirplaneById(airPlaneId);
        if (airplane == null) {
            return res.status(StatusCodes.NOT_FOUND).json({
                success : false ,
                message : 'Airplane does not exist',
                data : {},
                error : {}
            })
        }
        return res.status(StatusCodes.OK).json({
            success : true ,
            message : 'Successfully get Airplanes',
            data : airplane ,
            error : {}
        })
    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't fetch Airplane from database",
            data : {},
            error : e
        })
    }
}
async function deleteAirplane(req , res){
    try{
        const airPlaneId = req.params.id;
        const res = await AirPlaneService.destroyAirplane(airPlaneId);
        console.log(res);
        if (res === 1){
            return res.status(StatusCodes.OK).json({
                success : true ,
                message : 'Successfully deleted',
                data : {},
                error : {}
            });
        }

    }catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success : false ,
            message : "Can't delete Airplane",
            data : {},
            error : e
        })
    }
}
module.exports = {
    createAirPlane ,
    getAirplanes ,
    getAirplaneById ,
    deleteAirplane
}