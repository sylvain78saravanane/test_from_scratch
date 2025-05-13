// src/mocks/handlers.ts
import { rest } from 'msw';
import { User } from '../hooks/useUsers';

// Données de test
let users: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

export const handlers = [
    // GET /users
    rest.get('/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(users));
    }),

    // POST /users
    rest.post('/users', async (req, res, ctx) => {
        try {
            const body = await req.json();
            const name = body?.name;
            
            if (!name) {
                return res(
                    ctx.status(400),
                    ctx.json({ error: 'name is required' })
                );
            }

            const newUser = { id: users.length + 1, name };
            users.push(newUser);

            return res(ctx.status(201), ctx.json(newUser));
        } catch (error) {
            return res(
                ctx.status(400),
                ctx.json({ error: 'Invalid JSON in request body' })
            );
        }
    }),
];