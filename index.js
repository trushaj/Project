const express = require('express');
const categoryRoutes = require('./src/Product/Routes/cat.routes');
const subCategoryRoutes = require('./src/Product/Routes/subc.routes');
const prodRoutes = require('./src/Product/Routes/prod.routes');
const userRoutes = require('./src/Product/Routes/user.routes');
const authRoutes = require('./src/Product/Routes/auth.routes');
const Sequelize = require('sequelize');
const dotenv = require('dotenv');

var sequelize = new Sequelize('products', 'postgres', '2102', {
    dialect: "postgres", 
    port:    5432 
});

const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', function(req, res){
    res.redirect('/home');
});
  
app.get('/home', function(req, res){
    res.send("HOME Page");
});

app.use('/api/category', categoryRoutes);
app.use('/api/sub-category', subCategoryRoutes);
app.use('/api/product', prodRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send("Page Not Found!");
});

dotenv.config();

app.listen(PORT, ()=> {
    console.log('Listening on PORT 5000...');
    
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });