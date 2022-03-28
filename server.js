import express from 'express';
import router from './routes/index.js';

const app = express();

app.use(express.static('views'));
app.use('/api', router);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port: ${server.address().port}`);
});
server.on('error', error => console.log(`error running server: ${error}`));