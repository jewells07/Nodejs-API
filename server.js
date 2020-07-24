const express = require('express');
const app = express();

const mongoose = require('mongoose')

const port = process.env.PORT || 3000;

// Database connection
const url = 'mongodb://localhost/api'
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology:true
})

const connection = mongoose.connection
connection.once('open',()=>{
  console.log('DB Connected');
  
}).catch(err =>{
  console.log('DB Error');
})

// 
app.use(express.json())


// Routes
const articlesRoutes = require('./routes/articles');

app.use('/api/articles',articlesRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
