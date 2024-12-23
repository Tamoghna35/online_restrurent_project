
import { sequelize } from "../db/dbCredentials.js";


export const DB_CONNECTION = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync({});
        console.log(`Tables are created`);
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        
    }
}