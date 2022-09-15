const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Donation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Admin);
      this.belongsToMany(models.User, { through: models.Fav, foreignKey: 'donationId' });
    }
  }
  Donation.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    imgUrl: DataTypes.STRING,
    target: DataTypes.INTEGER,
    collected: DataTypes.INTEGER,
    adminId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Donation',
  });
  return Donation;
};
