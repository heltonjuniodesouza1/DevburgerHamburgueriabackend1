import  Sequelize  from "sequelize";
import mongoose from "mongoose";
//import configDatabase from '../config/database.js';
import User from "../app/models/User.js";
import Product from "../app/models/Product.js";
import Category from "../app/models/Category.js";

const models = [User, Product,Category]

class Database{
    constructor(){

        this.init();
        this.mongo();
    }
    init(){
        this.connection = new Sequelize ('postgresql://postgres:fjnGxstRxuqtpgxQLEtXAAfaSxqhWLfp@autorack.proxy.rlwy.net:48313/railway');
        models
        .map((model) => model.init(this.connection))
        .map(
            (model) => model.associate && model.associate (this.connection.models),)
    }

    mongo(){
        this.mongoConnection = mongoose.connect ('mongodb://mongo:YCwcnvuuKJkAZiyaCUlTTXxIHFmTztwZ@autorack.proxy.rlwy.net:46437');
    }
}

export default new Database();