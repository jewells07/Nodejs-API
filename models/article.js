const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: { type: String, require: true },
    body: { type: String, require: true },
    author: { type: String, require: true },
  },
  { timestamps: true }
);

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;