const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Listing extends Model {}
Listing.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    business_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'New Business',
    },
    job_title: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    job_description: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'New Job Description',
    },
    job_location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'New Job Location',
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        defaultValue: 'default@example.com',
        validate: {
          isEmail: true,
        }
      },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // Reference the 'user' model, which we set in User.js as its 'modelName' property
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'listing'
  }
);
module.exports = Listing;





