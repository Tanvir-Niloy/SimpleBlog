const express = require('express');
const colors = require('colors')
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const port = process.env.PORT || 8000;
connectDB();


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter);


app.listen(port,(
          console.log(`Server running on port ${port}`.bgYellow.bold)
))