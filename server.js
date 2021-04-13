import express from 'express';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; 

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {res.send('WORKING!') }),

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});