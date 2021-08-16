'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    due_date: {type :DataTypes.DATE,
      validate: {
        isGreaterThanToday(today){
          console.log(today);
          console.log(new Date().getDate());
          if(today < new Date().getDate()){
            throw new Error('maaf, tanggal nya wajib hari ini atau lebih besar dari pada hari ini, tidak boleh lebih kecil')
          }
      }
    }}
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};