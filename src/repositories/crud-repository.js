const {Logger} = require('../config');
class CrudRepository{
    constructor(model) {
        this.model = model;
    }
    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }catch (e) {
            Logger.error('Something went wrong in crud repo : in create function');
            throw e;
        }
    }
    async destroy(data){
        try{
            const response = await this.model.destroy({
                where : {
                    id:data
                }
            });
            return response;
            // console.log(response)
        }catch (e) {
            Logger.error('Something went wrong in crud repo : in destroy function');
            throw e;
        }
    }
    async get(data){
        try{
            const response = await this.model.findByPk(data)
            return response;
        }catch (e) {
            Logger.error('Something went wrong in crud repo : in get function');
            throw e;
        }
    }
    async getAll(){
        try{
            const response = await this.model.findAll();
            return response;
        }catch (e) {
            Logger.error('Something went wrong in crud repo : in getAll function');
            throw e;
        }
    }
    async update(id , data){
        try{
            const response = await this.model.update(data , {
                where: {
                    id:id
                }
            });
            return response;
        }catch (e) {
            Logger.error('Something went wrong in crud repo : in getAll function');
            throw e;
        }
    }
}
module.exports = CrudRepository;