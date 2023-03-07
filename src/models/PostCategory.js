/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

module.exports = (sequelize, DataTypes) => {
  const PostCategoryModel = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  }
  );
  PostCategoryModel.associate = ({ Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: PostCategoryModel,
      as: 'blog_posts',
    });
    BlogPost.belongsToMany(Category, {
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: PostCategoryModel,
      as: 'categories',
    });
  };

  return PostCategoryModel;
};
