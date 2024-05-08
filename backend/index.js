import express from 'express';
import Connection from './database/db.js';
import sid from './routes/userRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import movieRouter from './routes/movieRouter.js';
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

app.use('/api/users', sid);
app.use('/api/movie', movieRouter);


const port = 5001;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});

Connection()