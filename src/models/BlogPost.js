/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


module.exports = (sequelize, DataTypes) => {
  const BlogPostModel = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  },
  );
  BlogPostModel.associate = (models) => {
    BlogPostModel.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'users',
    });
  };
  return BlogPostModel;
};
