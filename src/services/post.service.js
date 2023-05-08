const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { User, Category, PostCategory, BlogPost } = require('../models');

const createPost = async (email, title, content, categoryIds) => {
  const t = await sequelize.transaction();
  const findUser = await User.findOne({ where: { email } });
  const userId = findUser.dataValues.id;

  try {
    const createBlogPost = await BlogPost.create({ title, content, userId }, { transaction: t });
    const postId = createBlogPost.dataValues.id;

    await Promise.all(categoryIds
      .map((x) => PostCategory.create({ postId, categoryId: x }, { transaction: t })));

    await t.commit();
    return { type: null, message: createBlogPost };
  } catch (e) {
    await t.rollback();
    console.log(e);
    throw e;
  }
};

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPosts;
};

const getAllInfosByBlogPostById = async (obj) => {
  const allPostById = await BlogPost.findOne({
    where: obj,
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allPostById;
};

const updateBlogPostById = async (id, title, content) => {
  const blogPostUpdate = await BlogPost.update(
    { title, content }, { where: { id } },
  );
  return blogPostUpdate;
};

module.exports = {
  createPost,
  getAll,
  getAllInfosByBlogPostById,
  updateBlogPostById,
};
