/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */


module.exports = (sequelize, DataTypes) => {
  const CategoriesModel = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    underscored: false,
    timestamps: false,
  }
  );
  return CategoriesModel;
};
