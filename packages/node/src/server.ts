import express from 'express';
import userRouter from './users';

export const app = express();
app.use(express.json()); // pour parser le JSON dans req.body
app.use('/users', userRouter); // branche le router users

// Fonction exportée pour démarrer le serveur
export const startServer = (port = 3000) => {
    return app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  };
  
  // Ne pas exécuter le serveur lors des tests
  if (require.main === module) {
    startServer();
  }