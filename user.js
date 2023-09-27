const dbConnect = require('./dbConnect')
const {DataTypes, Sequelize} = require('sequelize')

const User = dbConnect.define('user',{
    id:{
        primaryKey:true,
        type: DataTypes.STRING,
        allowNull: false,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    fullname:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.sync({alter:true})
module.exports = User

