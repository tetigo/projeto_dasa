import mongoose from 'mongoose';
const mysql = require("mysql2/promise");

// const options ={
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }

class Database {
    // private DB_URL = 'mongodb://link-db/db_portal'
    // private DB_URL = 'mongodb://localhost:27017/db_portal'
    private DB_URL2 = 'mysql://root:admin@localhost:3306/db_labs'
    private connection = ''
    // createConnection() {
    //     mongoose.connect(this.DB_URL, options);
    // }

    async connect(){
        if(this.connection !== '')
            return this.connection
        // if(global.connection && global.connection.state !== 'disconnected')
        //     return global.connection;
        const connection = await mysql.createConnection(this.DB_URL2);
        console.log("Conectou no MySQL!");
        // global.connection = connection;
        return connection;
    }
}

export default Database;
