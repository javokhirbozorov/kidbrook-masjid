const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Speech extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Admin);
    }
  }
  Speech.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    videoUrl: DataTypes.STRING,
    adminId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Speech',
  });
  return Speech;
};
