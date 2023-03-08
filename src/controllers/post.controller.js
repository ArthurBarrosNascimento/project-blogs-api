const { PostService } = require('../services');

const createPost = async (req, res) => {
try {
  const { emailUser } = req.data;
  const { title, content, categoryIds } = req.body;
  const { message } = await PostService.createPost(emailUser, title, content, categoryIds);
  return res.status(201).json(message);
} catch (error) {
  console.log(error.message);
  return res.status(400).json({ message: 'one or more "categoryIds" not found' });
}
};

module.exports = {
  createPost,
};
