const {AirplaneRepository} = require('../repositories');
const airplaneRepository = require("../repositories/crud-repository");
const airPlaneRepository = new AirplaneRepository();
async function createAirplane(data){
    try{
        const airplane = await airPlaneRepository.create(data);
        return airplane;
    }catch (e) {
        throw e ;
    }
}
async function getAirplanes(){
    try{
        const airplanes = await airPlaneRepository.getAll();
        return airplanes;
    }catch (e) {
        throw e ;
    }
}
async function getAirplaneById(id){
    try{
        const airplane = await airPlaneRepository.get(id);
        return airplane;
    }catch (e){
        throw e ;
    }
}
async function destroyAirplane(id){
    try{
        const result = await airPlaneRepository.destroy(id);
        return result;
    }catch (e) {
        throw e ;
    }
}
module.exports = {
    createAirplane , getAirplanes , getAirplaneById ,destroyAirplane
}