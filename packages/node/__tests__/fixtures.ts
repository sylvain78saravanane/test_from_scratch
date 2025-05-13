import { User } from '../src/userStore';

export const alice: User = { id: 1, name: 'Alice' };
export const bob: User = { id: 2, name: 'Bob' };

// Tableau complet pour initialiser le store
export const initialUsers: User[] = [alice, bob];