import app from './app.js';
import config from './config.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path';

const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const dirname = path.resolve();

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname,'src', 'public', 'index.html'));
  });

app.use((req, res, next) => {
    console.error(`Ruta no encontrada: ${req.url}`);
    res.status(404).send('Ruta no encontrada');
  });

server.listen(config.port, (err) => {
    if (err) {
        console.error(`Error starting server: ${err.message}`);
        process.exit(1);
    }
    console.log(`Server is running on http://localhost:${config.port}`);
});