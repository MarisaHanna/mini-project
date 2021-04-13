const express = require('express')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const customers = [

    {
       customerID: '' ,
       customerName:'',
       customerEmail: '',
       customerPhone: ''
    }
] 

app.get ('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

var data = {
    reservations: [],
    waitlist: [],
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'))}
    );

app.get('/reserve', (req, res) => {res.sendFile(path.join(__dirname, 'reserve.html'))}
);