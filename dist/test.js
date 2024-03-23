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
const index_1 = require("./index");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a user
        const newUser = yield (0, index_1.createUser)('John Doe', 'johnjohn', 'Ansh', 'Preet');
        console.log('New user:', newUser);
        // Read users
        const users = yield (0, index_1.allUsers)();
        console.log('All users:', users);
        // Update user
        const updatedUser = yield (0, index_1.updateUser)(newUser.id, 'Jane Doe', 'jane@example.com');
        console.log('Updated user:', updatedUser);
        // Delete user
        yield (0, index_1.Delete)(newUser.id);
        console.log('User deleted successfully');
    });
}
main()
    .catch((e) => console.error(e))
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
