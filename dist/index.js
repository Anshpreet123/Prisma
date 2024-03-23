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
exports.allUsers = exports.Delete = exports.updateUser = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// creating first app 
// lets you insert data into user table
function createUser(username, password, firstName, lastName) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
            data: {
                username,
                password,
                firstName,
                lastName
            },
        });
        return newUser;
    });
}
exports.createUser = createUser;
function updateUser(id, username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.update({
            where: {
                id
            },
            data: {
                username,
                password,
            },
        });
        return newUser;
    });
}
exports.updateUser = updateUser;
function Delete(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = yield prisma.user.delete({
            where: {
                id
            },
        });
    });
}
exports.Delete = Delete;
function allUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const allofthem = yield prisma.user.findMany();
        return allofthem;
    });
}
exports.allUsers = allUsers;
