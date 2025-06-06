// src/mocks/browser.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Configuration pour les tests avec Jest
export const server = setupServer(...handlers);