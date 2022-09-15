const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fav extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fav.init({
    userId: DataTypes.INTEGER,
    donationId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Fav',
  });
  return Fav;
};