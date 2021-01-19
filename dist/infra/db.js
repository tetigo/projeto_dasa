"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql2/promise");
// const options ={
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// }
class Database {
    constructor() {
        // private DB_URL = 'mongodb://link-db/db_portal'
        // private DB_URL = 'mongodb://localhost:27017/db_portal'
        this.DB_URL2 = 'mysql://root:admin@localhost:3306/db_labs';
        this.connection = '';
    }
    // createConnection() {
    //     mongoose.connect(this.DB_URL, options);
    // }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.connection !== '')
                return this.connection;
            // if(global.connection && global.connection.state !== 'disconnected')
            //     return global.connection;
            const connection = yield mysql.createConnection(this.DB_URL2);
            console.log("Conectou no MySQL!");
            // global.connection = connection;
            return connection;
        });
    }
}
exports.default = Database;
