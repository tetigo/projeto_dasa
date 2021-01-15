"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./App"));
// let host = process.env.HOST = 'localhost';
let host = process.env.HOST || '0.0.0.0';
let port = process.env.PORT || '3000';
App_1.default.app.listen({ port, host }, () => {
    console.log(`server listening on: ${host}:${port}`);
});
