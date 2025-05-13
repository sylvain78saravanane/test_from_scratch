"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetStore = exports.createUser = exports.getUsers = void 0;
let users = [];
let nextId = 1;
/**
 * Renvoie la liste courante des users.
 */
function getUsers() {
    return users;
}
exports.getUsers = getUsers;
/**
 * Crée un utilisateur avec auto-incrémentation des IDs.
 */
function createUser(name) {
    const user = { id: nextId++, name };
    users.push(user);
    return user;
}
exports.createUser = createUser;
/**
* Réinitialise l'état du store.
* Utile pour isoler chaque test.
*/
function resetStore() {
    users = [];
    nextId = 1;
}
exports.resetStore = resetStore;
