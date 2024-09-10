const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const CertificateType = require('./CertificateType');

const Question = sequelize.define('Question', {
  question_text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  certificateTypeId: {
    type: DataTypes.INTEGER,
    references: {
      model: CertificateType,
      key: 'id'
    }
  }
}, {
  timestamps: false,
  tableName: 'questions'
});

CertificateType.hasMany(Question, { foreignKey: 'certificateTypeId' });
Question.belongsTo(CertificateType, { foreignKey: 'certificateTypeId' });

module.exports = Question;
