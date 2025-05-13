// src/__tests__/userList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserList } from '../components/UserList';
import { rest } from 'msw';
import { server } from '../mocks/browser';

describe('UserList Component', () => {
    it('affiche le loader puis la liste des utilisateurs', async () => {
        render(<UserList />);

        // Vérifie que le loader est visible initialement
        expect(screen.getByRole('status')).toHaveTextContent('Chargement...');

        // Attend que les éléments de liste apparaissent
        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('Alice');
        expect(items[1]).toHaveTextContent('Bob');
    });

    it('affiche un message si la requête échoue', async () => {
        // Remplacer temporairement le handler
        server.use(
            rest.get('/users', (req, res, ctx) => {
                return res(
                    ctx.status(500),
                    ctx.json({ error: 'Server Error' })
                );
            })
        );

        render(<UserList />);

        // Attend que le message d'erreur apparaisse
        const alert = await screen.findByRole('alert');
        expect(alert).toHaveTextContent('Erreur : Erreur réseau');
    });

    it('affiche un message si aucun utilisateur n\'est trouvé', async () => {
        // Remplacer temporairement le handler
        server.use(
            rest.get('/users', (req, res, ctx) => {
                return res(ctx.status(200), ctx.json([]));
            })
        );

        render(<UserList />);

        // Attend que le message apparaisse
        const message = await screen.findByText(/aucun utilisateur trouvé/i);
        expect(message).toBeInTheDocument();
    });
});