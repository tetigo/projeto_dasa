"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const labsSchema_1 = require("../models/labsSchema");
exports.default = mongoose_1.default.model('labs', labsSchema_1.LabsSchema);
