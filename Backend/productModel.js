import { Sequelize } from "sequelize";
import db from "./db.js";
 
const { DataTypes } = Sequelize;
 
const test_wti = db.define('test_wti',{
    id:{
        type: DataTypes.INTEGER(11),
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true, 
    },
    name:{
        type: DataTypes.STRING
    },
    lastName:{
        type: DataTypes.DOUBLE
    },
    email:{
        type: DataTypes.STRING
    },
    project:{
        type: DataTypes.STRING
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue : true,
        allowNull : true
    },
    updatedAt:{
        type: DataTypes.DATE,
        defaultValue : true,
        allowNull : true
    },
},{
    freezeTableName: true
});
 
export default test_wti;