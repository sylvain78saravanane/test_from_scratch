import { render, screen } from '@testing-library/react';
import { UserList } from '../components/UserList';
import { server } from '../mocks/browser';
import { http, HttpResponse } from 'msw';

// Préparer la suite de tests
describe('UserList Component', () => {
    it('affiche le loader puis la liste des utilisateurs', async () => {
        render(<UserList />);

        // Vérifie que le loader est visible pendant le chargement
        expect(screen.getByRole('status')).toHaveTextContent('Chargement...');

        // Attend que les utilisateurs soient affichés
        const items = await screen.findAllByRole('listitem');
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('Alice');
        expect(items[1]).toHaveTextContent('Bob');
    });

    it('affiche un message si la requête échoue', async () => {
        // Remplacer le handler pour simuler une erreur 500
        server.use(
            http.get('/users', () =>
                HttpResponse.json({ error: 'Server Error' }, { status: 500 })
            )
        );

        render(<UserList />);

        // Attend l'affichage de l'erreur
        const alert = await screen.findByRole('alert');
        expect(alert).toHaveTextContent('Erreur : Erreur réseau');
    });

    it('affiche un message si aucun utilisateur n’est trouvé', async () => {
        // Remplacer le handler pour renvoyer un tableau vide
        server.use(
            http.get('/users', () =>
                HttpResponse.json([], { status: 200 })
            )
        );

        render(<UserList />);

        // Vérifie le message alternatif (nécessite logique dans UserList)
        const message = await screen.findByText(/aucun utilisateur trouvé/i);
        expect(message).toBeInTheDocument();
    });
});
