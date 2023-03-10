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

const getAllBlogUserCategory = async (_req, res) => {
  try {
    const allInfos = await PostService.getAll();
    return res.status(200).json(allInfos);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Error banco');
  }
};

const getAllBlogsUserCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const allInfoById = await PostService.getAllInfosByBlogPostById(id);
    if (!allInfoById) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(allInfoById);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json('Error banco');
  }
};

module.exports = {
  createPost,
  getAllBlogUserCategory,
  getAllBlogsUserCategoryById,
};
