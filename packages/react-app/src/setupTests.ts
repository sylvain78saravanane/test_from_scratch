// src/setupTests.ts
import '@testing-library/jest-dom';
import { server } from './mocks/browser';

beforeAll(() => {
  // La configuration onUnhandledRequest: 'error' est importante pour déboguer
  server.listen({ onUnhandledRequest: 'error' });
});

// Réinitialiser les handlers après chaque test
afterEach(() => {
  server.resetHandlers();
});

// Fermer le serveur après tous les tests
afterAll(() => {
  server.close();
});