const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);
const { User, PostCategory, BlogPost } = require('../models');
const schema = require('./validations/validateInputsLogin');

const createPost = async (email, title, content, categoryIds) => {
  const t = await sequelize.transaction();
  const error = schema.validateArrayOfNumbers(categoryIds);
  if (error.type) return error;

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

module.exports = {
  createPost,
};
