// packages/react-app/jest.setup.js
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Ajouter le polyfill fetch
require('whatwg-fetch');