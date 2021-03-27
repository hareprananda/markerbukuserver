import BukuModel from "../Model/Buku.model.js";
import UserModel from "../Model/User.model.js";
import Helper from "../Database/Helper.js";

const BukuController =  {
    async showBuku(req,res) {
       
        const {page} = req.query;
        const data = await Helper.pagination({
            model : BukuModel,
            perPage : 10,
            page : page,
        });
        res.json(data);
        
    },
    async singleBuku(req,res){

        const {id} = req.params;

        const data = await BukuModel.findOne({"_id" : id}).exec();

        if(!data) 
            return res.send("Oops something gone wrong");

        
        return res.json(data);
        
    },
    async tambahBuku(req,res){
        const admin = await UserModel.findOne({nama : "admin"}).exec();

        if(!admin) 
            return res.status(404).send("Belum ada admin");

        
        const body = req.body;
        body.penambah = admin["_id"];


        BukuModel.create(body,(err,data) => {
            if(err)
                return res.status(422).send(err);

            return  res.status(201).json(data);
        })
        
    },
    updateBuku(req,res){
      
        

      
    },
    deleteBuku(req,res){

    },





    showMarker(req,res) {
       
        
    },
    singleMarker(req,res){

        res.json(req.params)
    },
    async tambahMarker(req,res){
        const admin = await UserModel.findOne({nama : "admin"}).exec();

        if(!admin) 
            return res.status(404).send("Belum ada admin");

        
        const body = req.body;
        body.penambah = admin["_id"];


        BukuModel.create(body,(err,data) => {
            if(err)
                return res.status(422).send(err);

            return  res.status(201).json(data);
        })
        
    },
    updateMarker(req,res){
      
      
    },
    deleteMarker(req,res){

    }
    
}
export default BukuController;