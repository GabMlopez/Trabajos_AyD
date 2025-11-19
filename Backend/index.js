import express from 'express';
import cors from 'cors';
import estudianteRoutes from './routes/estudiante_routes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', estudianteRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend corriendo en http://localhost:${PORT}`);
});