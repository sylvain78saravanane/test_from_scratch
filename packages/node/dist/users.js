"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userStore_js_1 = require("./userStore.js");
const router = (0, express_1.Router)();
/**
* GET /users
* → renvoie la liste JSON des utilisateurs.
*/
router.get('/', (_req, res) => {
    res.status(200).json((0, userStore_js_1.getUsers)());
});
/**
* POST /users
* Body attendu: { name: string }
* → crée un utilisateur ou renvoie 400 si name manquant.
*/
router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'name is required' });
    }
    const user = (0, userStore_js_1.createUser)(name);
    res.status(201).json(user);
});
exports.default = router;
