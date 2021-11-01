import express, {Request, Response} from 'express';
import path from 'path';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

const server = express();

//INCLUINDO O MUSTACHE
server.set('view engine', 'mustashe');
server.set('views', path.join(__dirname, 'views')); //Arquivo html
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

//Para página não encontrada
server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');

});


server.listen(80);