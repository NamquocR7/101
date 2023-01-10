import {DataSource} from "typeorm";

export const  AppDataSource = new DataSource({
    type:'mysql',
    host:'localhost',
    port:3306,
    database:'demo',
    username:'root',
    password:'123456',
    synchronize:true,
    entities:['dist/src/model/*.js']
})