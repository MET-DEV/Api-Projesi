const {Sequelize}=require('sequelize')

module.exports=new Sequelize('BigDb','postgres','12345',{
    host:'localhost',
    dialect:'postgres'
})