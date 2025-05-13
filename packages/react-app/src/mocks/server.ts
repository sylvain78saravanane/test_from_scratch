// src/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Création du serveur MSW dédié pour les tests
export const server = setupServer(...handlers);