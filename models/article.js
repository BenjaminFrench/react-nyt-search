const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true , unique: true},
  date: { type: Date, required: true },
  url: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at' } });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
