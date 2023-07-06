import express from 'express';
import Todo from './database/db.js';
import cors from 'cors';
import route from './routes/routes.js';
const app = express();
//cors used to handle exception that occur when frontend and backend are on different servers
app.use(cors());
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use('/', route);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server is running Seccuessfully on PORT ${PORT}`))