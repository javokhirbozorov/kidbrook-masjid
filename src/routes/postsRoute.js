const route = require('express').Router();
const { removeUnsupportedItems } = require('@babel/preset-env/lib/filter-items');
const renderTemplate = require('../lib/renderTemplate');

// import post model
const { Post } = require('../../db/models');

// import post view
const Posts = require('../views/Posts');

route.get('/', async (req, res) => {
  const allPosts = await Post.findAll();
  renderTemplate(Posts, { allPosts }, res);
});

route.post('/', async (req, res) => {
  console.log(req.body, 'REQ BODY HERERHERHERHEHREHR');
  try {
    const { title, imgUrl, description } = req.body;

    const newPost = await Post.create({
      title, description, imgUrl,
    });
    console.log(newPost, 'newPOOOOOOST5OST5OST5OST5OST5OST5OST5OST5');
  } catch (err) { console.log(err); }
  // console.log(req.body);
  res.redirect('/posts');
});

route.delete('/', async (req, res) => {
  try {
    const { id } = req.body;

    await Post.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) { console.log(err); }
});

route.put('/', async (req, res) => {
  console.log(req.body);
  const {
    id, imgUrl, title, description,
  } = req.body;

  const editData = await Post.update({ title, description, imgUrl }, { where: { id } });
  if (editData) {
    const data = await Post.findByPk(id);

    return res.json(data);
  }

  res.sendStatus(500);
});

module.exports = route;
